const { Router } = require("express");
const router = Router();
const path = require("path");
const { query } = require("./db");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `C:${path.sep}imagenes`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // modified here  or user file.mimetype
  },
});

const upload = multer({ storage: storage });

const {
  actualizarEstudiante,
  MostrarEstudiantesID,
  mostrarEstudiantes,
} = require("./controllers/Estudiantes_Controller");

const {
  registrarVacante,
  listarVacantes,
} = require("./controllers/VacanteController");
const { registrar } = require("./controllers/registerController");

const { loggearse, logout } = require("./controllers/Login_Controller");

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

router.post("/registro", registrar);

router.post("/registrar-vacante", registrarVacante);

router.get("/vacantes", listarVacantes);
router.get("/MostrarEstudiantesID");
router.post("/loggearse", loggearse);
router.post("/logout", logout);

router.post(
  "/actualizar-estudiante",
  upload.single("cv"),
  actualizarEstudiante
);

router.get("/estudiantes", mostrarEstudiantes);

module.exports = router;
