import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollEntryPageComponent } from './poll-entry-page.component';

describe('PollEntryPageComponent', () => {
  let component: PollEntryPageComponent;
  let fixture: ComponentFixture<PollEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollEntryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
