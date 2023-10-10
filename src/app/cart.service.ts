import { HttpClient } from '@angular/common/http';
import { Injectable, Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {



headers:any ={token: localStorage.getItem('userToken')}
  constructor( private _HttpClient:HttpClient) { }

postInCart(productId:string):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId:productId},{headers:this.headers })
}

getCart():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:this.headers })
}
deleteCartItem(productId:string ):Observable<any> {
  return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers:this.headers })
}
updateItemCount(productId:string ,count:string|number):Observable<any> {


if(count==0 ){
 return this.deleteCartItem(productId)
}else{
       return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
  {
count:count
  },{headers:this.headers })
  }

}



clearCart():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:this.headers })

}




onlinePayment(shippingAddress:any , cartId : string):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200` ,{shippingAddress:shippingAddress} ,{headers:this.headers} )


}




}



