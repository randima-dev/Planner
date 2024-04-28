const db = require('../../db/database');

exports.getAllHotels = async (req, res) => {
  try {
    const [hotels] = await db.query('SELECT * FROM hotels');
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving hotels', error });
  }
};

exports.getHotelById = async (req, res) => {
  try {
    const [hotel] = await db.query('SELECT * FROM hotels WHERE id = ?', [req.params.id]);
    res.json(hotel[0] || null);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving hotel', error });
  }
};

exports.createHotel = async (req, res) => {
  const { name, location, capacity, description } = req.body;
  try {
    const [result] = await db.query('INSERT INTO hotels (name, location, capacity, description) VALUES (?, ?, ?, ?)', [name, location, capacity, description]);
    res.status(201).json({ id: result.insertId, name, location, capacity, description });
  } catch (error) {
    res.status(500).json({ message: 'Error creating hotel', error });
  }
};

exports.updateHotel = async (req, res) => {
  const { name, location, capacity, description } = req.body;
  try {
    await db.query('UPDATE hotels SET name = ?, location = ?, capacity = ?, description = ? WHERE id = ?', [name, location, capacity, description, req.params.id]);
    res.json({ message: 'Hotel updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating hotel', error });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    await db.query('DELETE FROM hotels WHERE id = ?', [req.params.id]);
    res.json({ message: 'Hotel deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting hotel', error });
  }
};
