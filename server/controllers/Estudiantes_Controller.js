var estudiante = require("../Models/Estudiante");
const BD = require("oracledb");

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
