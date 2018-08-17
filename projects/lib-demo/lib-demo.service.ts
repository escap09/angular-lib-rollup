import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LibDemoService {

    constructor() { }

    getDemoData(): Observable<string> {
        return Observable.create(function(observer) {
          observer.next('This is Demo service from lib');
        });
      }

}
