/*
const BD = require('oracledb');

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
}*/
var estudiante = require('../Models/Estudiante');
const oracledb = require("oracledb");
const { query } = require("../db");

module.exports = {
  registrarEstudiante: async (req, res) => {
    estudiante = req.body;

    console.log(estudiante);

    let result = await query(`BEGIN insertarEstudiante(:Nombre_Estudiante, :Apellido_Estudiante, :Sexo, :Fecha_Nacimiento, :Nacionalidad, :Pasaporte, :NIT, :NUP, :Direccion, :Email, :Departamento, :Municipio, :Telefono_Casa, :Telefono_Celular, :Red_Social); END;`, {
      Nombre_Estudiante: { dir: oracledb.BIND_IN, 
        val: estudiante.Nombre_Estudiante, 
        type: oracledb.STRING },
      Apellido_Estudiante: {
        dir: oracledb.BIND_IN,
        val: estudiante.Apellido_Estudiante,
        type: oracledb.STRING,
      },
      Sexo: {
        dir: oracledb.BIND_IN,
        val: estudiante.Sexo,
        type: oracledb.STRING,
      },
      Fecha_Nacimiento:{
        dir: oracledb.BIND_IN,
        val: estudiante.Fecha_Nacimiento,
        type: oracledb.DATE
      },
      Nacionalidad:{
          dir: oracledb.BIND_IN,
          val: estudiante.Nacionalidad,
          type: oracledb.STRING
      },
      Pasaporte: {
          dir: oracledb.BIND_IN,
          val: estudiante.Pasaporte,
          type: oracledb.STRING
      },
      NIT:{
          dir: oracledb.BIND_IN,
          val: estudiante.NIT,
          type: oracledb.STRING
      },
      NUP:{
          dir: oracledb.BIND_IN,
          val: estudiante.NUP,
          type: oracledb.STRING
      },
      Direccion:{
          dir: oracledb.BIND_IN,
          val: estudiante.Direccion,
          type: oracledb.STRING
      },
      Email: {
          dir: oracledb.BIND_IN,
          val: estudiante.Email,
          type: oracledb.STRING
      },
      Departamento:{
          dir: oracledb.BIND_IN,
          val: estudiante.Departamento,
          type: oracledb.STRING
      },
      Municipio:{
          dir: oracledb.BIND_IN,
          val: estudiante.Municipio,
          type: oracledb.STRING
      },
      Telefono_Casa:{
          dir: oracledb.BIND_IN,
          val: estudiante.Telefono_Casa,
          type: oracledb.STRING
      },
      Telefono_Celular:{
          dir: oracledb.BIND_IN,
          val: estudiante.Telefono_Celular,
          type: oracledb.STRING
      },
      Red_Social:{
          dir: oracledb.BIND_IN,
          val: estudiante.Red_Social,
          type: oracledb.red
      }
    });

    console.log(result.outBinds);

    res.json(result.outBinds);
  }
};
