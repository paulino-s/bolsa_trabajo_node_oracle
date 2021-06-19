var logro = require('../Models/Logros');
const BD = require('oracledb');

function buscarID(params) {
    logro.ID_Logro = params.ID_Logro;
    //Programar Where
}

function crearLogro(params) {
    logro.ID_Estudiante = params.ID_Estudiante;
    logro.Titulo_Logro = params.Titulo_Logro;
    logro.Fecha_Logros = params.Fecha_Logros;
    logro.Comentarios_Logro = params.Comentarios_Logro;

    //Programar Insert

}

function elminarID(params) {
    logro.ID_Logro = params;

    //Programar Delete
}

function buscarIDuser(params) {
    logro.ID_Estudiante = params;
    //Programar Where    
}
