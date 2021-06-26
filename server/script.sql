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
    PATH_CV VARCHAR2(150),
    CARNET VARCHAR2(20)
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
    RUBRO VARCHAR2(100),
    HABILIDADES VARCHAR2(100),
    CIUDAD VARCHAR2(30),
    DIRECCION VARCHAR2(100),
    SUELDO_MIN NUMBER(9,2),    
    SUELDO_MAX NUMBER(9,2),
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

/* */

create or replace NONEDITIONABLE procedure 
    actualizarDatosEstudiante(
        p_idestudiante datos_estudiante.idestudiante%type,
        p_nombre datos_estudiante.nombre_estudiante%type,
        p_apellidos datos_estudiante.apellidos%type,
        p_carnet datos_estudiante.carnet%type,
        p_sexo datos_estudiante.sexo%type,
        p_fecha datos_estudiante.fecha_nacimiento%type,
        p_titulo datos_estudiante.titulo_profesional%type,
        p_jornada datos_estudiante.tipo_jornada%type,
        p_direccion datos_estudiante.direccion%type,
        p_ciudad datos_estudiante.ciudad%type,
        tlf_fijo datos_estudiante.telefono_fijo%type,
        tlf_personal datos_estudiante.telefono_personal%type,
        p_email datos_estudiante.email%type,
        p_nit datos_estudiante.nit%type,
        p_nup datos_estudiante.nup%type,
        p_facebook datos_estudiante.facebook%type,
        p_sueldo_min datos_estudiante.sueldo_min%type,
        p_sueldo_max datos_estudiante.sueldo_max%type,
        p_descripcion datos_estudiante.descripcion%type,
        p_path_cv datos_estudiante.path_cv%type
    )
is     
begin
    update datos_estudiante 
        set 
            nombre_estudiante = p_nombre, 
            apellidos = p_apellidos,
            carnet = p_carnet, 
            sexo = p_sexo,
            fecha_nacimiento = p_fecha,
            titulo_profesional = p_titulo, 
            tipo_jornada = p_jornada,
            direccion = p_direccion, 
            ciudad = p_ciudad, 
            telefono_fijo = tlf_fijo ,
            telefono_personal = tlf_personal ,
            email = p_email,
            nit = p_nit,
            nup = p_nup, 
            facebook = p_facebook, 
            sueldo_min = p_sueldo_min, 
            sueldo_max = p_sueldo_max,
            descripcion = p_descripcion, 
            path_cv= p_path_cv
            where idestudiante = p_idestudiante; 
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
end;


/* */

create or replace NONEDITIONABLE procedure estudiantes(v_est out var_bolsa_trabajo.cur_estudiantes)
is
begin
    open v_est for select * from datos_estudiante;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
end;


/* */


create or replace NONEDITIONABLE procedure
    insertarEmpresa(
        nombre registrar_empresas.nombre_completo%type, 
        nom_emp registrar_empresas.nombre%type, 
        email registrar_empresas.email%type,
        telefono registrar_empresas.telefono%type, 
        pass usuario.password%type,
        id_empresa out registrar_empresas.idempresa%type)
is
begin
    insert into usuario values(SEQUENCE_USUARIO.nextval, email, pass);
    insert into registrar_empresas values(sequence_empresa.nextval,SEQUENCE_USUARIO.currval, nombre,nom_emp,email,telefono);
    id_empresa := sequence_empresa.currval;
    commit;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
        rollback;
end;


/* */


create or replace NONEDITIONABLE PROCEDURE 
    insertarEstudiante(
        nombre in datos_estudiante.nombre_estudiante%type , 
        correo_electronico in datos_estudiante.email%type,
        contra in usuario.password%type,
        id_estudiante out datos_estudiante.idestudiante%type)
is
begin
    insert into usuario values(SEQUENCE_USUARIO.nextval,correo_electronico, contra );
    insert into datos_estudiante (idestudiante,idusuario,nombre_estudiante,email) values(SEQUENCE_ESTUDIANTE.nextval,SEQUENCE_USUARIO.currval , nombre ,correo_electronico );
    id_estudiante := SEQUENCE_ESTUDIANTE.currval; 
    commit;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
end;


/* */


create or replace NONEDITIONABLE procedure
        insertarPerfil(id_empresa registrar_empresas.idempresa%type,titulo perfil.titulo%type,tipo perfil.tipo%type,
    rubro perfil.rubro%type,direccion perfil.direccion%type,ciudad perfil.ciudad%type, min_sal perfil.sueldo_min%type,
    max_sal perfil.sueldo_max%type, habilidades perfil.habilidades%type, descripcion perfil.descripcion%type)
is
begin
    insert into perfil (idperfil,idempresa,titulo,tipo,rubro,direccion,ciudad,sueldo_min,sueldo_max,habilidades,descripcion) values(SEQUENCE_PERFIL.nextval,id_empresa,titulo,tipo,rubro,direccion,ciudad,min_sal,max_sal,habilidades,descripcion);
    commit;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
        rollback;
end;


/* */


create or replace NONEDITIONABLE procedure listarVacantes (vacantes out var_bolsa_trabajo.cur_vacantes) is
begin
    open vacantes for select * from perfil;
end;


/* */


create or replace NONEDITIONABLE procedure vacantes(c_vacantes out var_bolsa_trabajo.cur_ofertas)
is
begin
    open c_vacantes for select p.idperfil,p.titulo,p.tipo,p.rubro,p.direccion,p.ciudad,p.sueldo_min,
        p.sueldo_max,e.nombre,e.nombre_completo,p.descripcion,p.habilidades
            from perfil p inner join registrar_empresas e on p.idempresa = e.idempresa;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
        rollback;
end;


/* */


create or replace NONEDITIONABLE procedure 
    verificarUsuario(var_user_name usuario.user_name%type,v_emp out var_bolsa_trabajo.cur_usuario,v_est out var_bolsa_trabajo.cur_usuario)
is
begin
    open v_emp for select u.idusuario,u.user_name,u.password,e.idempresa from usuario u, registrar_empresas e where u.user_name = var_user_name and u.idusuario = e.idusuario;
    open v_est for select u.idusuario,u.user_name,u.password,e.idestudiante from usuario u, datos_estudiante e where u.user_name = var_user_name and u.idusuario = e.idusuario;
exception
    when others then
        dbms_output.put_line(sqlcode||' '||sqlerrm);
end;


/* */


--PACKAGE

create or replace NONEDITIONABLE package var_bolsa_trabajo
as
    type cur_vacantes is ref cursor return perfil%rowtype;
    type ofe_emp is record(
        id registrar_empresas.idempresa%type,
        vacante perfil.titulo%type,
        tipo perfil.tipo%type,
        rubro perfil.rubro%type,
        ubicacion perfil.direccion%type,
        ciudad perfil.ciudad%type,
        sueldoMin perfil.sueldo_min%type,
        sueldoMax perfil.sueldo_max%type,
        empresa registrar_empresas.nombre%TYPE,
        contacto registrar_empresas.nombre_completo%type,
        descripcion perfil.descripcion%type,
        habilidades perfil.habilidades%type
    );
    type t_user is record(
        id usuario.idusuario%type,
        username usuario.user_name%type,
        password usuario.password%type,
        idtipo integer
    );
    type cur_ofertas is ref cursor return ofe_emp;
    type cur_usuario is ref cursor return t_user;
    type cur_estudiantes is ref cursor return datos_estudiante%rowtype;
end var_bolsa_trabajo;



