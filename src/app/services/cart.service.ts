import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Paquete } from '../model/paquete';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Paquete[]=[];
  private cartSubject=new BehaviorSubject<Paquete[]>([]); //inicializa como un array vacio para sus suscriptores
  cart$=this.cartSubject.asObservable(); //exponerlo como un Observable
  constructor() {}

  getCart():Paquete[]{
    return this.cartItems; //retorna el array actual de items
  }

  addToCart(item: Paquete): void{
    const index=this.cartItems.findIndex(i=>i.producto.id===item.producto.id);
    if (index!==-1) { //verifica sí el producto ya existe para solo modificar su cantidad
      this.cartItems[index].cantidad++;
    }else{ //en caso dicho producto no exista en el Carrito entonces se agrega como uno nuevo
      this.cartItems.push(item); //debe de recibir un objeto paquete
    } //despues de hacer modificaciones al array "CartItems"
    //next(nuevoValor) se usa para Emitir el Nuevo valor del array(cartItems) mediante el BehaviorSubject
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(id:number):void{
    this.cartItems=this.cartItems.filter(item=>item.producto.id!==id);
    this.cartSubject.next(this.cartItems); // 🔥 Notifica a los suscriptores
  }

  cleartCart():void{
    this.cartItems=[];
    this.cartSubject.next(this.cartItems);
  }

  aumentarCantidad(id:number){
    const index=this.cartItems.findIndex(i=>i.producto.id===id);
    //En el carrito obviamente ya existe
    this.cartItems[index].cantidad++;
    this.cartSubject.next(this.cartItems); //Notifica a todos los suscriptores
  }
  decrementarCantidad(id:number){
    const index=this.cartItems.findIndex(i=>i.producto.id===id);
    if (this.cartItems[index].cantidad==1) {
      this.cartItems=this.cartItems.filter(item=>item.producto.id!==id); //este item se quita del array
    }else{
    this.cartItems[index].cantidad--;
    }
    this.cartSubject.next(this.cartItems); //notifica
  }
}
//Usamos el BehaviorSubject<Item[]> para manejar el estado del carrito.
// todos los componentes que estan suscritos se actualizan automaticamente, asi el header
//muestra la cantidad de productos en tiempo real sin necesidad de recargar la pagina

//Si solo guardamos los datos en una variable normal dentro del servicio, los componentes
//no se enteran de los cambios, a menos que se haga una actualización manual con una función.