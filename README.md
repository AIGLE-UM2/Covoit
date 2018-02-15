# MEAN Stack learning simple project (BlaBlaCar)



# NodeJs (meaN stack)
* [Download Node.js](https://nodejs.org/en/) -  an open source server framework, allows you to run JavaScript on the server, has a set of built-in modules, uses asynchronous programming! (Node.js eliminates the waiting, and simply continues with the next request.), runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient,

What is a Module in Node.js?
Consider modules to be the same as JavaScript libraries.
A set of functions you want to include in your application.

## NPM
NPM is a package manager for Node.js packages(modules).
www.npmjs.com hosts thousands of free packages to download and use.
The NPM program is installed on your computer when you install Node.js



### Server Setup
```
$ npm init
```
Interactively create a package.json file.
This will ask you a bunch of questions, and then write a package.json for you.

### Nodemon

Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.  

```
npm install -g nodemon
```


### Covoit Server dependencies

#### pakage.json

Covoit APP Entry file is : index.js
```
  "dependencies": {
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "express": "^4.16.2",
    "jsonwebtoken": "^8.1.1",
    "mongoose": "^5.0.4"
  }
```
# Express (mEan stack)
* [express](http://expressjs.com) - Minimal and flexible Node.js web application framework.

```
$ npm install express --save
```

Creates an Express application. The express() function is a top-level function exported by the express module.
add it in index.js

```
var express = require('express');
var app = express();
```

# MongoDB (Mean stack)
* [Download Mongo DataBase](https://www.mongodb.com/)  

### mongod

* [Download ROBOMongo](https://robomongo.org/) - free lightweight GUI for MongoDB 

#### mongoose 
elegant mongodb object modeling for node.js
http://mongoosejs.com/

Mongoose provides a straight-forward, schema-based solution to model your application data.
```
$ npm install mongoose
```
# Angular (meAn stack)

* [Angular CLI](https://cli.angular.io/) - A command line interface for Angular

```
npm install -g @angular/cli
```

```
ng serve --o
```
ng serve compile entire of angular application and verifies everythings and start a live development server in => localhost:4200





* [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) 
* [body-parser](https://github.com/expressjs/body-parser) 
* [CORS middleware](https://github.com/expressjs/cors) 
* [JSON Web Tokens](https://jwt.io/) 
* [mongoose](http://mongoosejs.com/) 


