import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonserviceComponent } from './commonservice.component';

describe('CommonserviceComponent', () => {
  let component: CommonserviceComponent;
  let fixture: ComponentFixture<CommonserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
