import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketDetailsTableComponent } from './market-details-table.component';

describe('MarketDetailsTableComponent', () => {
  let component: MarketDetailsTableComponent;
  let fixture: ComponentFixture<MarketDetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketDetailsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
