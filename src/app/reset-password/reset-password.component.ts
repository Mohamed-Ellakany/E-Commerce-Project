import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule ,RouterModule ,ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private _AuthService:AuthService , private _Router:Router)
  {}
    newPassForm:FormGroup=new FormGroup({
      email:new FormControl(null , [Validators.required ,Validators.email]),
      newPassword:new FormControl(null , [Validators.required ,Validators.minLength(6)])

      })

setNewPass(form:FormGroup){
this._AuthService.resetPassword(form.value).subscribe({
  next:(res)=>{
    this._Router.navigate(['regestration'])
    alert('success')
  },
error:(err)=>{
console.log(err);

}
})

}

}
