var estudiante = require("../Models/Estudiante");
const oracledb = require("oracledb");
const { getConnection } = require("../db");
const path = require("path");
/*
function buscarID(params) {
  estudiante.ID_Estudiante = params.ID_Estudiante;
  //Where
}

function crearEstudiante(params) {
  estudiante.Nombre_Estudiante = params.Nombre_Estudiante;
  estudiante.Apellido_Estudiante = params.Apellido_Estudiante;
  estudiante.Sexo = params.Sexo;
  estudiante.Fecha_Nacimiento = params.Fecha_Nacimiento;
  estudiante.Nacionalidad = params.Nacionalidad;
  estudiante.Pasaporte = params.Pasaporte;
  estudiante.NIT = params.NIT;
  estudiante.NUP = params.NUP;
  estudiante.Direccion = params.Direccion;
  estudiante.Email = params.Email;
  estudiante.Departamento = params.Departamento;
  estudiante.Municipio = params.Departamento;
  estudiante.Telefono_Casa = params.Telefono_Casa;
  estudiante.Telefono_Celular = params.Telefono_Celular;
  estudiante.Red_Social = params.Red_Social;

  //Insert
}


function actualizarEstudiante(params) {
  estudiante.Nombre_Estudiante = params.Nombre_Estudiante;
  estudiante.Apellido_Estudiante = params.Apellido_Estudiante;
  estudiante.Sexo = params.Sexo;
  estudiante.Fecha_Nacimiento = params.Fecha_Nacimiento;
  estudiante.Nacionalidad = params.Nacionalidad;
  estudiante.Pasaporte = params.Pasaporte;
  estudiante.NIT = params.NIT;
  estudiante.NUP = params.NUP;
  estudiante.Direccion = params.Direccion;
  estudiante.Email = params.Email;
  estudiante.Departamento = params.Departamento;
  estudiante.Municipio = params.Departamento;
  estudiante.Telefono_Casa = params.Telefono_Casa;
  estudiante.Telefono_Celular = params.Telefono_Celular;
  estudiante.Red_Social = params.Red_Social;
  //Update
}


function eliminarEstudiante(params) {
  estudiante.ID_Estudiante = params.ID_Estudiante;
  //Delete
}
*/
module.exports = {
  registrarEstudiante: async (req, res) => {
    try {
      estudiante = req.body;

      let { password } = req.body;

      console.log(estudiante);

      let con = await getConnection();

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
      sexo,
      fecha,
      titulo,
      jornada,
      direccion,
      ciudad,
      tlf_fijo,
      tlf_personal,
      nit,
      nup,
      facebook,
      min_sal,
      max_sal,
      descripcion,
    } = req.body;

    console.log({
      nombre,
      apellidos,
      sexo,
      fecha,
      titulo,
      jornada,
      direccion,
      ciudad,
      tlf_fijo,
      tlf_personal,
      nit,
      nup,
      facebook,
      min_sal,
      max_sal,
      descripcion,
    });

    console.log(JSON.stringify(req.file, 2, null));

    let con;

    try {
      con = await getConnection();

      let result = await con.execute(
        `
        BEGIN
            actualizarDatosEstudiante(:id, :nombre, :apellidos, :sexo, :fecha, :titulo, 
            :jornada, :direccion, :ciudad, :tlf_fijo, :tlf_personal, :nit, 
            :nup, :facebook, :min, :max, :descripcion, :cv);
        END;
      `,
        {
          id: {
            dir: oracledb.BIND_IN,
            val: 21,
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
          sexo: {
            dir: oracledb.BIND_IN,
            val: sexo,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          fecha: {
            dir: oracledb.BIND_IN,
            val: new Date(),
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
          tlf_fijo: {
            dir: oracledb.BIND_IN,
            val: tlf_fijo,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          tlf_personal: {
            dir: oracledb.BIND_IN,
            val: tlf_personal,
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
            val: Number(min_sal),
            type: oracledb.DB_TYPE_NUMBER,
          },
          max: {
            dir: oracledb.BIND_IN,
            val: Number(max_sal),
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
};
