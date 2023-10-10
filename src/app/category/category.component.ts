import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule , CardComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

@Output() categories:any[]=[]

constructor(private _CategoryService:CategoryService)
{}

ngOnInit(): void {
  this.getCategories()
}
getCategories(){
  return this._CategoryService.getCategory().subscribe({
    next:(res)=>{
      console.log(res);
this.categories=res.data
    }
  });
}


}
