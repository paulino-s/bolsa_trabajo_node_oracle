var libro = require('../Models/Libros');
const BD = require('oracledb');

function buscarID(params) {
    libro.ID_Libro = params.ID_Libro;
    //where
}

function crearLibro(params) {
    libro.ID_Estudiante = params.ID_Estudiante;
    libro.Titulo_Libro = params.Titulo_Libro;
    libro.Edicion_Libro = params.Edicion_Libro;
    libro.Edicion_Libro = params.Edicion_Libro;
    libro.Nombre_Articulo = params.Nombre_Articulo;
    libro.Web_Publicacion = params.Web_Publicacion;
    libro.ISBN = params.ISBN;
    libro.Fecha_Publicacion = params.Fecha_Publicacion;
    //Insert
}
function eliminarID(params) {
    libro.ID_Libro = params.ID_Libro;
    //Delete
}
function buscarIDuser(params) {
    libro.ID_Estudiante = params.ID_Estudiante;
    //Where
}