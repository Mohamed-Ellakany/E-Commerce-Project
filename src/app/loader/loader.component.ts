import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading: Subject<boolean> = this._LoaderService.isLoading;

  constructor(private _LoaderService:LoaderService){

  }
}
