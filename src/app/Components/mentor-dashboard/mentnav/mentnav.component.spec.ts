import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentnavComponent } from './mentnav.component';

describe('MentnavComponent', () => {
  let component: MentnavComponent;
  let fixture: ComponentFixture<MentnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
