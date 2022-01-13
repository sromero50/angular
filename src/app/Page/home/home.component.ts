import { Component, OnInit } from '@angular/core';
import { Product, ResponseProducts } from 'src/app/interfaces/Products';
import { ProductsService } from '../../service/products.service';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product[]=[]
  constructor( private productsv:ProductsService) {
    this.getProducts()
    }
   
  async getProducts(){
    try{
      const data:ResponseProducts = await lastValueFrom(this.productsv.getProducts())
      if(data.results){
        this.products = data.results
      }
    }catch(error){
      console.log(error)
    }
  }

  ngOnInit(): void {
  }

}
