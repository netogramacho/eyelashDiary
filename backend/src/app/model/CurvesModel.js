const db = require("../config/db");

class CurvesModel {
  findAll(userId) {
    const q = "SELECT * FROM lashCurve WHERE usr_id = ?";
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

  findOne(userId, curveId) {
    const q = "SELECT * FROM lashCurve WHERE usr_id = ? AND cur_id = ?";
    const values = [userId, curveId];

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

  create(curveValue, userId) {
    const q = "INSERT INTO lashCurve(cur_value, usr_id) VALUES(?)";

    const values = [curveValue, userId];

    return new Promise((resolve, reject) => {
      db.query(q, [values], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Curvatura criada com sucesso.");
        }
      });
    });
  }

  update(curveValue, curveId) {
    const q = "UPDATE lashCurve SET cur_value = ? WHERE cur_id = ?";

    const values = [curveValue, curveId];

    return new Promise((resolve, reject) => {
      db.query(q, values, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Curvatura atualizado com sucesso.");
        }
      });
    });
  }

  restore(curveId) {
    const q = "UPDATE lashCurve SET cur_active = 1 WHERE cur_id = ?";

    return new Promise((resolve, reject) => {
      db.query(q, [curveId], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Usuário restaurado com sucesso.");
        }
      });
    });
  }

  delete(curveId) {
    const q = "UPDATE lashCurve SET cur_active = 0 WHERE cur_id = ?";

    return new Promise((resolve, reject) => {
      db.query(q, [curveId], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve("Usuário excluido com sucesso.");
        }
      });
    });
  }
}

module.exports = new CurvesModel();
