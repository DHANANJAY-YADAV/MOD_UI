import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorRegComponent } from './mentor-reg.component';

describe('MentorRegComponent', () => {
  let component: MentorRegComponent;
  let fixture: ComponentFixture<MentorRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
