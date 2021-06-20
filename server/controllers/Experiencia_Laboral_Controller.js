var exp = require('../Models/Experiencia_Laboral');
const BD = require('oracledb');

function buscarID(params) {
    exp.ID_Experiencia = params.ID_Experiencia;
    //Where
}

function crearExp(params) {
    exp.ID_Estudiante = params.ID_Estudiante;
    exp.ID_Experiencia = params.ID_Experiencia;
    exp.Titulo_Cargo = params.Titulo_Cargo;
    exp.Trabajo_Anterior = params.Trabajo_Anterior;
    exp.Nombre_Empresa = params.Nombre_Empresa;
    exp.Telefono_Empresa = params.Telefono_Empresa;

    //Insert
}

function eliminarID(params) {
    exp.ID_Experiencia = params.ID_Experiencia;
    //delete
}

function buscarIDuser(params) {
    exp.ID_Estudiante = params.ID_Estudiante;
    //Where
}