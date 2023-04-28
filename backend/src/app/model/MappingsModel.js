const db = require("../config/db");

class MappingModel {
  findAll(userId) {
    const q = "SELECT * FROM lashMapping WHERE usr_id = ?";
    const values = [userId];

    return new Promise((resolve, reject) => {
      db.query(q, values, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  findOne(userId, mappingId) {
    const q = "SELECT * FROM lashMapping WHERE usr_id = ? AND map_id = ?";
    const values = [userId, mappingId];

    return new Promise((resolve, reject) => {
      db.query(q, values, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

module.exports = new MappingModel();
