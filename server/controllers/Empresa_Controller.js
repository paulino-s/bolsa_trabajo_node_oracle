var empresa = require("../Models/Empresas");
const oracledb = require("oracledb");
const { getConnection } = require("../db");

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

module.exports = {
  registrarEmpresa: async (req, res) => {
    try {
      let { nombre, empresa, emailaddress, telefono, password } = req.body;

      console.log(nombre, empresa, emailaddress, telefono, password);

      let con = await getConnection();

      let result = await con.execute(
        `
            BEGIN
              insertarEmpresa(:nombre, :empresa, :emailaddress, :telefono, :password); 
            END;
          `,
        {
          nombre,
          empresa,
          emailaddress,
          telefono,
          password,
        },
        {
          autoCommit: true,
        }
      );

      console.log(result.outBinds);

      con.release();

      res.json({ data: "successfully registered user" });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  },
};
