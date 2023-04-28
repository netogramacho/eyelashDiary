const db = require("../config/db");

class WeightsControler {
  getLashWeight(req, res) {
    const q = "SELECT * FROM lashWeight WHERE usr_id = ?";
    const values = [req.body.userId]

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    });
  }

  addLashWeight(req, res) {
    const q = "INSERT INTO lashWeight(wgt_value, usr_id) VALUES(?)";

    const values = [req.body.weightValue, req.body.userId];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);

      return res.status(200).json("Espessura criada com sucesso.");
    });
  }

  updateLashWeight(req, res) {
    const q =
      "UPDATE lashWeight SET wgt_value = ? WHERE wgt_id = ?";
  
    const values = [
      req.body.weightValue,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Espessura atualizada com sucesso.");
    });
  }

  restoreLashWeight(req, res) {
    const q =
      "UPDATE lashWeight SET wgt_active = 1 WHERE wgt_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Espessura restaurada com sucesso.");
    });
  }

  deleteLashWeight(req, res) {
    const q =
      "UPDATE lashWeight SET wgt_active = 0 WHERE wgt_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Espessura excluída com sucesso.");
    });
  }
}

module.exports = new WeightsControler();
