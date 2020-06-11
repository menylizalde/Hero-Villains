import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { appRouting } from '../../app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    appRouting,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
