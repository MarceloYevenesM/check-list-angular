import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './check-list/components/pages/home-page/home-page.component';
import { CheckListModule } from './check-list/check-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
