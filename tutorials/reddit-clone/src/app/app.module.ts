import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent,SidebarComponent, ArticleComponent } from './app.component'; // import this here 

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent, //list this as a declaration
    ArticleComponent   //list this as a declaration
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
