// Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)
// https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback
const crypto = require('crypto').randomBytes(256).toString('hex');



// with node  *** module.exports *** we can export a json object
// we importe it in index.js => const config = require('./config/dataBase'); 
// Export config object
module.exports = {
    uri: 'mongodb://localhost/27017', // Databse URI and database name => mongodb://localhost:DB_Name
    secret : crypto, // Cryto-created secret ( type of secret code we use throw out of our application like token and stuff like that (that's how our server can decrypt sth ))
    db :'DB27017'  // Database name

}