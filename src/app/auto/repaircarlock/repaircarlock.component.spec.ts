import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaircarlockComponent } from './repaircarlock.component';

describe('RepaircarlockComponent', () => {
  let component: RepaircarlockComponent;
  let fixture: ComponentFixture<RepaircarlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepaircarlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepaircarlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
