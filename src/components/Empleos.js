import React from 'react';
import SidebarEmpleos from './Sidebars/SidebarEmpleos';
import CajaEmpleo from './Empleos/CajaEmpleo';

const Empleos = (props) => {
  return (
    <div>
      <div className="margin-top-30"></div>
      <div className="container">
        <div className="row">
          <SidebarEmpleos filtroCiudadEmpresas={props.filtroCiudadEmpresas}/>
          <div className="col-xl-9 col-lg-8 content-left-offset">
            <h3 className="page-title">Resultados</h3>
            <div className="listings-container margin-top-35">
              {props.empresas.map(empresa => (
                <CajaEmpleo 
                  key={empresa.id} 
                  id={empresa.id} 
                  logo={empresa.logo}
                  vacante={empresa.vacante}
                  tipoVacante={empresa.tipoVacante} 
                  categoria={empresa.categoria} 
                  ubicacion={empresa.ubicacion} 
                  ciudad={empresa.ciudad} 
                  sueldoMin={empresa.sueldoMin} 
                  sueldoMax={empresa.sueldoMax} 
                  estudios={empresa.estudios}
                  empresa={empresa.empresa}
                  contacto={empresa.contacto}
                  descripcion={empresa.descripcion}
                  tiempo={empresa.tiempo}
                />
              ))}
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default Empleos;