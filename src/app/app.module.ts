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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ItemInputComponent,
    ListComponent,
    ListItemComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
