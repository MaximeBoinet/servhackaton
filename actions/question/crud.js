const mysql = require('mysql');

module.exports = (api) => {
  const con = mysql.createConnection({
  host: api.settings.db.url,
  user: api.settings.db.user,
  password: api.settings.db.password,
  database: api.settings.db.database
  });

  function create(req,res,next) {
    con.query("INSERT INTO Question (Cours_idCours, Personne_idPersonne, Text) VALUES ("+ req.body.idquestion +","+req.body.idpersonne+",'"+ req.body.text+"')",
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }
      
      return res.send(result);
    })
  }

  function deleteq(req, res, next) {
    con.query("DELETE FROM Question WHERE idQuestion = "+req.params.id+"",
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!result || result.length == 0) {
        return res.status(204).send("No data found");
      }

      return res.send(result);
    })
  }

  function getAllReponse(req, res, next) {
    con.query("SELECT * FROM Reponse WHERE Question_idQuestion = "+ req.params.id+"",
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (!result || result.length == 0) {
        return res.status(204).send("No data found");
      }

      return res.send(result);
    })
  }

  return {
    create,
    deleteq,
    getAllReponse
  };
}
