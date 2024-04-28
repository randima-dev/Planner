const db = require('../db/database');

class Hotel {
  static getAll() {
    return db.query('SELECT * FROM hotels');
  }

  static findById(id) {
    return db.query('SELECT * FROM hotels WHERE id = ?', [id]);
  }

  static create({ name, location, capacity, description }) {
    return db.query('INSERT INTO hotels (name, location, capacity, description) VALUES (?, ?, ?, ?)', [name, location, capacity, description]);
  }

  static update(id, { name, location, capacity, description }) {
    return db.query('UPDATE hotels SET name = ?, location = ?, capacity = ?, description = ? WHERE id = ?', [name, location, capacity, description, id]);
  }

  static delete(id) {
    return db.query('DELETE FROM hotels WHERE id = ?', [id]);
  }
}

module.exports = Hotel;
