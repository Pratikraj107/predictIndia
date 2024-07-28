import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  // auth = getAuth(this.app);

  constructor(private fb: FormBuilder,private auth: Auth,private router:Router ) { }

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    if (this.loginForm.valid) {
      console.log("Form Value", this.loginForm.value);
      // You can process the form data here (e.g., send it to a server)
      signInWithEmailAndPassword(this.auth, this.loginForm.value.email, this.loginForm.value.password)
        .then((token: any) => {
          // Signed up 
         
          console.log(token);
          console.log(token.user.accessToken);
         sessionStorage.setItem("token",token.user.accessToken);
         sessionStorage.setItem("userid",token._tokenResponse.localId);
          this.router.navigate(['']);
          // ...
        })
        .catch((error: { code: any; message: any; }) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
}
