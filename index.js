// run with - 
// npm start 

const express = require('express');
const app = express();
const portNumber = 9090;

app.listen(portNumber, () => {
    console.log('Deloitte node app started!');
    console.log(`Go to http://localhost:${portNumber} to view the app.`);
});

app.get('/', (request, response) => {
    console.log('Welcome');
    response.send('Welcome to Deloitte node app...');
});

app.get('/home', (request, response) => {
    console.log('Home');
    response.send('Home...');
});

app.get('/contact', (request, response) => {
    console.log('Contact');
    response.send('Contact...');
});

app.get('/about', (request, response) => {
    console.log('about');
    response.send('About...');
});


// Node NodeJS 
// React ReactJS 
// Next NextJS 
// Express ExpressJS 

// AngularJS Angular 
// AngularJS Angular v1  1.1 1.2 .. 1.8 
// Angular Angular v2 onwards 



















