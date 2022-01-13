import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/Products';
import { ProductsService } from 'src/app/service/products.service';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  product:Product | undefined

  constructor(
    private activatedRoute:ActivatedRoute,
    private productSv:ProductsService
  ) { 
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.params
    if(id){
      this.productSv.getProductID(id).subscribe((response:Product)=>{
        this.product = response
      })
    }
    

  }

  ngOnInit(): void {
  }

}
