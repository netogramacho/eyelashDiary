const db = require("../config/db");

class SizeControler {
  getLashSize(req, res) {
    const q = "SELECT * FROM lashSize WHERE usr_id = ?";
    const values = [req.body.userId]

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    });
  }

  addLashSize(req, res) {
    const q = "INSERT INTO lashSize(siz_value, usr_id) VALUES(?)";

    const values = [req.body.sizeValue, req.body.userId];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);

      return res.status(200).json("Usuário criado com sucesso.");
    });
  }

  updateLashSize(req, res) {
    const q =
      "UPDATE lashSize SET siz_value = ? WHERE siz_id = ?";
  
    const values = [
      req.body.sizeValue,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  }

  restoreLashSize(req, res) {
    const q =
      "UPDATE lashSize SET siz_active = 1 WHERE siz_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário restaurado com sucesso.");
    });
  }

  deleteLashSize(req, res) {
    const q =
      "UPDATE lashSize SET siz_active = 0 WHERE siz_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário excluído com sucesso.");
    });
  }
}

module.exports = new SizeControler();
