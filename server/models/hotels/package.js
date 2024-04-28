const db = require('../db/database');

class Package {
  static findByHotelId(hotelId) {
    return db.query('SELECT * FROM packages WHERE hotel_id = ?', [hotelId]);
  }

  // Implement other methods similar to the Hotel model
}

module.exports = Package;
