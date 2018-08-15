import { Component, OnInit } from '@angular/core';
import { libDemoStyles, libDemoTemplate } from './lib-demo.template';

// you can also provide inline templates then no need to export HTML and CSS from ts file.
@Component({
  selector: 'app-lib-demo',
  template: libDemoTemplate,
  styles: [libDemoStyles]
})
export class LibDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
