var Perfil = require('../Models/Perfil');
const BD = require('oracledb');

function buscarID(params) {
    Perfil.ID_Perfil = params.ID_Perfil;
    //Where
}

function crearPerfil(params) {
    Perfil.ID_Estudiante = params.ID_Estudiante;
    Perfil.Titulo_Info = params.Titulo_Info;
    Perfil.Perfil_Academico = params.Perfil_Academico;
    Perfil.Habilidades_Perfil = params.Habilidades_Perfil;
    Perfil.Experiencia_Laboral = params.Experiencia_Laboral;
    Perfil.Rango_Salarial = params.Rango_Salarial;
    Perfil.Direccion_Trabajo = params.Direccion_Trabajo;
    //Insert
}

function Actualizar(params) {
    Perfil.ID_Estudiante = params.ID_Estudiante;
    Perfil.Titulo_Info = params.Titulo_Info;
    Perfil.Perfil_Academico = params.Perfil_Academico;
    Perfil.Habilidades_Perfil = params.Habilidades_Perfil;
    Perfil.Experiencia_Laboral = params.Experiencia_Laboral;
    Perfil.Rango_Salarial = params.Rango_Salarial;
    Perfil.Direccion_Trabajo = params.Direccion_Trabajo;
    //Update
}
function eliminarID(params) {
    Perfil.ID_Perfil = params.ID_Perfil;
    //Progrmar Delete
}
function buscarIDuser(params) {
    Perfil.ID_Estudiante = params.ID_Estudiante;
    //Where
}