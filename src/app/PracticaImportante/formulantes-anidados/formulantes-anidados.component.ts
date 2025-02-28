import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulantes-anidados',
  imports: [ReactiveFormsModule,JsonPipe,FormsModule,NgFor],
  templateUrl: './formulantes-anidados.component.html',
  styleUrl: './formulantes-anidados.component.css'
})
export class FormulantesAnidadosComponent {
  formularioEstudiante!: FormGroup; // Declaramos sin inicializar


  // Lista de materias predefinidas
  materiasPredefinidas: string[] = [];

  ngOnInit() {
    // Inicializamos el FormGroup paso a paso
    this.formularioEstudiante = new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
      edad: new FormControl('',[Validators.min(18)]),

      // Subgrupo de dirección
      direccion: new FormGroup({
        calle: new FormControl(''),
        ciudad: new FormControl('')
      }),

      // FormArray para las materias (inicialmente vacío)
      materias: new FormArray([])
    });

    // Agregar materias predefinidas ( Opcional ) al formulario
    //this.materiasPredefinidas.forEach(materia => this.agregarMateria(materia));
  }

  // Método para obtener referencia al FormArray
  get materiasArray() {
    return this.formularioEstudiante.get('materias') as FormArray;
  }

  // Método para agregar una nueva materia al array
  agregarMateria(nombreMateria: string = '') {
    this.materiasArray.push(new FormControl(nombreMateria));
  }

  // Método para enviar el formulario
  guardarEstudiante() {
    console.log('Formulario enviado:', this.formularioEstudiante.value);
    alert('Datos del estudiante:\n' + JSON.stringify(this.formularioEstudiante.value, null, 2));
    this.materiasArray.clear(); //limpiamos el formualrio antes del reset
    this.formularioEstudiante.reset({
      nombre: "",
      edad: "", //
      direccion: {
        calle: "",
        ciudad: ""
      }
      //No es necesario incluirlo pues lo reseteara por defecto, además podemos incluir los predeterminados
    })
  }
}
