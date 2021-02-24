import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FantacalcioComponent } from './components/fantacalcio/fantacalcio.component';
import { MainComponent } from './main/main.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirettiveComponent } from './components/direttive/direttive.component';
import { BindingTestComponent } from './components/binding-test/binding-test.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'home' , component: MainComponent},
  {path: 'fantacalcio', component: FantacalcioComponent},
  {path: 'binding', component: BindingTestComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'direttive', component: DirettiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
