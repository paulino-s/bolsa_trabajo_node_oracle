const { Router } = require("express");
const router = Router();
const { query } = require("./db");
const {
  registrarEstudiante,
  registrarEmpresa,
} = require("./controllers/registerController");

const {
  registrarVacante,
  listarVacantes,
} = require("./controllers/VacanteController");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Probando servidor",
  });
});

router.get("/fromoracle", async (req, res) => {
  const login = [];
  sql = "select * from empresa";

  let result = await DB.Open(sql, [], false);

  //console.log(result.rows);

  console.log(login);
  result.rows.map((person) => {
    let userSchema = {
      IDLOGIN: person[0],
      USERNAME: person[1],
      PASSWORD: person[2],
      PASSWORD: person[3],
      PASSWORD: person[4],
    };
    login.push(userSchema);
  });
  res.json({ login });
});

router.post("/registrar-estudiante", registrarEstudiante);

router.post("/registrar-empresa", registrarEmpresa);

router.post("/registrar-vacante", registrarVacante);

router.get("/vacantes", listarVacantes);

module.exports = router;
