import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibDemoComponent } from './lib-demo/lib-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    LibDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [ LibDemoComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
