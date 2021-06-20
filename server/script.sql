-- TABLAS

CREATE TABLE DATOS_ESTUDIANTE(
    IDESTUDIANTE INTEGER,
    IDUSUARIO INTEGER,
    NOMBRE_ESTUDIANTE VARCHAR2(50),
    EMAIL VARCHAR2(50)
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

-- SEQUENCIAS

CREATE SEQUENCE "PAULINO"."SEQUENCE_ESTUDIANTE" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE
20 NOORDER NOCYCLE NOKEEP NOSCALE GLOBAL;

CREATE SEQUENCE "PAULINO"."SEQUENCE_USUARIO" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20
NOORDER NOCYCLE NOKEEP NOSCALE GLOBAL;

CREATE SEQUENCE "PAULINO"."SEQUENCE_EMPRESA" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20
NOORDER NOCYCLE NOKEEP NOSCALE GLOBAL;

-- PROCEDIMIENTOS

create or replace NONEDITIONABLE PROCEDURE 
    insertarEstudiante(nombre in datos_estudiante.nombre_estudiante%type , correo_electronico in datos_estudiante.email%type, contra in usuario.password%type)
is
begin
    insert into usuario values(SEQUENCE_USUARIO.nextval,correo_electronico, contra );
    insert into datos_estudiante values(SEQUENCE_ESTUDIANTE.nextval,SEQUENCE_USUARIO.currval , nombre ,correo_electronico );
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





