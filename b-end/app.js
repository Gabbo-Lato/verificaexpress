const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'www')));


app.get('/api/mante', (req, res) => {
  const manteData = require('./mante.json'); 
  res.json(manteData);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
