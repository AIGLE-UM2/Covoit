import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTrajetsComponent } from './m-trajets.component';

describe('MTrajetsComponent', () => {
  let component: MTrajetsComponent;
  let fixture: ComponentFixture<MTrajetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTrajetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTrajetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
