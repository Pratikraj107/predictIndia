import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollTableComponent } from './poll-table.component';

describe('PollTableComponent', () => {
  let component: PollTableComponent;
  let fixture: ComponentFixture<PollTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
