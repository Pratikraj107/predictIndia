import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote-login-dialog',
  templateUrl: './vote-login-dialog.component.html',
  styleUrls: ['./vote-login-dialog.component.css']
})
export class VoteLoginDialogComponent {
  constructor(private router: Router){}

  login(){
    this.router.navigate(['login']);
  }
 
}
