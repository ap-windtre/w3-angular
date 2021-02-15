import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemInputComponent } from './main/item-input/item-input.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'home' , component: MainComponent},
  {path: 'insert' , component: ItemInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
