const User = require('../models/user'); // Import User Model Schema
const Trajet = require('../models/trajet'); // Import Trajet Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/database'); // Import database configuration

module.exports = (router) => {

  /* ===============================================================
     CREATE NEW TRAJET
  =============================================================== */
  router.post('/newTrajet', (req, res) => {
    // Check if trajet title was provided
        if (!req.body.vDepart) {
          res.json({ success: false, message: 'Ville de départ est requis!' }); // Return error message
        }else{
          if (!req.body.vDestination){
            res.json({ success: false, message: 'Ville de destination est requis!' }); // Return error message
          }else{
                 // Create the trajet object for insertion into database
                const trajet = new Trajet({
                                 vDepart: req.body.vDepart, 
                                 vDestination: req.body.vDestination,
                                 date: req.body.date 
                });

                // Save trajet into database
                trajet.save((err) => {
                  // Check if error
                  if (err) {
                    // Check if error is a validation error
                    if (err.errors) {
                      // Check if validation error is in the vDepart field
                      if (err.errors.vDepart) {
                        res.json({ success: false, message: err.errors.vDepart.message }); // Return error message
                      } else {
                        // Check if validation error is in the vDestination field
                        if (err.errors.vDestination) {
                          res.json({ success: false, message: err.errors.vDestination.message }); // Return error message
                        } else {
                          res.json({ success: false, message: err }); // Return general error message
                        }
                      }
                    } else {
                      res.json({ success: false, message: err }); // Return general error message
                    }
                  } else {
                    res.json({ success: true, message: 'Trajet saved!' }); // Return success message
                  }
                });
                
            }
          }     
    });


    /* ===============================================================
     GET ALL TRAJETS
  =============================================================== */
  router.get('/allTrajets', (req, res) => {
    // Search database for all trajet posts
    Trajet.find({}, (err, trajets) => {
      // Check if error was found or not
      if (err) {
        res.json({ success: false, message: err }); // Return error message
      } else {
        // Check if terajets were found in database
        if (!trajets) {
          res.json({ success: false, message: 'No trajet found.' }); // Return error of no trajet found
        } else {
          res.json({ success: true, trajets: trajets }); // Return success and trajets array
        }
      }
    }).sort({ '_id': -1 }); // Sort trajets from newest to oldest = newest on top
  });


  /* ===============================================================
     GET SINGLE TRAJET
  =============================================================== */
  router.get('/singleTrajet/:id', (req, res) => {
    // Check if id is present in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No trajet ID was provided.' }); // Return error message
    } else {
      // Check if the trajet id is found in database
      Trajet.findOne({ _id: req.params.id }, (err, trajet) => {
        // Check if the id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid trajet id' }); // Return error message
        } else {
          // Check if trajet was found by id
          if (!trajet) {
            res.json({ success: false, message: 'Trajet not found.' }); // Return error message
          } else {
            res.json({ success: true, trajet: trajet }); // Return success
          }
        }
      });
    }
  });



  /* ===============================================================
     UPDATE BLOG POST
  =============================================================== */
  router.put('/updateTrajet', (req, res) => {
    // Check if id was provided
    if (!req.body._id) {
      res.json({ success: false, message: 'No trajet id provided' }); // Return error message
    } else {
      // Check if id exists in database
      Trajet.findOne({ _id: req.body._id }, (err, trajet) => {
        // Check if id is a valid ID
        if (err) {
          res.json({ success: false, message: 'Not a valid trajet id' }); // Return error message
        } else {
          // Check if id was found in the database
          if (!trajet) {
            res.json({ success: false, message: 'Trajet id was not found.' }); // Return error message
          } else {
            // Check who user is that is requesting blog update
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err }); // Return error message
              } else {
                // Check if user was found in the database
                if (!user) {
                  res.json({ success: false, message: 'Unable to authenticate user.' }); // Return error message
                } else {



                  trajet.vDepart = req.body.vDepart; // Save latest trajet vDepart
                  trajet.vDestination= req.body.vDestination; // Save latest vDestination
                  trajet.date= req.body.date; // Save latest date

                  trajet.save((err) => {
                    if (err) {
                      if (err.errors) {
                        res.json({ success: false, message: 'Please ensure form is filled out properly' });
                      } else {
                        res.json({ success: false, message: err }); // Return error message
                      }
                    } else {
                      res.json({ success: true, message: 'Trajet Updated!' }); // Return success message
                    }
                  });
                  
                
                }
              }
            });
          }
        }
      });
    }
  });


  
  return router;
};