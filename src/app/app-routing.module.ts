import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FantacalcioComponent } from './components/fantacalcio/fantacalcio.component';
import { ExamplesViewComponent } from './components/examples-view/examples-view.component';
import { InsertViewComponent } from './components/insert-view/insert-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirettiveComponent } from './components/direttive/direttive.component';
import { BindingTestComponent } from './components/binding-test/binding-test.component';
import { ItemDetailViewComponent } from './components/item-detail-view/item-detail-view.component';
import { ReactiveFormsViewComponent } from './components/reactive-forms-view/reactive-forms-view.component';

const routes: Routes = [
  { path: 'product' , component: MainViewComponent },
  { path: 'insert' , component: InsertViewComponent },
  { path: 'detail/:id' , component: ItemDetailViewComponent },
  { path: 'pizza', loadChildren: () => import('./pizza/pizza.module').then(m => m.PizzaModule) },
  {
    path: 'examples' , component: ExamplesViewComponent,
    children: [
      { path: 'binding', component: BindingTestComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'direttive', component: DirettiveComponent },
      { path: 'fantacalcio', component: FantacalcioComponent },
      { path: 'reactive-form', component: ReactiveFormsViewComponent },
      { path: '', pathMatch: 'full', redirectTo: 'fantacalcio' }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'product' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
