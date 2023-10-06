const express = require('express');
const bodyParser = require('body-parser');
const cryptoRouter = require('./cryptoRouter');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Use the cryptoRouter for endpoints
app.use('/crypto', cryptoRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
