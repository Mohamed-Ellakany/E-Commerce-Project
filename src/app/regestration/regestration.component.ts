import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormGroup ,FormControl ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css'],

})
export class RegestrationComponent {


constructor(private _authService:AuthService , private _Router:Router){


}
repasswordMatch(form:any)
{
let password = form.get('password')
let rePassword = form.get('rePassword')
if(password.value == rePassword.value){
  return null;
}else{

  rePassword.setErrors({repasswordMatch:'repassword not matched'})
  return {repasswordMatch:'repassword not matched'};
}


}


regesterForm:FormGroup= new FormGroup({

  name:new FormControl(null , [Validators.required,Validators.minLength(2)] ),
  email:new FormControl(null  , [Validators.required , Validators.email]),
  password:new FormControl(null , [Validators.required  ,Validators.minLength(6)]),
  rePassword:new FormControl(null , [Validators.required,Validators.minLength(6)]),
phone :new FormControl(null , [Validators.required , Validators.minLength(10) , Validators.pattern(/^01[0125][0-9]{8}$/)])
},{validators:this.repasswordMatch})


alertRegister(regesterForm:FormGroup){


  if(regesterForm.valid){

this._authService.register(regesterForm.value).subscribe({
  next:(res)=>{
if(res.message=="success"){
alert('success')
}


  },
    error:()=>{
alert('this email is already exist')
    },
complete:()=>{

}
})
  }
}

signInForm:FormGroup = new FormGroup({
  email:new FormControl(null  , [Validators.required , Validators.email]),
  password:new FormControl(null , [Validators.required ,Validators.minLength(6) ]),
})


signInSubmit(signInForm:FormGroup){

if(signInForm.valid){

this._authService.signIn(signInForm.value).subscribe({
  next:(response:any)=>{
// this.isLogin=true
  if(response.message =='success'){
this._Router.navigate(['home'])

localStorage.setItem('userToken',response.token)

this._authService.getUserData()
}


  }, error:()=>{
    alert('this email not true')
        },


})}

}}

