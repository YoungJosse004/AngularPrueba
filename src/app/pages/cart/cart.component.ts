import { Component } from '@angular/core';
import { Item } from '../../model/item';
import { CartService } from '../../services/cart.service';
import { Paquete } from '../../model/paquete';
import { CurrencyPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:Paquete[]=[];
  constructor(public cartService:CartService){
    //suscripcion al observable cart, la funcion callback se ejecutara cada vez que el observable 
    //emita un nuevo valor.
    cartService.cart$.subscribe(items=>{ // recibe el valor emitido por el observable osea los items
      this.cart=items; // y lo setea automaticamente a la variable cart[]
    })
  }

  incrementar(id:number){ //Si esta en el carrito es porque ya existe
    this.cartService.aumentarCantidad(id);
  }

  decrementar(id:number){
    this.cartService.decrementarCantidad(id);
  }

  eliminarDelCarrito(id:number){
    this.cartService.removeFromCart(id);
  }

  vaciarCarrito(){
    this.cartService.cleartCart();
  }

}
