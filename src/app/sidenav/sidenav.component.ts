import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  isMenuOpen = false;
  token: string | null = null; // Replace this with your actual token logic

  ngOnInit(){
    this.token = sessionStorage.getItem("token");
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    // Implement your logout logic here
    sessionStorage.clear();
    this.ngOnInit();
  }
}
