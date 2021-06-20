var recom = require('../Models/Recomendacion_Personal');
const BD = require('oracledb');

function buscarID(params) {
    recom.ID_Recomendacion_Personal = params.ID_Recomendacion_Personal;
    //Where
}

function crearRecom(params) {
    recom.ID_Estudiante = params.ID_Estudiante;
    recom.Categoria_Nombre = params.Categoria_Nombre;
    recom.Apellido = params.Apellido;
    recom.Email = params.Email;

    //Insert

}

function eliminarID(params) {
    recom.ID_Recomendacion_Personal = params.ID_Recomendacion_Personal;
    //Delete
}

function buscarIDuser(params) {
    recom.ID_Estudiante
    //where
}