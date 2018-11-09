import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentShareComponent } from './parent-share.component';

describe('ParentShareComponent', () => {
  let component: ParentShareComponent;
  let fixture: ComponentFixture<ParentShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
