import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-tuto',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './tuto.component.html',
  styleUrl: './tuto.component.css'
})
export class TutoComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  formulario:FormGroup;
  selectedFile: File | null=null;
  previweUrl: string | null=null;

  constructor(private fb: FormBuilder, public productoService:ProductsService) {
    this.formulario=this.fb.group({
      nombre: ['',Validators.required],
      precio: [''] //importante revisar porque no se puede poner validadores
    }); //pues provoca error al enviar la peticion Post
  }

  //capturar el archivo seleccionado
  onFileSelected(event: Event): void{
    const input=event.target as HTMLInputElement;
    if (input.files && input.files.length>0) {
      this.selectedFile=input.files[0];

      //generar la vista previa
      const reader=new FileReader();
      reader.onload=()=>{
        this.previweUrl=reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile)
    }
  }

  //Enviar el formulario con FormData
  onSubmit():void{
    if (!this.selectedFile) {
      alert('Por favor selecciona una imagen');
      return;
    }
    //crear FormData y setear los datos del formulario
    const formData=new FormData();
    formData.append('nombre',this.formulario.get('nombre')?.value);
    formData.append('precio',this.formulario.get('precio')?.value);
    formData.append('imagen',this.selectedFile);
    //Enviar la peticion al back end
    
    this.productoService.guardarProducto(formData).subscribe({
      next: (data)=>{
        console.log("Respuesta del back end:", data);
        this.formulario.reset();
        this.selectedFile=null; //aqui solo limpia las variables pero no resetea
        this.previweUrl=null; //el Elemento HTML
        if (this.fileInput) {
          this.fileInput.nativeElement.value=null; //reset
        }
      },
      error: (e)=>{
        console.log("Error es:",e);
      }
    });

  }

}
