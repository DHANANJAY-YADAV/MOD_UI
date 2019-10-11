import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlockMentorComponent } from './admin-block-mentor.component';

describe('AdminBlockMentorComponent', () => {
  let component: AdminBlockMentorComponent;
  let fixture: ComponentFixture<AdminBlockMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBlockMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlockMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
