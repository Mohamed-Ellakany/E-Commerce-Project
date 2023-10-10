import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData= new BehaviorSubject(null)

  constructor( private _httpClient : HttpClient , private _router : Router) {
if(localStorage.getItem('userToken') !== null){
  this.getUserData()
}
   }

getUserData(){
let encodedToken = JSON.stringify(localStorage.getItem('userToken'))
let decodedToken:any = jwtDecode(encodedToken);

this.userData.next(decodedToken);


}


   register(userData:any) :Observable<any>{
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData);
   }
signIn(userData:any){

  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userData);
}


logout(){
  localStorage.removeItem("userToken");
  this.userData.next(null)
  this._router.navigate(['/regestration']);
}

forgotPassword(formData:string):Observable<any>
{
  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,formData)
}

verifyCode(formData:string):Observable<any>
{


  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,formData)
}

resetPassword(formData:string):Observable<any>
{
  return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,formData)
}



  }



