import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { FantacalcioComponent } from './fantacalcio/fantacalcio.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'home' , component: MainComponent},
  {path: 'fantacalcio', component: FantacalcioComponent},
  {path: 'binding', component: BindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
