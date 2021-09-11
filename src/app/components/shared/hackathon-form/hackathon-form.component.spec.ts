import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonFormComponent } from './hackathon-form.component';

describe('HackathonFormComponent', () => {
  let component: HackathonFormComponent;
  let fixture: ComponentFixture<HackathonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackathonFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
