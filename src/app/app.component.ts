import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tieCount: number = 50;
  tieArr: number[] = [];
  
  constructor(){
  	for (let i=0; i<this.tieCount; i++){
  		this.tieArr.push(i);
  	}
  }
  
}
