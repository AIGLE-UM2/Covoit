import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTrajetComponent } from './delete-trajet.component';

describe('DeleteTrajetComponent', () => {
  let component: DeleteTrajetComponent;
  let fixture: ComponentFixture<DeleteTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
