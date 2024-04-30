require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const hotelRoutes = require('./routes/hotelRoutes');

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use('/api/hotels', hotelRoutes); 

var server = app.listen(3000, () => {
  console.log('Server is running');
});

