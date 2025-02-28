import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
@Component({
  selector: 'app-elementos-h',
  imports: [FormsModule],
  templateUrl: './elementos-h.component.html',
  styleUrl: './elementos-h.component.css'
})
export class ElementosHComponent {
  nombre: string = '';
  aceptaTerminos: boolean = false;
  genero: string = '';

  enviarFormulario(event: Event) {
    event.preventDefault(); // Evitar recarga de la página
    console.log('Datos enviados:', {
      nombre: this.nombre,
      aceptaTerminos: this.aceptaTerminos,
      genero: this.genero
    });
    alert(`Datos enviados:\nNombre: ${this.nombre}\nAceptó términos: ${this.aceptaTerminos}\nGénero: ${this.genero}`);
  }
}
