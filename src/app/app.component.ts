import { Component, OnInit } from '@angular/core';
import { LibDemoService } from 'lib-demo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bundle Library with Rollup';
  serviceData = '';

  constructor(private demoService: LibDemoService) {
  }

  ngOnInit() {
    this.demoService.getDemoData().subscribe(data => {
      this.serviceData = data;
    });

  }
}
