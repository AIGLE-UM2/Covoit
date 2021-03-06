import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  processing = false;


  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    // private router: Router
  ) {
    this.createForm(); 
   }

  // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
        username:['', Validators.compose([
          Validators.required, // Field is required
          Validators.minLength(5), // Minimum length is 5 characters
          Validators.maxLength(30), // Maximum length is 30 characters
          this.validateUsername // Custom validation
        ])],
        email:  ['', Validators.compose([
          Validators.required, // Field is required
          Validators.minLength(5), // Minimum length is 5 characters
          Validators.maxLength(30), // Maximum length is 30 characters
          this.validateEmail // Custom validation
        ])],
        password:['', Validators.compose([
          Validators.required, // Field is required
          Validators.minLength(5), // Minimum length is 5 characters
          Validators.maxLength(30), // Maximum length is 30 characters
          this.validatePassword // Custom validation
        ])],
        confirm: ['', Validators.required] 
    }, { validator: this.matchingPasswords('password', 'confirm')}
    );
  }

  // Function to disable the registration form
  disableForm() {
    this.form.controls['email'].disable();
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
    this.form.controls['confirm'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['email'].enable();
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
    this.form.controls['confirm'].enable();
  }
    // Function to validate e-mail is proper format
    validateEmail(controls) {
      // Create a regular expression
      const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      // Test email against regular expression
      if (regExp.test(controls.value)) {
        return null; // Return as valid email
      } else {
        return { 'validateEmail': true } // Return as invalid email
      }
    }

  // Function to validate username is proper format
  validateUsername(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    // Test username against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid username
    } else {
      return { 'validateUsername': true } // Return as invalid username
    }
  }

  // Function to validate password
  validatePassword(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    // Test password against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid password
    } else {
      return { 'validatePassword': true } // Return as invalid password
    }
  }

  // Funciton to ensure passwords match
  matchingPasswords(password, confirm) {
    return (group: FormGroup) => {
      // Check if both fields are the same
      if (group.controls[password].value === group.controls[confirm].value) {
        return null; // Return as a match
      } else {
        return { 'matchingPasswords': true } // Return as error: do not match
      }
    }
  }


    // Function to submit form
    onRegisterSubmit() {
      this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
      this.disableForm(); // Disable the form

      const user = {
        email: this.form.get('email').value, // E-mail input field
        username: this.form.get('username').value, // Username input field
        password: this.form.get('password').value // Password input field
      }


          // Function from authentication service to register user
    this.authService.registerUser(user).subscribe(data => {
        if(!data.success){
          this.messageClass = 'alert alert-danger'; // Set an error class
          this.message = data.message; // Set an error message
          this.processing = false; // Re-enable submit button
          this.enableForm(); // Re-enable form
        }else{
          this.messageClass = 'alert alert-success'; // Set an error class
          this.message = data.message; // Set an error message
           // After 2 second timeout, navigate to the login page
          setTimeout(() => {
          this.router.navigate(['/login']); // Redirect to login view
          }, 2000);
        }
    });
      // console.log(this.form.get('username').value);
      // console.log(this.form.get('email').value);
    }

  
  ngOnInit() {
  }

}
