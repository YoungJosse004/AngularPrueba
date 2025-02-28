import { Component } from '@angular/core';
import { Item } from '../../model/item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  productos:any[]=[ //este es el array del catalogo
    {id:1, producto: 'Laptop', cantidad:1, precio:1200},
    {id:2, producto: 'Mouse', cantidad:1, precio:20},
    {id:3, producto: 'Teclado', cantidad:1, precio:50}
  ]

  
  constructor(public cartService: CartService) {}
  
  /*agregarAlcarrito(producto: any){
    this.cartService.addToCart({...producto}); //actualiza el array del carrito con el nuevo item
  }*/
}
