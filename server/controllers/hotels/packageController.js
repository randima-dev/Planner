const db = require('../db/database');

exports.getPackagesByHotel = async (req, res) => {
  try {
    const [packages] = await db.query('SELECT * FROM packages WHERE hotel_id = ?', [req.params.hotelId]);
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving packages', error });
  }
};

// Additional CRUD functions here (similar to hotelController)
