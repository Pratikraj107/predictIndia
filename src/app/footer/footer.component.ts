import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  menuItems = [
    { label: 'Products', url: '#' },
    { label: 'Resources', url: '#' },
    { label: 'Blogs', url: '#' },
    { label: 'Support', url: '#' }
    // ... add other menu items here
  ];

}
