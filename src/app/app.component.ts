import { Component } from '@angular/core';
import {takeUntil} from "rxjs/operator/takeUntil";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  target = '';

  subformDisplay = 'active';

  constructor(){ }

  ngOnInit(){
  }

  clickSometing(target){
    this.target = target;
  }

  changeSubForm(value){
    this.subformDisplay = value;
  }
}
