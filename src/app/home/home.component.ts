import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeTab = 'politics';
  ngOnInit(){
    sessionStorage.setItem("tabdetails", this.activeTab);
  }
  selectTab(tab: string) {
    sessionStorage.setItem("tabdetails", tab);
    this.activeTab = tab;
  }

}
