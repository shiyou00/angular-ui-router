import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UIRouterModule} from "@uirouter/angular";
import { allStates } from "./router";
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: allStates, useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
