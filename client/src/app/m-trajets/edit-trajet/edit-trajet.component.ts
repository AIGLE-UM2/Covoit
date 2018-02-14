import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TrajetService } from '../../services/trajet.service';


@Component({
  selector: 'app-edit-trajet',
  templateUrl: './edit-trajet.component.html',
  styleUrls: ['./edit-trajet.component.css']
})
export class EditTrajetComponent implements OnInit {

  message;
  messageClass;
  trajet;
  processing = false;
  currentUrl;
  loading = true;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private trajetService: TrajetService,
    private router: Router
  ) { }

    // Function to Submit Update
    updateTrajetSubmit() {
      this.processing = true; // Lock form fields
      // Function to send trajet object to backend
      this.trajetService.editTrajet(this.trajet).subscribe(data => {
        // Check if PUT request was a success or not
        if (!data.success) {
          this.messageClass = 'alert alert-danger'; // Set error bootstrap class
          this.message = data.message; // Set error message
          this.processing = false; // Unlock form fields
        } else {
          this.messageClass = 'alert alert-success'; // Set success bootstrap class
          this.message = data.message; // Set success message
          // After two seconds, navigate back to trajet page
          setTimeout(() => {
            this.router.navigate(['/m-trajets']); // Navigate back to route page
          }, 2000);
        }
      });
    }
  
      // Function to go back to previous page
  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; 
    this.trajetService.getSingleTrajet(this.currentUrl.id).subscribe(data => { 
      if(!data.success){
        this.messageClass= 'alert alert-danger';
        this.message = data.message;

      }else{
        this.trajet = data.trajet;
        this.loading = false;
        
      }
      
    });

  }
}