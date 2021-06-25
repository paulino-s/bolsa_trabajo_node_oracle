import React from "react";
import SidebarCandidatos from "./Sidebars/SidebarCandidatos";
import CajaCandidato from "./Candidatos/CajaCandidato";

const Candidatos = (props) => {
  return (
    <div>
      <div className="margin-top-30"></div>
      <div className="container">
        <div className="row">
          <SidebarCandidatos
            filtroCiudad={props.filtroCiudad}
            filtroEstudios={props.filtroEstudios}
          />
          <div className="col-xl-9 col-lg-8 content-left-offset">
            <h3 className="page-title">Candidatos</h3>
            <div className="freelancers-container freelancers-list-layout margin-top-35">
              {props.candidatos.map((candidato) => (
                <CajaCandidato
                  key={candidato.id}
                  id={candidato.id}
                  avatar={candidato.avatar}
                  nombre={candidato.nombre}
                  apellidos={candidato.apellidos}
                  sexo={candidato.sexo}
                  fecha={candidato.fecha}
                  titulo={candidato.titulo}
                  jornada={candidato.jornada}
                  direccion={candidato.direccion}
                  ciudad={candidato.ciudad}
                  telefonoFijo={candidato.telefonoFijo}
                  telefonoPersonal={candidato.telefonoPersonal}
                  email={candidato.email}
                  nit={candidato.nit}
                  nup={candidato.nup}
                  facebook={candidato.facebook}
                  sueldoMin={candidato.sueldoMin}
                  sueldoMax={candidato.sueldoMax}
                  descripcion={candidato.descripcion}
                  visible={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidatos;
