import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TrajetService } from '../services/trajet.service';


@Component({
  selector: 'app-m-trajets',
  templateUrl: './m-trajets.component.html',
  styleUrls: ['./m-trajets.component.css']
})
export class MTrajetsComponent implements OnInit {

  messageClass;
  message;
  newPost = false;
  loadingTrajets = false;
  form;
  processing = false; 
  trajetPosts;



  constructor(
    private formBuilder: FormBuilder,
    private trajetService: TrajetService  
  ) {     
    this.createNewTrajetForm(); // Create new Trajet form on start up
  }



      // Function to create new Trajet form
  createNewTrajetForm() {
    this.form = this.formBuilder.group({

          vDepart: ['', Validators.compose([
            Validators.required,
            Validators.maxLength(30),
            Validators.minLength(3),
            this.alphabetValidation
          ])],

          vDestination: ['', Validators.compose([
            Validators.required,
            Validators.maxLength(30),
            Validators.minLength(3),
            this.alphabetValidation
          ])],
          
          date: ''
    })
  }

    // Enable new Trajet form
    enableFormNewTrajetForm() {
      this.form.get('vDepart').enable(); // Enable vDepart field
      this.form.get('vDestination').enable(); // Enable vDestination field
    }
  
    // Disable new Trajet form
    disableFormNewTrajetForm() {
      this.form.get('vDepart').disable(); // Disable vDepart field
      this.form.get('vDestination').disable(); // Disable vDestination field
    }
  

  
  // Validation for Vills
  alphabetValidation(controls) {
    const regExp = new RegExp(/^[a-zA-Z ]+$/); // Regular expression to perform test
    // Check if test returns false or true
    if (regExp.test(controls.value)) {
      return null; // Return valid
    } else {
      return { 'alphabetValidation': true } // Return error in validation
    }
  }


  newTrajetForm(){
    this.newPost = true;
  }

  reloadTrajets(){
    this.loadingTrajets = true;
    this.getAllTrajets();
    // Get All Trajets
    setTimeout(() => {
      this.loadingTrajets = false; // Release button lock after four seconds
    }, 4000);
  }


  onTrajetSubmit(){
    // console.log( this.form)
    this.processing = true;
    this.disableFormNewTrajetForm();
    
    // Create Trajet object from form fields
    const trajet = {
      vDepart: this.form.get('vDepart').value, // vDepart field
      vDestination: this.form.get('vDestination').value, // vDestination field
      date: this.form.get('date').value // date field
    }

    // Function to save trajet into database
    this.trajetService.newTrajet(trajet).subscribe(data => {
      // Check if trajet was saved to database or not
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error class
        this.message = data.message; // Return error message
        this.processing = false; // Enable submit button
        this.enableFormNewTrajetForm(); // Enable form
      } else {
        this.messageClass = 'alert alert-success'; // Return success class
        this.message = data.message; // Return success message
        this.getAllTrajets();
        // Clear form data after two seconds
        setTimeout(() => {
          this.newPost = false; // Hide form
          this.processing = false; // Enable submit button
          this.message = false; // Erase error/success message
          this.form.reset(); // Reset all form fields
          this.enableFormNewTrajetForm(); // Enable the form fields
        }, 2000);
      }
    });

  }

  // Function to go back to previous page
  goBack() {
    window.location.reload(); // Clear all variable states
  }

  // Function to get all trajets from the database
  getAllTrajets() {
    // Function to GET all trajets from database
    this.trajetService.getAllTrajets().subscribe(data => {
      this.trajetPosts = data.trajets; // Assign array to use in HTML
    });
  }


  ngOnInit() {
    this.getAllTrajets();
  }



}
