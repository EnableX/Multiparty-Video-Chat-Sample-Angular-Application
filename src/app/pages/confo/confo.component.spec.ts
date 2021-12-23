import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfoComponent } from './confo.component';

describe('ConfoComponent', () => {
  let component: ConfoComponent;
  let fixture: ComponentFixture<ConfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
