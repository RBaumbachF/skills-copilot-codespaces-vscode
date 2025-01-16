// create web server with express
const express = require('express');
const app = express();

// create a route
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// create a route with a parameter
app.get('/comments/:id', (req, res) => {
  res.send('Comment ID: ' + req.params.id);
});

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});