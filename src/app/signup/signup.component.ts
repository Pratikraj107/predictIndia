import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth ,signInWithPopup } from '@angular/fire/auth';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { GoogleAuthProvider } from "firebase/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  app = initializeApp(environment.firebase);
  signupForm!: FormGroup;
  provider = new GoogleAuthProvider();
  // auth = getAuth(this.app);

  constructor(private fb: FormBuilder,private auth: Auth ,private router:Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onGoogleSignup(){
    signInWithPopup(this.auth, this.provider)
    .then((result)=>{
      let credential = GoogleAuthProvider.credentialFromResult(result);
      let token = credential?.accessToken;
      // The signed-in user info.
      const user:any = result.user;
      sessionStorage.setItem("token",user.accessToken);
      sessionStorage.setItem("userid",user.uid);
      this.router.navigate(['']);
      console.log("user",result);
    })
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log("Form Value", this.signupForm.value);
      // You can process the form data here (e.g., send it to a server)
      createUserWithEmailAndPassword(this.auth, this.signupForm.value.email, this.signupForm.value.password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }

}
