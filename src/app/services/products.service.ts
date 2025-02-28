import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'http://localhost:8080/api/';
  constructor(public http:HttpClient) { }

  obtenerProductos():Observable<Producto[]>{
    return this.http.get<any[]>(this.apiUrl+"productos");
  }

  //acomodar el post
  guardarProducto(producto:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+"guardar",producto);
  }
  
}
