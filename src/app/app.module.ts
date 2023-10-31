import {Directive, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugComponent } from './bug/bug.component';


@Directive({
  selector: "webview",
})
export class WebviewDirective {}


@NgModule({
  declarations: [
    AppComponent,
    BugComponent,
    WebviewDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
