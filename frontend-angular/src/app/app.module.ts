import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThfModule } from '@totvs/thf-ui';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ThfModule,
    RouterModule.forRoot([]),
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnxIUEmOAwodzjRwJtyncOeopUSfG9MyA'
    })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
