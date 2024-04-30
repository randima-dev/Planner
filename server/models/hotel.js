const db = require('../db/database');

class Hotel {
  constructor(id, title, createdDate, isLiked, text, imageUrl) {
    this.id = id;
    this.title = title;
    this.createdDate = createdDate;
    this.isLiked = isLiked;
    this.text = text;
    this.imageUrl = imageUrl;
  }

  // Save the hotel to the database
  save() {
    if (this.id) {
      // Update existing hotel
      return db.query(
        'UPDATE hotels SET title = ?, createdDate = ?, isLiked = ?, text = ?, imageUrl = ? WHERE id = ?',
        [this.title, this.createdDate, this.isLiked, this.text, this.imageUrl, this.id]
      );
    } else {
      // Insert new hotel
      return db.query(
        'INSERT INTO hotels (title, createdDate, isLiked, text, imageUrl) VALUES (?, ?, ?, ?, ?)',
        [this.title, this.createdDate, this.isLiked, this.text, this.imageUrl]
      ).then(result => {
        this.id = result[0].insertId;
        return result;
      });
    }
  }

  // Delete the hotel from the database
  delete() {
    return db.query('DELETE FROM hotels WHERE id = ?', [this.id]);
  }

  // Fetch all hotels from the database
  static fetchAll() {
    return db.query('SELECT * FROM hotels');
  }

  // Fetch a single hotel by ID
  static findById(id) {
    return db.query('SELECT * FROM hotels WHERE id = ?', [id]).then(result => {
      return result[0];
    });
  }

  // Search hotels by text
  static search(text) {
    return db.query('SELECT * FROM hotels WHERE text LIKE ?', [`%${text}%`]);
  }
}

module.exports = Hotel;
