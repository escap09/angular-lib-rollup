import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Here its picking library from node-modules
import { LibDemoModule, LibDemoService } from 'lib-demo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, LibDemoModule
  ],
  providers: [LibDemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
