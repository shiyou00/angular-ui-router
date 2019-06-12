import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UIRouterModule} from "@uirouter/angular";
import { allStates } from "./router";
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { FooListComponent } from './foo-list/foo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    FolderListComponent,
    MessageListComponent,
    FooListComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: allStates, useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
