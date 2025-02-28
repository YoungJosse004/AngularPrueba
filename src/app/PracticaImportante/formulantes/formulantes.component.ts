import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulantes',
  imports: [FormsModule,JsonPipe,ReactiveFormsModule],
  templateUrl: './formulantes.component.html',
  styleUrl: './formulantes.component.css'
})
export class FormulantesComponent {
  paisSeleccionado = 'mexico'; // Valor inicial del select
  generoSeleccionado = ''; // No hay género seleccionado por defecto
  aceptaTerminos = false; // Checkbox desmarcado por defecto

  // Capturar cambios en el select
  actualizarPais(event: Event) {
    this.paisSeleccionado = (event.target as HTMLSelectElement).value;
  }

  // Capturar cambios en los radio buttons
  actualizarGenero(event: Event) {
    this.generoSeleccionado = (event.target as HTMLInputElement).value;
  }

  // Capturar cambios en el checkbox
  actualizarAceptaTerminos(event: Event) {
    this.aceptaTerminos = (event.target as HTMLInputElement).checked;
  }

  // Capturar los datos al enviar el formulario
  enviarFormulario(event: Event) {
    event.preventDefault(); // Evita la recarga de la página
    console.log('Datos del formulario:', {
      país: this.paisSeleccionado,
      género: this.generoSeleccionado,
      términosAceptados: this.aceptaTerminos
    });

    alert(`Datos enviados:
    - País: ${this.paisSeleccionado}
    - Género: ${this.generoSeleccionado}
    - Aceptó términos: ${this.aceptaTerminos ? 'Sí' : 'No'}`);
  }

  
// Opciones para el select ----------------
cargos: string[] = ['Desarrollador', 'Diseñador', 'Gerente', 'Tester'];

// Definimos el formulario reactivo con FormGroup ------------------------------
formularioEmpleado = new FormGroup({
  nombre: new FormControl('',[Validators.required,Validators.minLength(3)]), // Validaciones
  cargo: new FormControl(this.cargos[0]), // Select con valor inicial
  genero: new FormControl(''), // Radio button
  activo: new FormControl(false) // Checkbox
});

// Método para capturar el formulario completo
guardarEmpleado() {
  console.log('Formulario enviado:', this.formularioEmpleado.value);
  alert('Datos enviados:\n' + JSON.stringify(this.formularioEmpleado.value, null, 2));
  //Oobtener el valor de un solo campo (get('')? .value)
  //Podemos pasar un objeto con valores predeterminados al reset(), para evitar que los deje en NULL
  this.formularioEmpleado.reset({ //resaltar que existen varias formas de hacer reset()
    nombre: '',
    cargo: 'Desarrollador',
    genero: '',
    activo:false
  });
}

}
