import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Comp11Component } from './comp11/comp11.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{ path: 'comp11', component: Comp11Component }]),
  ],
  exports: [RouterModule],
})
export class Mod1RoutingModule {}
