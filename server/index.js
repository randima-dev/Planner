const express = require('express');
const bodyParser = require('body-parser');
const hotelRoutes = require('./routes/hotels/hotelRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser.json());
app.use('/api/hotels', hotelRoutes);
app.use(errorHandler);

var server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

