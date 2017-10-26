import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathSquareComponent } from './death-square/death-square.component';
import { LaserCannoonComponent } from './laser-cannoon/laser-cannoon.component';
import { TurretComponent } from './turret/turret.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	DeathSquareComponent,
  	LaserCannoonComponent,
  	TurretComponent
  ],
  exports: [
  	DeathSquareComponent,
  	LaserCannoonComponent,
  	TurretComponent
  ]
})
export class InternalDefensesModule { }
