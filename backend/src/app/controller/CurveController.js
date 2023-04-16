const db = require("../config/db");

class CurveControler {
  getLashCurve(req, res) {
    const q = "SELECT * FROM lashCurve WHERE usr_id = ?";
    const values = [req.body.userId]

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json(data);
    });
  }

  addLashCurve(req, res) {
    const q = "INSERT INTO lashCurve(cur_value, usr_id) VALUES(?)";

    const values = [req.body.curveValue, req.body.userId];

    db.query(q, [values], (err) => {
      if (err) return res.json(err);

      return res.status(200).json("Usuário criado com sucesso.");
    });
  }

  updateLashCurve(req, res) {
    const q =
      "UPDATE lashCurve SET cur_value = ? WHERE cur_id = ?";
  
    const values = [
      req.body.curveValue,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário atualizado com sucesso.");
    });
  }

  restoreLashCurve(req, res) {
    const q =
      "UPDATE lashCurve SET cur_active = 1 WHERE cur_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário restaurado com sucesso.");
    });
  }

  deleteLashCurve(req, res) {
    const q =
      "UPDATE lashCurve SET cur_active = 0 WHERE cur_id = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Usuário excluído com sucesso.");
    });
  }
}

module.exports = new CurveControler();
