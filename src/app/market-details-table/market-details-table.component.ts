import { Component } from '@angular/core';

@Component({
  selector: 'app-market-details-table',
  templateUrl: './market-details-table.component.html',
  styleUrls: ['./market-details-table.component.css']
})
export class MarketDetailsTableComponent {
  tabs = [
    { label: 'Tab 1', items: [{ title: 'Item 1.1', text: 'Content 1.1' }] },
    { label: 'Tab 2', items: [{ title: 'Item 2.1', text: 'Content 2.1' }] },
    { label: 'Tab 3', items: [{ title: 'Item 3.1', text: 'Content 3.1' }] }
  ];
  activeTab = 0;
  currentPage = [1, 1, 1];

  selectTab(index: number) {
    this.activeTab = index;
  }

  onPageChange(page: number, index: number) {
    this.currentPage[index] = page;
  }
}
