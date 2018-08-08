import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDemoComponent } from './lib-demo.component';

describe('LibDemoComponent', () => {
  let component: LibDemoComponent;
  let fixture: ComponentFixture<LibDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
