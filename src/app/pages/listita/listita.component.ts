import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Paquete } from '../../model/paquete';
import { Producto } from '../../model/product';

@Component({
  selector: 'app-listita',
  imports: [CurrencyPipe,JsonPipe], //uso de este Pipe para mostrar la imagen ya que viene como "codificado de caracteres"
  templateUrl: './listita.component.html',
  styleUrl: './listita.component.css'
})
export class ListitaComponent implements OnInit{
  productos: Producto[]=[]; //este array de productos
  paquetito:Paquete={ //inicializo
    producto:{
      id:0,
      name:'',
      price:0,
      image:''
    },
    cantidad:1
  };
  constructor(public productoService:ProductsService, public cartService:CartService){}

  ngOnInit(): void {
    this.listarTodos(); //al inicio del componente o cuando se renderiza de nuevo
  } //verificar
  
  listarTodos(){
    this.productoService.obtenerProductos().subscribe({
      next: (data)=>{
        this.productos=data;
      },
      error: (e)=>{
        console.log("Error al obtener productos",e);
      }
    })    
  }
  
  agregarAlCarrito(producto:Producto){ //actualizo el array del Carrito
    this.paquetito.producto=producto; //seteo el producto a al item
    console.log(this.paquetito);
    //podria agregar algun validador o try catch
    this.cartService.addToCart({...this.paquetito}); //se debe de pasar un objeto de tipo Paquete
    this.limpiarProducto();
  }

  limpiarProducto(){
    this.paquetito.producto={
      id:0,
      name:'',
      price:0,
      image:''
    }
  }
}
//mejorar estructura e inicializacion