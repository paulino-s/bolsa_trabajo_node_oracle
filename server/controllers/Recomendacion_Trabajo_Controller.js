var recomt = require('../Models/Recomendacion_Trabajo');
const BD = require('oracledb');

function buscarID(params) {
    recomt.ID_Recomendacion_Trabajo = params.ID_Recomendacion_Trabajo;
    //Where
}

function CrearRecomendacionTrabajo(params) {
    recomt.ID_Estudiante = params.ID_Estudiante;
    recomt.Nombre_Empresa = params.Nombre_Empresa;
    recomt.Sitio_Web = params.Sitio_Web;
    recomt.Telefono_Empresa = params.Telefono_Empresa;
    recomt.Email_Empresa = params.Email_Empresa;
    //Insert

}

function EliminarID(params) {
    recomt.ID_Recomendacion_Trabajo = params.ID_Recomendacion_Trabajo
    //Delete
}

function buscarIDuser(params) {
    recomt.ID_Estudiante = params.ID_Estudiante;
    //Where
}