import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

 cardId:string=""


  shippingAddress:FormGroup=new FormGroup({

    details:new FormControl( null , [Validators.required ]),
phone:new FormControl( null , [Validators.required ,Validators.pattern(/^01[0125][0-9]{8}$/)]),
city:new FormControl( null , [Validators.required ])


})

constructor( private _CartService:CartService ){

}
ngOnInit(): void {
  this.getCartId()
}
getCartId(){
  this._CartService.getCart().subscribe({
next:(res)=>{
this.cardId = res.data._id
}
  })
}


moveToPayment(url:string){
 window.location.href=url
}

handleSubmit(shippingAddress:FormGroup){

console.log(shippingAddress);
this.getCartId()
this._CartService.onlinePayment(shippingAddress.value ,this.cardId).subscribe({
  next:(res:any)=>{

    this.moveToPayment(res.session.url)
console.log(res.session.url);
  },

  error:(err)=>{
    console.log(err);

  }
})

}



}
