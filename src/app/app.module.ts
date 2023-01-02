
// File: app.component.html
// Author: Tóth Júlia
// Copyright: 2023,Tóth Júlia
// Group: Szoft 2 N
// Date: 2023-01-02
// Github: https://github.com/haribomaci/
// Licenc: GNU GPL


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasComponent } from './datas/datas.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
