import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ItemInputComponent } from './main/item-input/item-input.component';
import { ListComponent } from './main/list/list.component';
import { ListItemComponent } from './main/list/list-item/list-item.component';
import { SearchItemComponent } from './main/search-item/search-item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FantacalcioComponent } from './fantacalcio/fantacalcio.component';
import { PlayerComponent } from './player/player.component';
import { FantacalcioService } from './service/fantacalcio.service';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ItemInputComponent,
    ListComponent,
    ListItemComponent,
    SearchItemComponent,
    FantacalcioComponent,
    PlayerComponent,
    BindingComponent,
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
