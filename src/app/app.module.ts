import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHttpInterceptor } from './@core/interceptor/app-http-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BindingTestComponent } from './components/binding-test/binding-test.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { DirettiveComponent } from './components/direttive/direttive.component';
import { ExamplesViewComponent } from './components/examples-view/examples-view.component';
import { FantacalcioComponent } from './components/fantacalcio/fantacalcio.component';
import { FantacalcioService } from './service/fantacalcio.service';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ItemInputComponent } from './components/main/item-input/item-input.component';
import { ListComponent } from './components/main/list/list.component';
import { ListItemComponent } from './components/main/list/list-item/list-item.component';
import { MainComponent } from './components/main/main.component';
import { PlayerComponent } from './components/fantacalcio/player/player.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { SearchItemComponent } from './components/main/search-item/search-item.component';
import { ItemDetailComponent } from './components/main/item-detail/item-detail.component';
import { SayHelloPipe } from './pipes/say-hello.pipe';
import { ReactiveFormsViewComponent } from './components/reactive-forms-view/reactive-forms-view.component';
import { ShowJsonPipe } from './pipes/show-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindingTestComponent,
    CounterComponent,
    DirettiveComponent,
    HeaderComponent,
    MainComponent,
    ItemInputComponent,
    ListComponent,
    ListItemComponent,
    SearchItemComponent,
    FantacalcioComponent,
    PlayerComponent,
    FooterComponent,
    SearchItemComponent,
    ProductFilterPipe,
    FantacalcioComponent,
    PlayerComponent,
    ExamplesViewComponent,
    ItemDetailComponent,
    SayHelloPipe,
    ReactiveFormsViewComponent,
    ShowJsonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    FantacalcioService,
    ProductFilterPipe,
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
