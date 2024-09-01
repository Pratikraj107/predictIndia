import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activeTab = 'politics';
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(){
    sessionStorage.setItem("tabdetails", this.activeTab);
    this.metaService.addTags([
      { name: 'description', content: 'PredictsIndia.' },
      { name: 'keywords', content: 'Indian election predictions' },
      { name: 'keywords', content: 'Political survey India' },
      { name: 'keywords', content: 'Indian politics predictions' },
      { property: 'og:title', content: 'PredictsIndia' },
      { property: 'og:description', content: 'This is an example page description for SEO.' },
    ]);
  }
  selectTab(tab: string) {
    sessionStorage.setItem("tabdetails", tab);
    this.activeTab = tab;
  }

}
