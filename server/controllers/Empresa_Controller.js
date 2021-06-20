var empresa = require('../Models/Empresas');
const BD = require('oracledb');

function BuscarID(params) {
    empresa.ID_Empresa = params.ID_Empresa;
    //Where
}

function CrearEmpresa(params) {
    empresa.Foto_Perfil = params.Foto_Perfil;
    empresa.Nombre_Empresa = params.Nombre_Empresa;
    empresa.Rubro_Empresa = params.Rubro_Empresa;
    empresa.CodPostal = params.CodPostal;
    empresa.Cant_Personas = params.Cant_Personas;
    empresa.Pag_web = params.Pag_web;
    empresa.Direccion_Empresa = params.Direccion_Empresa;
    empresa.Departamento = params.Departamento;
    empresa.Municipio = params.Municipio;
    empresa.Pais_Empresa = params.Pais_Empresa;
    empresa.Tel_Empresa = params.Tel_Empresa;
    empresa.Email_Empresa = params.Email_Empresa;
    empresa.Servicios = params.Servicios;
    empresa.Experiencia = params.Experiencia;

    //Insert

}

function actualizarEmpresa(params) {
    empresa.Foto_Perfil = params.Foto_Perfil;
    empresa.Nombre_Empresa = params.Nombre_Empresa;
    empresa.Rubro_Empresa = params.Rubro_Empresa;
    empresa.CodPostal = params.CodPostal;
    empresa.Cant_Personas = params.Cant_Personas;
    empresa.Pag_web = params.Pag_web;
    empresa.Direccion_Empresa = params.Direccion_Empresa;
    empresa.Departamento = params.Departamento;
    empresa.Municipio = params.Municipio;
    empresa.Pais_Empresa = params.Pais_Empresa;
    empresa.Tel_Empresa = params.Tel_Empresa;
    empresa.Email_Empresa = params.Email_Empresa;
    empresa.Servicios = params.Servicios;
    empresa.Experiencia = params.Experiencia;
    //Update
}

function EliminarEmpresa(params) {
    empresa.ID_Empresa = params.ID_Empresa;
    //Delete
}
