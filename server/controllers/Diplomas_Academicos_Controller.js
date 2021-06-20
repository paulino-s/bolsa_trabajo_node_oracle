var diploma = require('../Models/Diplomas_Academicos');
const BD = require('oracledb');

function buscarID(params) {
    diploma.ID_Diploma = params.ID_Diploma;
    //Where
}

function crearDiploma(params) {
    diploma.ID_Estudiante = params.ID_Estudiante;
    diploma.Titulo = params.Titulo;
    diploma.Nombre_InsDiploma = params.Nombre_InsDiploma;
    diploma.Archivo_Diploma = params.Archivo_Diploma;
    diploma.Fecha = params.Fecha;
    //Insert
}

function actualizarDiploma(params) {
    diploma.ID_Estudiante = params.ID_Estudiante;
    diploma.Titulo = params.Titulo;
    diploma.Nombre_InsDiploma = params.Nombre_InsDiploma;
    diploma.Archivo_Diploma = params.Archivo_Diploma;
    diploma.Fecha = params.Fecha;
    //Update
}

function eliminarID(params) {
    diploma.ID_Diploma = params.ID_Diploma;
    //Delete
}

function BuscarIDuser(params) {
    diploma.ID_Estudiante = params.ID_Estudiante;
    //Where
}