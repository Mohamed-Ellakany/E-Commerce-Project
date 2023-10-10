import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

constructor(private _ProductsService:ProductsService , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){

}
productId:any;
productData:any;
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
this.productId =params.get('id')  })

  this._ProductsService.getProductDetails(this.productId).subscribe({
    next:(res)=>{
this.productData = res.data
console.log(this.productData);

    }
  })
}


postInCart(productId:string ){
this._CartService.postInCart(productId).subscribe({
  next:(response)=>{
console.log(response);

  }
})
}




}
