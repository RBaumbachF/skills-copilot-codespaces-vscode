// create web server
const express = require('express');
const app = express();
// create a port
const PORT = 3000;
// create a route
app.get('/comments', (req, res) => {
  res.send('Hello from the comments service!');
});
// listen to the port
app.listen(PORT, () => console.log(`Comments service listening on port ${PORT}!`));