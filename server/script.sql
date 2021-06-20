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

-- SEQUENCIAS

CREATE SEQUENCE "PAULINO"."SEQUENCE_ESTUDIANTE" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE
20 NOORDER NOCYCLE NOKEEP NOSCALE GLOBAL;

CREATE SEQUENCE "PAULINO"."SEQUENCE_USUARIO" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 21 CACHE 20
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