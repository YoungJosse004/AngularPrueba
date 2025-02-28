import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  totalItems=0;
  constructor(public cartService:CartService){ //se suscribe al observable
    //cuando se emite un nuevo valor, osea cuando en alguna otra parte ejecuta un metodo del servicio el next() notifica.
    //aquí se recibe ese nuevo valor (items), el array de items que ha sido modificado
    cartService.cart$.subscribe(items=>{
      this.totalItems=items.reduce((total,item)=>total+item.cantidad,0)
    })
  }
}
