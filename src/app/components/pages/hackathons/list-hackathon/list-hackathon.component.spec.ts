import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHackathonComponent } from './list-hackathon.component';

describe('ListHackathonComponent', () => {
  let component: ListHackathonComponent;
  let fixture: ComponentFixture<ListHackathonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHackathonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
