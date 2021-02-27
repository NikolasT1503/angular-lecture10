import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { Mod2Component } from '../mod2/mod2.component';
import { Mod11Component } from './mod11.component';
import { Mod1RoutingModule } from './mod1-routing.module';



@NgModule({
  declarations: [Mod1Component, Mod2Component, Mod11Component],
  imports: [
    CommonModule,
    Mod1RoutingModule
  ],
  exports: [Mod1Component, Mod2Component, Mod11Component]
})
export class Mod1Module { }
