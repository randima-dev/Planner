const Hotel = require('../models/hotel');

// Get all hotels
exports.getHotels = async (req, res) => {
  try {
    const [hotels] = await Hotel.fetchAll();
    res.json(hotels);
  } catch (err) {
    res.status(500).send('Error while retrieving hotels');
  }
};

// Get a single hotel by ID
exports.getHotelById = async (req, res) => {
  const id = req.params.id;
  try {
    const [hotel] = await Hotel.findById(id);
    if (hotel.length > 0) {
      res.json(hotel[0]);
    } else {
      res.status(404).send('Hotel not found');
    }
  } catch (err) {
    res.status(500).send('Error while retrieving hotel');
  }
};

// Create a new hotel
exports.createHotel = async (req, res) => {
  const hotel = new Hotel(null, req.body.title, req.body.createdDate, req.body.isLiked, req.body.text, req.body.imageUrl);
  try {
    await hotel.save();
    res.status(201).send(`Hotel added with ID: ${hotel.id}`);
  } catch (err) {
    res.status(500).send('Error while adding the hotel');
  }
};

// Update an existing hotel
exports.updateHotel = async (req, res) => {
  const hotel = new Hotel(req.params.id, req.body.title, req.body.createdDate, req.body.isLiked, req.body.text, req.body.imageUrl);
  try {
    await hotel.save();
    res.send('Hotel updated successfully');
  } catch (err) {
    res.status(500).send('Error while updating the hotel');
  }
};

// Delete a hotel
exports.deleteHotel = async (req, res) => {
  const hotel = new Hotel(req.params.id);
  try {
    await hotel.delete();
    res.send('Hotel deleted successfully');
  } catch (err) {
    res.status(500).send('Error while deleting the hotel');
  }
};

// Search for hotels
exports.searchHotels = async (req, res) => {
  const searchText = req.query.q;
  try {
    const [results] = await Hotel.search(searchText);
    res.json(results);
  } catch (err) {
    res.status(500).send('Error while searching hotels');
  }
};
