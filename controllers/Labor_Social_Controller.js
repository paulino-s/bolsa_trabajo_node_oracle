var Labor_Social = require('../Models/Labor_Social');
const BD = require = require('oracledb');

function buscarID(params) {
    Labor_Social.ID_Labor = params.ID_Labor;
    //Where
}

function crearLabor(params) {
    Labor_Social.ID_Estudiante = params.ID_Estudiante;
    Labor_Social.Labor = params.Labor;
    Labor_Social.Descripcion_Labor = params.Descripcion_Labor;
    //Insert

}

function eliminarID(params) {
    Labor_Social.ID_Labor = params.ID_Labor
    //Delete
}

function buscarIDuser(params) {
    Labor_Social.ID_Estudiante = params.ID_Estudiante;
    //Where
}