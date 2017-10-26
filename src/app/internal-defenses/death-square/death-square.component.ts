import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death-square',
  templateUrl: './death-square.component.html',
  styleUrls: ['./death-square.component.css']
})

export class DeathSquareComponent implements OnInit {

  arr: number[] = [];

  turretCount:number = 100;

  constructor() { }

  ngOnInit() {
  	/* Create array to be used by ngFor to place turrets */
  	for (let i=0; i <this.turretCount; i++){
  		this.arr.push(i);
  	}
  }

}
