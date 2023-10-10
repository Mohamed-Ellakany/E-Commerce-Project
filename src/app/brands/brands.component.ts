import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule ,CardComponent],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{

@Output() brands:any[]=[]

constructor(private _BrandsService:BrandsService){}

ngOnInit(): void {
  this.getBrands()
}

getBrands(){
 return this._BrandsService.getBrands().subscribe({
    next:(res)=>{

this.brands=res.data;
    }
  })
}


}
