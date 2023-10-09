const express = require('express');
const bodyParser = require('body-parser');
const cryptoRouter = require('./cryptoRouter');
const app = express();
require('dotenv').config(); // Load environment variables from .env file

// Middleware to parse JSON requests
app.use(bodyParser.json());
console.log("Hello World");

const port = process.env.PORT; // Use 3000 as a default port if PORT is not defined in the .env file

// Use the cryptoRouter for endpoints
app.use('/crypto', cryptoRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
