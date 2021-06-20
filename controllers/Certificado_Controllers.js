var Certi = require("../Models/Certificaciones");
const BD = require('oracledb');

function buscarID(params) {
    Certi.ID_Certificado = params.ID_Certificado;
    //Where
}

function crearCertificacion(params) {
    Certi.ID_Estudiante = params.ID_Estudiante;
    Certi.Titulo_Certificado = params.Titulo_Certificado;
    Certi.Institucion_Certificado = params.Institucion_Certificado;
    Certi.Archivo_Certificado = params.Archivo_Certificado;
    Certi.Fecha_Certificado = params.Fecha_Certificado;
    //Insert
}

function eliminarID(params) {
    Certi.ID_Certificado = params.ID_Certificado;
    //Delete
}

function BuscarIDuser(params) {
    Certi.ID_Estudiante = params.ID_Estudiante;
    //Where
}
