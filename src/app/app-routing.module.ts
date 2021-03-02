import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FantacalcioComponent } from './components/fantacalcio/fantacalcio.component';
import { ExamplesViewComponent } from './components/examples-view/examples-view.component';
import { ItemInputComponent } from './components/main/item-input/item-input.component';
import { MainComponent } from './components/main/main.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirettiveComponent } from './components/direttive/direttive.component';
import { BindingTestComponent } from './components/binding-test/binding-test.component';
import { ItemDetailComponent } from './components/main/item-detail/item-detail.component';

const routes: Routes = [
  {path: '' , component: MainComponent},
  {path: 'product' , component: MainComponent},
  {path: 'insert' , component: ItemInputComponent},
  {path: '', pathMatch: 'full', redirectTo: 'product' },
  {
    path: 'examples' , component: ExamplesViewComponent,
    children: [
      { path: 'fantacalcio', component: FantacalcioComponent },
      { path: 'binding', component: BindingTestComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'direttive', component: DirettiveComponent },
      { path: '', pathMatch: 'full', redirectTo: 'fantacalcio' }
    ]
  },
  {path: 'pizza', loadChildren: () => import('./pizza/pizza.module').then(m => m.PizzaModule)},
  {path: 'detail/:id' , component: ItemDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
