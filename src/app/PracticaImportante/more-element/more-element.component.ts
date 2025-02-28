import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-more-element',
  imports: [FormsModule],
  templateUrl: './more-element.component.html',
  styleUrl: './more-element.component.css'
})
export class MoreElementComponent {
  isDisabled=true; //el valor de esta variable se le pasa a la propiedad de un Elemento HTML [PropertyBidding]
  texto=''; 
  nombre: any='';
  acepto:boolean=false;
  paises:string[]=["colombia","argentina","peru"];
  pais="Sudafrica"; //se inicializa con unas de las tantas opciones
  paisSeleccionado="argentina";
  estado='mexico';

  cambiarPais(e:any){
    this.paisSeleccionado=e.target.value;
  }
  cambiarColor(e:any){
    this.pais=e.target.value;
  }

  mostrarTexto(event: Event){
    const inputElement=event.target as HTMLInputElement;
    this.texto=inputElement.value;
  }
  toggleInput(){
    this.isDisabled=!this.isDisabled;
  }
}
