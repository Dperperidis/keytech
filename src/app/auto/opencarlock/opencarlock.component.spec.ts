import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencarlockComponent } from './opencarlock.component';

describe('OpencarlockComponent', () => {
  let component: OpencarlockComponent;
  let fixture: ComponentFixture<OpencarlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencarlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpencarlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
