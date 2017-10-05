const mysql = require('mysql');

module.exports = (api) => {
  const con = mysql.createConnection({
  host: api.settings.db.url,
  user: api.settings.db.user,
  password: api.settings.db.password,
  database: api.settings.db.database
  });

  function create(req, res, next) {
    con.query("INSERT INTO Cours (Matiere_idMatiere,Description,Titre,Date) VALUES ("+req.body.idmatiere+",'"+req.body.description+"','"+req.body.titre+"', NOW())",
      (err, result, fields) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.send(result);
      })
  }

  function deletec(req, res, next){
    con.query("DELETE FROM Cours WHERE idCours = "+req.params.id+"",
      (err, result, fields) => {
        if (err) {
          return res.status(500).send(err);
        }

        return res.send(result);
      })
  }

  function getAllQuestionOfThisCoursTaVu(req,res,next) {
    con.query("SELECT * FROM Question WHERE Cours_idCours = "+ req.params.id+"",
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }

      return res.send(result);
    })
  }

  return {
    create,
    deletec,
    getAllQuestionOfThisCoursTaVu
  };
}
