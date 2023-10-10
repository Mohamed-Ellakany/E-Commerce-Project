import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [CommonModule ,RouterModule ,ReactiveFormsModule],
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent {


  constructor(private _AuthService:AuthService , private _Router:Router)
  {}
    verifyForm:FormGroup=new FormGroup({
      resetCode:new FormControl(null , [Validators.required ,Validators.pattern(/^-?(0|[1-9]\d*)?$/)])

      })

      verify(form:FormGroup){

  this._AuthService.verifyCode(form.value).subscribe({
    next:(res)=>{
      console.log(res)
      if(res.status == "Success"){
        this._Router.navigate(['/resetPass'])
      }




  },
    error:(err)=>{ alert('this code not true try again')}


  })


}

}
