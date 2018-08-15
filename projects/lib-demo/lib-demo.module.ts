import { NgModule } from '@angular/core';
import { LibDemoComponent } from './lib-demo.component';

@NgModule({
  declarations: [
    LibDemoComponent
  ],
  exports: [ LibDemoComponent ]
})
export class LibDemoModule { }
