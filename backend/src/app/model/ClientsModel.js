const db = require("../config/db");

class ClientsModel {
  findAll(userId) {
    const q = "SELECT * FROM clients WHERE usr_id = ?";
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

  findOne(userId, clientId) {
    const q = "SELECT * FROM clients WHERE usr_id = ? AND cli_id = ?";
    const values = [userId, clientId];

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

  create(clientName, clientPhone, userId) {
    const q = "INSERT INTO clients(cli_name, cli_phone, usr_id) VALUES(?)";

    const values = [clientName, clientPhone, userId];

    return new Promise((resolve, reject) => {
      db.query(q, [values], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Cliente criado com sucesso.");
        }
      });
    });
  }

  update(clientName, clientPhone, clientId) {
    const q = "UPDATE clients SET cli_name = ?, cli_phone = ? WHERE cli_id = ?";
    const values = [clientName, clientPhone, clientId];

    return new Promise((resolve, reject) => {
      db.query(q, values, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Cliente atualizado com sucesso.");
        }
      });
    });
  }

  restore(clientId) {
    const q = "UPDATE clients SET cli_active = 1 WHERE cli_id = ?";
    const values = [clientId];

    return new Promise((resolve, reject) => {
      db.query(q, values, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Cliente restaurado com sucesso.");
        }
      });
    });
  }

  delete(clientId) {
    const q = "UPDATE clients SET cli_active = 0 WHERE cli_id = ?";
    const values = [clientId];

    return new Promise((resolve, reject) => {
      db.query(q, values, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Cliente excluído com sucesso.");
        }
      });
    });
  }
}

module.exports = new ClientsModel();
