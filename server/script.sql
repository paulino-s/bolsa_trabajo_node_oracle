-- TABLAS

CREATE TABLE DATOS_ESTUDIANTE(
    IDESTUDIANTE INTEGER,
    IDUSUARIO INTEGER,
    NOMBRE_ESTUDIANTE VARCHAR2(50),
    EMAIL VARCHAR2(50),
    APELLIDOS VARCHAR2(50),
    SEXO VARCHAR2(10),
    FECHA_NACIMIENTO DATE,
    TITULO_PROFESIONAL VARCHAR2(30),
    TIPO_JORNADA VARCHAR2(30),
    DIRECCION VARCHAR2(200),
    CIUDAD VARCHAR2(15),
    TELEFONO_FIJO VARCHAR2(20),
    TELEFONO_PERSONAL VARCHAR2(20),
    NIT VARCHAR(50),
    NUP VARCHAR(50),
    FACEBOOK VARCHAR2(150),
    SUELDO_MIN NUMBER(10,2),
    SUELDO_MAX NUMBER(10,2),
    DESCRIPCION CLOB,
    PATH_CV VARCHAR2(150)
);

CREATE TABLE USUARIO (
    IDUSUARIO INTEGER,
    USER_NAME VARCHAR2(50),
    PASSWORD VARCHAR2(150)
);

CREATE TABLE REGISTRAR_EMPRESAS (
    IDEMPRESA INTEGER,
    IDUSUARIO INTEGER,
    NOMBRE_COMPLETO VARCHAR2(50),
    NOMBRE VARCHAR2(150),
    EMAIL VARCHAR2(50),
    TELEFONO VARCHAR2(10)
);

CREATE TABLE PERFIL (
    IDPERFIL INTEGER,
    IDEMPRESA INTEGER,
    TITULO VARCHAR2(50),
    TIPO VARCHAR2(50),
    CATEGORIA VARCHAR2(100),
    DIRECCION VARCHAR2(100),
    CIUDAD VARCHAR2(30),
    SUELDO_MIN NUMBER(9,2),    
    SUELDO_MAX NUMBER(9,2),
    NOMBRE_CONTACTO VARCHAR2(100),
    DESCRIPCION VARCHAR2(300)
);

-- SEQUENCIAS

CREATE SEQUENCE "PAULINO"."SEQUENCE_ESTUDIANTE" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE
20 NOORDER NOCYCLE NOKEEP NOSCALE GLOBAL;

CREATE SEQUENCE "PAULINO"."SEQUENCE_USUARIO" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20
NOORDER NOCYCLE NOKEEP NOSCALE GLOBAL;

CREATE SEQUENCE "PAULINO"."SEQUENCE_EMPRESA" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20
NOORDER NOCYCLE NOKEEP NOSCALE GLOBAL;

CREATE SEQUENCE "PAULINO"."SEQUENCE_PERFIL" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20
NOORDER NOCYCLE NOKEEP NOSCALE GLOBAL;

-- PROCEDIMIENTOS

create or replace NONEDITIONABLE PROCEDURE 
    insertarEstudiante(nombre in datos_estudiante.nombre_estudiante%type , correo_electronico in datos_estudiante.email%type, contra in usuario.password%type)
is
begin
    insert into usuario values(SEQUENCE_USUARIO.nextval,correo_electronico, contra );
    insert into datos_estudiante (idestudiante,idusuario,nombre_estudiante,email) values(SEQUENCE_ESTUDIANTE.nextval,SEQUENCE_USUARIO.currval , nombre ,correo_electronico );
    commit;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
end;

create or replace NONEDITIONABLE procedure
    insertarEmpresa(nombre registrar_empresas.nombre_completo%type, nom_emp registrar_empresas.nombre%type, email registrar_empresas.email%type,
    telefono registrar_empresas.telefono%type, pass usuario.password%type)
is
begin
    insert into usuario values(SEQUENCE_USUARIO.nextval, email, pass);
    insert into registrar_empresas values(sequence_empresa.nextval,SEQUENCE_USUARIO.currval, nombre,nom_emp,email,telefono);
    commit;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
        rollback;
end;

create or replace NONEDITIONABLE procedure
        insertarPerfil(idempresa registrar_empresas.idempresa%type,titulo perfil.titulo%type,tipo perfil.tipo%type,
    categoria perfil.categoria%type,direccion perfil.direccion%type,ciudad perfil.ciudad%type, min_sal perfil.sueldo_min%type,
    max_sal perfil.sueldo_max%type, contacto perfil.nombre_contacto%type, descripcion perfil.descripcion%type)
is
begin
    insert into perfil values(SEQUENCE_PERFIL.nextval,idempresa,titulo,tipo,categoria,direccion,ciudad,min_sal,max_sal,contacto,descripcion);
    commit;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
        rollback;
end;

create or replace procedure listarVacantes (vacantes out var_bolsa_trabajo.cur_vacantes) is
begin
    open vacantes for select * from perfil;
end;

create or replace NONEDITIONABLE procedure 
    actualizarDatosEstudiante(
        p_idestudiante datos_estudiante.idestudiante%type,
        p_nombre datos_estudiante.nombre_estudiante%type,p_apellidos datos_estudiante.apellidos%type,p_sexo datos_estudiante.sexo%type,
        p_fecha datos_estudiante.fecha_nacimiento%type,p_titulo datos_estudiante.titulo_profesional%type,p_jornada datos_estudiante.tipo_jornada%type,
        p_direccion datos_estudiante.direccion%type,p_ciudad datos_estudiante.ciudad%type,tlf_fijo datos_estudiante.telefono_fijo%type,
        tlf_personal datos_estudiante.telefono_personal%type,p_nit datos_estudiante.nit%type,p_nup datos_estudiante.nup%type,
        p_facebook datos_estudiante.facebook%type,p_sueldo_min datos_estudiante.sueldo_min%type,p_sueldo_max datos_estudiante.sueldo_max%type,
        p_descripcion datos_estudiante.descripcion%type,p_path_cv datos_estudiante.path_cv%type
    )
is     
begin
    update datos_estudiante set nombre_estudiante = p_nombre, apellidos = p_apellidos, sexo = p_sexo,
        fecha_nacimiento = p_fecha,titulo_profesional = p_titulo, tipo_jornada = p_jornada,
        direccion = p_direccion, ciudad = p_ciudad, telefono_fijo = tlf_fijo , telefono_personal = tlf_personal ,
        nit = p_nit, nup = p_nup, facebook = p_facebook, sueldo_min = p_sueldo_min, sueldo_max = p_sueldo_max,
        descripcion = p_descripcion, path_cv= p_path_cv where idestudiante = p_idestudiante; 
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
end;

--PACKAGE

create or replace package var_bolsa_trabajo
as
    type cur_vacantes is ref cursor return perfil%rowtype;
end var_bolsa_trabajo;




