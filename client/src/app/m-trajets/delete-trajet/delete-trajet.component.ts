import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../../services/trajet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-trajet',
  templateUrl: './delete-trajet.component.html',
  styleUrls: ['./delete-trajet.component.css']
})
export class DeleteTrajetComponent implements OnInit {
  message;
  messageClass;
  foundTrajet = false;
  processing = false;
  trajet;
  currentUrl;
  constructor(
    private trajetService: TrajetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }


  // Function to delete trajets
  deleteTrajet() {
    this.processing = true; // Disable buttons
    // Function for DELETE request
    this.trajetService.deleteTrajet(this.currentUrl.id).subscribe(data => {
      // Check if delete request worked
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return error bootstrap class
        this.message = data.message; // Return error message
      } else {
        this.messageClass = 'alert alert-success'; // Return bootstrap success class
        this.message = data.message; // Return success message
        // After two second timeout, route to trajet page
        setTimeout(() => {
          this.router.navigate(['../m-trajets']); // Route users to trajet page
        }, 2000);
      }
    });
  }


  ngOnInit() {
    this.currentUrl = this.activatedRoute.snapshot.params; // Get URL paramaters on page load
    // Function for GET request to retrieve trajet
    this.trajetService.getSingleTrajet(this.currentUrl.id).subscribe(data => {
      // Check if request was successfull
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Return bootstrap error class
        this.message = data.message; // Return error message
      } else {
        // Create the trajet object to use in HTML
        this.trajet = {
          vDepart: data.trajet.vDepart, // Set 
          vDestination: data.trajet.vDestination, // 
          date: data.trajet.date
        }
        this.foundTrajet = true; // Displaly trajet window
      }
    });

  }

}
