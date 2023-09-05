const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('1!');
    next(); // Allows the request to continue to the next middleware in line
});

app.use('/add-product', (req, res, next) => {
    console.log('2');
    res.send('<h1>Add products page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('3');
    res.send('<h1>Hello from Express! again</h1>');
  });

app.listen(3000);