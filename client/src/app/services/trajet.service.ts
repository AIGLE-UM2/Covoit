import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TrajetService {

  options;
  domain = this.authService.domain;

  constructor(    
    private authService: AuthService,
    private http: Http
  ) { }


  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    });
  }

  // Function to create a new trajet post
  newTrajet(trajet) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.post(this.domain + 'trajets/newTrajet', trajet, this.options).map(res => res.json());
  }

  // Function to get all trajets from the database
  getAllTrajets() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'trajets/allTrajets', this.options).map(res => res.json());
  }

    // Function to get the trajet using the id
    getSingleTrajet(id) {
      this.createAuthenticationHeaders(); // Create headers
      return this.http.get(this.domain + 'trajets/singleTrajet/' + id, this.options).map(res => res.json());
    }
  
  // Function to edit/update trajet 
  editTrajet(trajet) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.put(this.domain + 'trajets/updateTrajet/', trajet, this.options).map(res => res.json());
  }
  // Function to delete a trajet
  deleteTrajet(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.delete(this.domain + 'trajets/deleteTrajet/' + id, this.options).map(res => res.json());
  }
}
