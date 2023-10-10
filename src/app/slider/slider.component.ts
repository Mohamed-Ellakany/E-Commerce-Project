import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../product';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

constructor ( private _ProductsService:ProductsService){

}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText:[' ',' '],
    responsive: {
      0: {
        items: 1
      }

    },
    nav: false
  }



}
