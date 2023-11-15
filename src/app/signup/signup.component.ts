import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  app = initializeApp(environment.firebase);
  signupForm!: FormGroup;
  // auth = getAuth(this.app);

  constructor(private fb: FormBuilder,private auth: Auth ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
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
