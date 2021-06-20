import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebarEmpresa from "./Dashboard/DashboardSidebarEmpresa";

const PublicarEmpleo = (props) => {
  function sayHello() {
    props.parentCallback("Hey Popsie, How’s it going?");
  }

  return (
    <div className="dashboard-container" style={{ marginBottom: "50px" }}>
      <DashboardSidebarEmpresa sayHello={sayHello} />

      <div className="dashboard-content-container" data-simplebar>
        <div
          className="dashboard-content-inner"
          style={{ marginBottom: "50px" }}
        >
          <div className="dashboard-headline">
            <h3>Publicar un Empleo</h3>
            <nav id="breadcrumbs" className="dark">
              <ul>
                <li>
                  <Link to="/dashboard">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard">Panel de control</Link>
                </li>
                <li>Publicar vacante</li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <form onSubmit={props.handlePublicarEmpleo}>
              <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">
                  <div className="headline">
                    <h3>
                      <i className="icon-feather-folder-plus"></i>
                      Publicar vacante
                    </h3>
                  </div>
                  <div className="content with-padding padding-bottom-10">
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Nombre de la Vacante:</h5>
                          <input
                            name="vacante"
                            type="text"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Tipo de vacante:</h5>
                          <select
                            name="tipoVacante"
                            data-size="7"
                            title="Select Job Type"
                            required
                          >
                            <option value="Por Temporada">Por Temporada</option>
                            <option value="Tiempo Completo">
                              Tiempo Completo
                            </option>
                            <option value="Medio Tiempo">Medio Tiempo</option>
                            <option value="Prácticas Profesionales">
                              Prácticas Profesionales
                            </option>
                            <option value="Temporal">Temporal</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Rubro Empresarial:</h5>
                                                <select name="rubro" data-size="7" title="Select Job Type" required>
                                                    <option value="com">Comercio</option>
                                                    <option value="ali">Alimenticio</option>
                                                    <option value="srv">Servicios Varios</option>
                                                    <option value="med">Medicina</option>
                                                    <option value="tra">Transporte</option>
                                                    <option value="comu">Comunicaiones</option>
                                                    <option value="edu">Educacion</option>
                                                    <option value="tec">Tecnologia</option>
                                                    <option value="otr">Otro</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Habilidades:</h5>
                                                <input name="Habilidades" type="text" className="with-border" required />
                                            </div>
                                        </div>
                                      
                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Perfil Academico:</h5>
                                                <select name="perfilacademico" data-size="7" title="Select Job Type" required>
                                                    <option value="Técnico">Técnico</option>
                                                    <option value="Licenciatura">Licenciatura</option>
                                                    <option value="Maestría">Maestría</option>
                                                    <option value="Doctorado">Doctorado</option>
                                                    <option value="Otro">Otro</option>
                                                </select>
                                            </div>
                                        </div>            

                     

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Lugar de Trabajo:</h5>
                          <select
                            name="ciudad"
                            data-size="7"
                            title="Select Job Type"
                            required
                          >
                            <option value="AH">Ahuachapán</option>
                            <option value="SA">Santa Ana</option>
                            <option value="SO">Sonsonate</option>
                            <option value="CH">Chalatenango</option>
                            <option value="LL">La Libertad</option>
                            <option value="SS">San Salvador</option>
                            <option value="CU">Cuscatlan</option>
                            <option value="PA">La Paz</option>
                            <option value="CA">Cabañas</option>
                            <option value="SV">San Vicente</option>
                            <option value="US">Usulutan</option>
                            <option value="SM">San Miguel</option>
                            <option value="NY">Morazan</option>
                            <option value="UN">La Union</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Dirección Empresa:</h5>
                                                <div className="input-with-icon">
                                                    <div id="autocomplete-container">
                                                        <input name="direccion_empresa" id="autocomplete-input" className="with-border" type="text" placeholder="Dirección" required />
                                                    </div>
                                                    <i className="icon-material-outline-location-on"></i>
                                                </div>
                                            </div>
                                        </div>
                      <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Experiencia:</h5>
                                                <input name="experiencia_laboral" type="number" className="with-border" required/>
                                            </div>
                                        </div>
                      <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Salario Ofertado:</h5>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="input-with-icon">
                                                            <input name="salarioMin" className="with-border" type="text" placeholder="Min" required/>
                                                            <i className="currency">BTC</i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="input-with-icon">
                                                            <input name="salarioMax" className="with-border" type="text" placeholder="Max" required/>
                                                            <i className="currency">BTC</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                 

                                    
                      <div className="col-xl-12">
                        <div className="submit-field">
                          <h5>Descripción:</h5>
                          <textarea
                            name="descripcion"
                            cols="30"
                            rows="5"
                            className="with-border"
                            required
                          ></textarea>
                          {/*
                                                <div className="uploadButton margin-top-30">
                                                    <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple/>
                                                    <label className="uploadButton-button ripple-effect" htmlFor="upload">Subir Archivo</label>
                                                    <span className="uploadButton-file-name">Imágenes o documentos que describan la vacante.</span>
                                                </div>
                                                */}
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <button
                          type="submit"
                          className="button ripple-effect big margin-top-10 margin-bottom-10"
                        >
                          <i className="icon-feather-plus"></i> Publicar Vacante
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicarEmpleo;
