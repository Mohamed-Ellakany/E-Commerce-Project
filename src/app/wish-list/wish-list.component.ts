import { Component, OnInit } from '@angular/core';
import { WishListService } from '../wish-list.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
wishlist:any;

  constructor(private _WishListService:WishListService, private _CartService:CartService){}
ngOnInit(): void {
this.getWishlist()
}
 postInCart(productId:string){
  this._CartService.postInCart(productId).subscribe({
    next:(res)=>{
console.log(res);

    }
  })
 }


getWishlist(){
   this._WishListService.getWishlist().subscribe({
    next:(res)=>{
      this.wishlist=res.data

    }
  })
}

deleteItemFromWishlist(productId:string){
  this._WishListService.removeFromWishlist(productId).subscribe({
    next:(res)=>{
      this.getWishlist()
    },
    error:(err)=>{

    }
  })



}
}
