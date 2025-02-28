import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public storageKey='estudiantes';
  constructor() { }
  obtenerEstudiantes(): any[] {
    const data=localStorage.getItem(this.storageKey);
    if (data!==null) {
      console.log("si existe el arreglo en local storage");
      return JSON.parse(data); //esto debe de retornar un array de Estudiante
    }else{
    return []; //Devuelve array vacio la primera vez o cuando se ha procesido a borrar el item
    }
  }

  guardarEstudiantes(estudiante:any[]){ //recibe el array de estudiantes y lo guarda en el LocalStorage
    //RECORDAR que es Clave:Valor ---> 'clave' : array[]
    if (estudiante.length===0) {
      console.log("se procedio a borrar el item del local Storage");
      this.eliminarClaveValor(); //vacio el local Storage
    }
    else if(estudiante.length>=1){
    localStorage.setItem(this.storageKey,JSON.stringify(estudiante));
    } //lo setea al localStorage
  }

  agregarEstudiante(estudiante:any){ //recibe un solo estudiante
    const estudiantes=this.obtenerEstudiantes();
    estudiantes.push(estudiante);
    this.guardarEstudiantes(estudiantes); //setea el array con los cambios realizados 
  }

  eliminarEstudiante(index:number){
    const estudiantes=this.obtenerEstudiantes();
    estudiantes.splice(index,1);
    this.guardarEstudiantes(estudiantes); //vuelve a setear el array con los cambios realizados
  }

  actualizarEstudiante(index: number, estudianteActualizado:any){
    const estudiantes=this.obtenerEstudiantes();
    estudiantes[index]=estudianteActualizado; //reemplaza al estudiante en la lista
    this.guardarEstudiantes(estudiantes); //vuelve a setear el array con los cambios realizados
  }

  eliminarClaveValor(){
    localStorage.removeItem('estudiantes');
  }
}
