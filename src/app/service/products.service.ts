import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ResponseProducts } from '../interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
//Si no pongo any me da error de que undefined no se puede asignar al type responseProduct
  getProducts():Observable<ResponseProducts>|any{
    return this.http.get<ResponseProducts>("https://api.mercadolibre.com/sites/MLA/search?q=pc&limit=5")
  }

  getProductID(id:string):Observable<Product>|any{
    return this.http.get<Product>("https://api.mercadolibre.com/items/"+id)
  }

}
