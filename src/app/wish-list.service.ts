import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  headers:any ={token: localStorage.getItem('userToken')}
  constructor(private _HttpClient:HttpClient) { }

postToWishlist(productId:string):Observable<any>{
 return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,
   {
    productId: productId
},
 {
  headers:this.headers
})
}

getWishlist():Observable<any>{
 return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,

 {
  headers:this.headers
})
}

removeFromWishlist(productId:string):Observable<any>{
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
  {
   headers:this.headers
 })
}



}
