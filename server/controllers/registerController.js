const oracledb = require("oracledb");
const { query } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    let { nombre, nombre_empresa, email, telefono, password } = req.body;

    console.log(nombre, nombre_empresa, email, telefono, password);

    let result = await query(
      `
        BEGIN
          insertarEmpresa(:nombre, :empresa, :email, :telefono, :password); 
        END;
      `,
      {
        nombre,
        empresa: nombre_empresa,
        email,
        telefono,
        password,
      }
    );

    console.log(result.outBinds);

    res.json(result.outBinds);
  },
  registrarVacante: async (req, res) => {
    let {
      titulo,
      tipo,
      categoria,
      direccion,
      ciudad,
      sueldo_min,
      sueldo_max,
      contacto,
      descripcion,
    } = req.body;

    console.log(req.body);

    console.log(
      titulo,
      tipo,
      categoria,
      direccion,
      ciudad,
      sueldo_min,
      sueldo_max,
      contacto,
      descripcion
    );

    let result = await query(
      `BEGIN insertarPerfil(:id, :titulo, :tipo, :categoria, :direccion, :ciudad, :sueldo_min, :sueldo_max, :contacto, :descripcion); END;`,
      {
        id: {
          dir: oracledb.BIND_IN,
          val: 1,
          type: oracledb.NUMBER,
        },
        titulo: {
          dir: oracledb.BIND_IN,
          val: titulo,
          type: oracledb.STRING,
        },
        tipo: {
          dir: oracledb.BIND_IN,
          val: tipo,
          type: oracledb.STRING,
        },
        categoria: {
          dir: oracledb.BIND_IN,
          val: categoria,
          type: oracledb.STRING,
        },
        direccion: {
          dir: oracledb.BIND_IN,
          val: direccion,
          type: oracledb.STRING,
        },
        ciudad: {
          dir: oracledb.BIND_IN,
          val: ciudad,
          type: oracledb.DB_TYPE_VARCHAR,
        },
        sueldo_min: {
          dir: oracledb.BIND_IN,
          val: Number(sueldo_min),
          type: oracledb.DB_TYPE_NUMBER,
        },
        sueldo_max: {
          dir: oracledb.BIND_IN,
          val: Number(sueldo_max),
          type: oracledb.DB_TYPE_NUMBER,
        },
        contacto: {
          dir: oracledb.BIND_IN,
          val: contacto,
          type: oracledb.STRING,
        },
        descripcion: {
          dir: oracledb.BIND_IN,
          val: descripcion,
          type: oracledb.STRING,
        },
      }
    );

    console.log(result.outBinds);

    res.json(result.outBinds);
  },
};
