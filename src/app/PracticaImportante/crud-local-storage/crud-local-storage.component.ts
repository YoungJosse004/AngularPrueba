import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-crud-local-storage',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './crud-local-storage.component.html',
  styleUrl: './crud-local-storage.component.css'
})
export class CrudLocalStorageComponent implements OnInit{
  formularioEstudiante!: FormGroup;
  estudiantes:any[]=[]; //tambien se puede inicializar aqui con una array Vacio
  indexEdicion:number | null = null; //guardamos el indice del estudiante que se esta editando
  constructor(public storageService:StorageService){}

  ngOnInit(): void { //ciclo de vida del componente (Cada vez que se reinicia o actualiza la pagina)
    this.formularioEstudiante=new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
      edad: new FormControl('',[Validators.required,Validators.min(18)])
    });
    //inicializa el array vacio:
    if (this.storageService.obtenerEstudiantes().length===0) {
      console.log('Aun no se han agregado estudiantes');
    }else{ //recarga el array estudiantes con el del local Storage
      this.estudiantes=this.storageService.obtenerEstudiantes();
    }
  }

  //Agregar Estudiante
  guardarEstudiante(){
    //capturamos el objeto estudiante del formGroup
    if (this.formularioEstudiante.valid) {
      const estudiante=this.formularioEstudiante.value;
        if (this.indexEdicion!==null) {
          //si existe un Indice, actualizamos en localStorage
          this.storageService.actualizarEstudiante(this.indexEdicion,estudiante);
          this.indexEdicion=null; //reiniciamos el modo edicion
        }else{
          //si no hay indice, entonces estamos agregando un nuevo estudiante
          this.storageService.agregarEstudiante(estudiante);
        }
        this.estudiantes=this.storageService.obtenerEstudiantes(); //vuelvo a recuperar la lista del storage
        this.formularioEstudiante.reset(); //limpiamos el formulario
    }else{
      alert('por favor, complete el formulario');
    }
  }

  //cargar datos en el formulario para editar
  editarEstudiante(index:number){
    const estudiante=this.estudiantes[index]; //capturamos el estudiante especifico de la lista
    this.formularioEstudiante.setValue({ //procedemos a setear los campos del formulario
      nombre: estudiante.nombre,
      edad: estudiante.edad
    });
    this.indexEdicion=index; //guardamos el indice del estudiante en edicion
  }
  //eliminar estudiante
  eliminarEstudiante(index:number){
    this.storageService.eliminarEstudiante(index);
    this.estudiantes=this.storageService.obtenerEstudiantes(); //vuelvo a recargar la lista
    console.log(this.estudiantes);
    
  }
}
