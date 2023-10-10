import { WishListService } from './../wish-list.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { CategoryService } from '../category.service';
import { BrandsService } from '../brands.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products:Product[] =[]
category:any[]=[]
brands:any[]=[]
constructor(private _ProductsService:ProductsService , private _CategoryService:CategoryService ,private _BrandsService:BrandsService , private _CartService:CartService ,private _WishListService:WishListService){}

ngOnInit(){
this._ProductsService.getProducts().subscribe({
  next:(res)=>{
    this.products = res.data

  }
})


this._CategoryService.getCategory().subscribe({
  next:(res)=>{
this.category=res.data

  }
})


this._BrandsService.getBrands().subscribe({
  next:(res)=>{
    this.brands=res.data
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

  postToWishlist(productId:string){
    this._WishListService.postToWishlist(productId).subscribe({
      next : (response) =>console.log(response)

    })
  }


}
