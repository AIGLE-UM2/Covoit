const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;


let vDepartLengthChecker = (vDepart) => { 
    if (!vDepart) { 
        return false;
    } else {
        if (vDepart.length < 3 || vDepart.length > 30) {
             return false;
        } else {
            return true;
        }
    }
};


let alphavDepartChecker = (vDepart) => { 
    if (!vDepart) { 
        return false;
    } else {
        const regExp = new RegExp(/^[a-zA-Z ]+$/);
        return regExp.test(vDepart);
    }
};

const vDepartValidators = [
    {
        validator: vDepartLengthChecker,
        message: 'Ville de départ doit être au moin 3 character mais pas plus de 30'
    },

    {
        validator: alphavDepartChecker,
        message: 'doit être Alphabetical'
    }

];


// Validate Function to check Ville de Destination length
let vDestinationLengthChecker = (vDestination) => {
    // Check if vDestination exists
    if (!vDestination) {
      return false; // Return error
    } else {
      // Check length of vDestination string
      if (vDestination.length < 3 || vDestination.length > 30) {
        return false; // Return error if does not meet length requirement
      } else {
        return true; // Return as valid vDestination
      }
    }
  };


  
// Validate Function to check if valid vDestination format
let alphavDestinationChecker = (vDestination) => {
    // Check if vDestination exists
    if (!vDestination) {
      return false; // Return error
    } else {
      // Regular expression to test if vDestination format is valid
      const regExp = new RegExp(/^[a-zA-Z ]+$/);
      return regExp.test(vDestination); // Return regular expression test result (true or false)
    }
  };
  
  // Array of vDestination validators
  const vDestinationValidators = [
    // First vDestination validator
    {
      validator: vDestinationLengthChecker,
      message: 'Ville de départ doit être au moin 3 character mais pas plus de 30'
    },
    // Second vDestination validator
    {
      validator: alphavDestinationChecker,
      message: 'doit être Alphabetical'
    }
  ];

  

  const trajetSchema = new Schema({
    vDepart: { type: String, required: true, validate: vDepartValidators },
    vDestination: { type: String, required: true, validate: vDestinationValidators },
    date: { type: Date, default: Date.now(), required: false }
});





module.exports = mongoose.model('Trajet', trajetSchema);
