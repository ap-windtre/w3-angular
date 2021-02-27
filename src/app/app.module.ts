import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './main/main.component';
import { ItemInputComponent } from './main/item-input/item-input.component';
import { ListComponent } from './main/list/list.component';
import { ListItemComponent } from './main/list/list-item/list-item.component';
import { SearchItemComponent } from './main/search-item/search-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FantacalcioComponent } from './components/fantacalcio/fantacalcio.component';
import { PlayerComponent } from './components/fantacalcio/player/player.component';
import { FantacalcioService } from './service/fantacalcio.service';
import { BindingTestComponent } from './components/binding-test/binding-test.component';
import { CounterComponent } from './components/counter/counter.component';
import { DirettiveComponent } from './components/direttive/direttive.component';
import { TestItemComponent } from './components/test-item/test-item.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingTestComponent,
    CounterComponent,
    DirettiveComponent,
    TestItemComponent,
    HeaderComponent,
    MainComponent,
    ItemInputComponent,
    ListComponent,
    ListItemComponent,
    SearchItemComponent,
    FantacalcioComponent,
    PlayerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    FantacalcioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
