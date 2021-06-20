var idioma = require('../Models/Idiomas');
const BD = require('oracledb');

function buscarID(params) {
    idioma.ID_Idioma = params.ID_Idioma
    //Where
}

function crearIdioma(params) {
    idioma.ID_Estudiante = params.ID_Estudiante;
    idioma.ID_Idioma = params.ID_Idioma;
    idioma.Categoria = params.Categoria;
    idioma.Nivel = params.Nivel;
    idioma.Experiencia_idioma = params.Experiencia_idioma;
    //Insert
}

function eliminarID(params) {
    idioma.ID_Idioma = params.ID_Idioma;
    //Delete
}

function buscarIDuser(params) {
    idioma.ID_Estudiante = params.ID_Estudiante;
    //Where
}