import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteLoginDialogComponent } from './vote-login-dialog.component';

describe('VoteLoginDialogComponent', () => {
  let component: VoteLoginDialogComponent;
  let fixture: ComponentFixture<VoteLoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteLoginDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
