import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FantacalcioComponent } from './fantacalcio/fantacalcio.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'home' , component: MainComponent},
  {path: 'fantacalcio', component: FantacalcioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
