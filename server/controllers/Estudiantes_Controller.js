var estudiante = require("../Models/Estudiante");
const oracledb = require("oracledb");
const { getConnection } = require("../db");
const path = require("path");
var { createHmac } = require("crypto");

module.exports = {
  registrarEstudiante: async (req, res) => {
    try {
      estudiante = req.body;

      let { password } = req.body;

      console.log(estudiante);

      let con = await getConnection();
      password = createHmac("sha256", password)
        .update("I love cupcakes")
        .digest("hex");
      console.log(password);
      let result = await con.execute(
        `BEGIN insertarEstudiante(:Nombre_Estudiante, :Email, :Pass); END;`,
        {
          Nombre_Estudiante: {
            dir: oracledb.BIND_IN,
            val: estudiante.nombre,
            type: oracledb.STRING,
          },
          Email: {
            dir: oracledb.BIND_IN,
            val: estudiante.emailaddress,
            type: oracledb.STRING,
          },
          Pass: {
            dir: oracledb.BIND_IN,
            val: password,
            type: oracledb.STRING,
          },
        },
        {
          autoCommit: true,
        }
      );

      console.log(result.outBinds);

      res.json({ data: "successfully registered user" });
    } catch (error) {
      res.json([{ error: error.message }]);
    }
  },
  actualizarEstudiante: async (req, res) => {
    let {
      nombre,
      apellidos,
      carnet,
      sexo,
      fecha,
      titulo,
      jornada,
      direccion,
      ciudad,
      telefonoFijo,
      telefonoPersonal,
      email,
      nit,
      nup,
      facebook,
      sueldoMin,
      sueldoMax,
      descripcion,
    } = req.body;

    console.log({
      nombre,
      apellidos,
      carnet,
      sexo,
      fecha,
      titulo,
      jornada,
      direccion,
      ciudad,
      telefonoFijo,
      telefonoPersonal,
      email,
      nit,
      nup,
      facebook,
      sueldoMin,
      sueldoMax,
      descripcion,
    });

    console.log(JSON.stringify(req.file, 2, null));

    let con;

    try {
      con = await getConnection();

      let result = await con.execute(
        `
        BEGIN
            actualizarDatosEstudiante(:id, :nombre, :apellidos, :carnet, :sexo, :fecha, :titulo, 
            :jornada, :direccion, :ciudad, :telefonoFijo, :telefonoPersonal, :email, :nit, 
            :nup, :facebook, :min, :max, :descripcion, :cv);
        END;
      `,
        {
          id: {
            dir: oracledb.BIND_IN,
            val: Number(req.session.user_id),
            type: oracledb.NUMBER,
          },
          nombre: {
            dir: oracledb.BIND_IN,
            val: nombre,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          apellidos: {
            dir: oracledb.BIND_IN,
            val: apellidos,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          carnet: {
            dir: oracledb.BIND_IN,
            val: carnet,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          sexo: {
            dir: oracledb.BIND_IN,
            val: sexo,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          fecha: {
            dir: oracledb.BIND_IN,
            val: new Date(fecha),
            type: oracledb.DB_TYPE_DATE,
          },
          titulo: {
            dir: oracledb.BIND_IN,
            val: titulo,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          jornada: {
            dir: oracledb.BIND_IN,
            val: jornada,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          direccion: {
            dir: oracledb.BIND_IN,
            val: direccion,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          ciudad: {
            dir: oracledb.BIND_IN,
            val: ciudad,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          telefonoFijo: {
            dir: oracledb.BIND_IN,
            val: telefonoFijo,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          telefonoPersonal: {
            dir: oracledb.BIND_IN,
            val: telefonoPersonal,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          email: {
            dir: oracledb.BIND_IN,
            val: email,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          nit: {
            dir: oracledb.BIND_IN,
            val: nit,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          nup: {
            dir: oracledb.BIND_IN,
            val: nup,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          facebook: {
            dir: oracledb.BIND_IN,
            val: facebook,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          min: {
            dir: oracledb.BIND_IN,
            val: Number(sueldoMin),
            type: oracledb.DB_TYPE_NUMBER,
          },
          max: {
            dir: oracledb.BIND_IN,
            val: Number(sueldoMax),
            type: oracledb.DB_TYPE_NUMBER,
          },
          descripcion: {
            dir: oracledb.BIND_IN,
            val: descripcion,
            type: oracledb.DB_TYPE_CLOB,
          },
          cv: {
            dir: oracledb.BIND_IN,
            val: `C:${path.sep}imagenes`,
            type: oracledb.DB_TYPE_VARCHAR,
          },
        },
        {
          autoCommit: true,
        }
      );

      con.release();

      res.json(result);
    } catch (error) {
      console.log(error);
      res.json([{ error: error.message }]);
    }
  },
  mostrarEstudiantes: async (req, res) => {
    try {
      let con = await getConnection();

      let result = await con.execute(
        `
          BEGIN
            estudiantes(:cursor);
          END;
        `,
        {
          cursor: {
            type: oracledb.DB_TYPE_CURSOR,
            dir: oracledb.BIND_OUT,
          },
        }, // bind value for :id
        { resultSet: true }
      );

      let rs = result.outBinds.cursor;
      let estudiantes = [];
      let row;

      while ((row = await rs.getRow())) {
        estudiantes.push({
          id: row[0],
          nombre: row[2],
          apellidos: row[4],
          sexo: row[5],
          fecha: row[6],
          titulo: row[7],
          jornada: row[8],
          direccion: row[9],
          ciudad: row[10],
          telefonoFijo: row[11],
          telefonoPersonal: row[12],
          email: row[3],
          nit: row[13],
          nup: row[14],
          facebook: row[15],
          sueldoMin: row[16],
          sueldoMax: row[17],
          descripcion: row[18],
          cv_path: row[19],
          carnet: row[20],
        });
      }

      console.log([estudiantes]);

      res.json(estudiantes);
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  },
  MostrarEstudiantesID: async (req, res) => {
    try {
      estudiante = req.body;

      let con = await getConnection();

      let result = await con.execute(
        `SELECT *
        FROM Datos_estudiantes
        WHERE id_Estudiante = :id`,
        [estudiante.ID_Estudiante], // bind value for :id
        { extendedMetaData: true }
      );

      return result;
    } catch (error) {}
  },
};
