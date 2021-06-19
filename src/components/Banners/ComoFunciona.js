import React from 'react';
import { Link } from "react-router-dom";

const ComoFunciona = () => {
  return(
    <div className="section padding-top-15 padding-bottom-10" style={{marginBottom: '50px'}}>
      <div className="container">
        <div className="row">

          <div className="col-xl-12">
            <div className="section-headline centered margin-top-0 margin-bottom-5">
              <h3>¿Cómo Funciona?</h3>
            </div>
          </div>
          
          <div className="col-xl-4 col-md-4">
            <div className="icon-box with-line">
              <div className="icon-box-circle">
                <div className="icon-box-circle-inner">
                  <i className="icon-line-awesome-lock"></i>
                  <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                </div>
              </div>
              <Link to="/registro"><h3>Crear una cuenta</h3></Link>
              <p>Si eres un Estudiante Egresado o una Empresa del Sector, JobUES es tu gran oportunidad</p>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            <div className="icon-box with-line">
              <div className="icon-box-circle">
                <div className="icon-box-circle-inner">
                  <i className="icon-line-awesome-legal"></i>
                  <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                </div>
              </div>
              <h3>Publique o Consulte Estudiantes</h3>
              <p>Publique o consulte las mejores ofertas de empleo para profesinales Universitarios</p>
            </div>
          </div>

          <div className="col-xl-4 col-md-4">
            <div className="icon-box">
              <div className="icon-box-circle">
                <div className="icon-box-circle-inner">
                  <i className=" icon-line-awesome-trophy"></i>
                  <div className="icon-box-check"><i className="icon-material-outline-check"></i></div>
                </div>
              </div>
              <h3>Respaldo JobUES</h3>
              <p>Sin temor, todos los perfiles y empresas, estan comprometidos y registrados</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ComoFunciona;