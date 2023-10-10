import { Product } from './../product';
import { Component, OnInit, NgModule, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],

})
export class CartComponent implements OnInit {

cartDetails:any=null;



  constructor(private _CartService:CartService , private _Router:Router){}


 ngOnInit(): void {
  this._CartService.getCart().subscribe({
    next:(res)=>{

      console.log(res);



      this.cartDetails = res
  },
error:()=>{
this._Router.navigate(['/home'])
alert('cart is empty')
}

  })
 }



deleteCartItem(productId:string){
  this._CartService.deleteCartItem(productId).subscribe({
    next:(res)=>{
      this.cartDetails =res
console.log(res);

    }
  })

}
updateItemCount(productId:string , count:string|number){
  this._CartService.updateItemCount(productId,count).subscribe({
    next:(res)=>{
      this.cartDetails =res
console.log(res);

    }
  })

}

clearCart(){
  this._CartService.clearCart().subscribe({
    next:(res)=>{
      this.cartDetails =res
this._Router.navigate(['/home'])

    },
    error:(err)=>{
console.log(err);

    }
  })
}


 }
