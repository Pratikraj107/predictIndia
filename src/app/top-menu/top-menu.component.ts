import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {

  token:any;
  constructor(){}

  isMenuOpen = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

    

  ngOnInit(){
   this.token = sessionStorage.getItem("token");
  }
  logout(){
    this.token = null;
    sessionStorage.clear();
  }
}
