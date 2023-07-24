import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusWebComponent } from './status-web.component';

describe('StatusWebComponent', () => {
  let component: StatusWebComponent;
  let fixture: ComponentFixture<StatusWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StatusWebComponent]
    });
    fixture = TestBed.createComponent(StatusWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
