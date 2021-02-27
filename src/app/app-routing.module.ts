import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp404Component } from './comp404/comp404.component';
import { Mod1Component } from './mod1/mod1.component';
import { Mod11Component } from './mod1/mod11.component';
import { Mod2Component } from './mod2/mod2.component';
import { Mod3Component } from './mod3/mod3.component';

const routes: Routes = [
  {
    path: '',
    component: Mod1Component,
    loadChildren: './mod1/mod1.module#Mod1Module',
    pathMatch: 'full'
      
      /*  () => 
          import('./mod1/mod1.module').then((file) => file.Mod1Module),   -- альтернативная запись - более предпочтительна*/
  },
  {
    path: 'mod1',
    component: Mod1Component,
    loadChildren: () =>
      import('./mod1/mod1.module').then((file) => file.Mod1Module),
  },
  {
    path: 'mod2',
    component: Mod2Component,
    loadChildren: () =>
      import('./mod2/mod2.module').then((file) => file.Mod2Module),
  },
  {
    path: 'mod3',
    component: Mod3Component,
    loadChildren: () =>
      import('./mod3/mod3.module').then((file) => file.Mod3Module),
  },
  {
    path: 'mod1/mod11',
    component: Mod11Component,
    loadChildren: () =>
      import('./mod1/mod1.module').then((file) => file.Mod1Module),
  },
  {
    path: '404',
    component: Comp404Component
  },
  {
    path: '**',           //** должны находиться в конце, иначе ни один путь выше не сработает
    redirectTo: '404',
    pathMatch: 'full'       
  }
];

/* loadChildren: () =>
      import('./mod1/mod1.module').then((file) => file.Mod1Module), 
  loadChildren - ленивая загрузка модулей, позволяет сэкономить время загрузки приложения на старте    
      
      */

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
