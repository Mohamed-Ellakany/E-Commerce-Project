import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [CommonModule, RouterLink , ReactiveFormsModule],
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
constructor(private _AuthService:AuthService , private _Router:Router)
{}
  forgotForm:FormGroup=new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.email])

    })

    forgotPassword(form:FormGroup){
      console.log(form.value);

this._AuthService.forgotPassword(form.value).subscribe({
  next:(res)=>{
    console.log(res)
    this._Router.navigate(['/verifyCode'])

},
  error:(err)=>{console.log(err)}


})
    }

}
