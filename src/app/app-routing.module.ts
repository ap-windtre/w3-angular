import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FantacalcioComponent } from './components/fantacalcio/fantacalcio.component';
import { ExamplesViewComponent } from './components/examples-view/examples-view.component';
import { ItemInputComponent } from './main/item-input/item-input.component';
import { MainComponent } from './main/main.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirettiveComponent } from './components/direttive/direttive.component';
import { BindingTestComponent } from './components/binding-test/binding-test.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'home' , component: MainComponent},
  {path: 'insert' , component: ItemInputComponent},
  {path: 'examples' , component: ExamplesViewComponent},
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
