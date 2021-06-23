import React from "react";
import { Link } from "react-router-dom";
import DashboardSidebarEmpresa from "./Dashboard/DashboardSidebarEmpresa";

const PublicarCandidato = (props) => {
  function sayHello() {
    props.parentCallback("Hey Popsie, How’s it going?");
  }

  return (
    <div className="dashboard-container" style={{ marginBottom: "100px" }}>
      <DashboardSidebarEmpresa sayHello={sayHello} />

      <div className="dashboard-content-container" data-simplebar>
        <div
          className="dashboard-content-inner"
          style={{ marginBottom: "50px" }}
        >
          <div className="dashboard-headline">
            <h3>Nuevo Perfil</h3>
            <nav id="breadcrumbs" className="dark">
              <ul>
                <li>
                  <Link to="/dashboard">Inicio</Link>
                </li>
                <li>
                  <Link to="/dashboard">Panel de control</Link>
                </li>
                <li>Publicar perfil de candidato</li>
              </ul>
            </nav>
          </div>
          <div className="row">
            <form onSubmit={props.handlePublicarCandidato}>
              <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">
                  <div className="headline">
                    <h3>
                      <i className="icon-feather-folder-plus"></i>
                      Publicar perfil de candidato
                    </h3>
                  </div>
                  <div className="content with-padding padding-bottom-10">
                    <div className="row">
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Nombre(s):</h5>
                          <input
                            name="nombre"
                            type="text"
                            className="with-border"
                            required
                          />
                          <input type="hidden" name="visible" value="true" />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Apellido (s):</h5>
                          <input
                            name="apellidoPaterno"
                            type="text"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Carnet:</h5>
                          <input
                            name="id_estudiante"
                            type="text"

                          className="with-border"
                          minlength="7" maxlength="7" 
                            required
                          />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Sexo</h5>
                          <select
                            name="jornada"
                            data-size="7"
                            title="Select Genero"
                            required
                          >
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Fecha de Nacimiento:</h5>
                          <input
                            name="fechaDeNacimiento"
                            type="date"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Título Profesional:</h5>
                          <select
                            name="titulo"
                            data-size="7"
                            title="Categoría"
                            required
                          >
                            	<option value="">Seleccionar Profesión</option>
                            <option value="Ingeniero Civil">
                              Ingeniero Civil
                            </option>
                            <option value="Ingeniero informatico">
                              Ingeniero Informatico
                            </option>
                            <option value="Laboratorista de concreto">
                              Laboratorista 
                            </option>
                            <option value="Arquitecto">Arquitecto</option>
                            <option value="Economista">Economista</option>
                            <option value="Técnico de Mantenimiento">
                              Técnico de Mantenimiento
                            </option>
                            <option value="Ingeniero Industrial">
                              Ingeniero Industrial
                            </option>
                            <option value="Medico">
                              Medico
                            </option>
                            <option value="Licenciado en Derecho">
                              Licenciado en Derecho
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Tipo de jornada:</h5>
                          <select
                            name="jornada"
                            data-size="7"
                            title="Select Job Type"
                            required
                          >
                            <option value="Por Temporada">Por Temporada</option>
                            <option value="Tiempo Completo">
                              Tiempo Completo
                            </option>
                            <option value="Medio Tiempo">Medio Tiempo</option>

                            <option value="Temporal">Temporal</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Dirección:</h5>
                          <div className="input-with-icon">
                            <div id="autocomplete-container">
                              <input
                                name="direccion"
                                id="autocomplete-input"
                                className="with-border"
                                type="text"
                                placeholder="Dirección"
                                required
                              />
                            </div>
                            <i className="icon-material-outline-location-on"></i>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Ciudad:</h5>
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
                          <h5>Teléfono Fijo:</h5>
                          <input
                            name="telefonofijo"
                            type="text"
                            className="with-border"
                            alt="number" minlength="8" maxlength="8" 
                          />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Teléfono Personal:</h5>
                          <input
                            name="telefonopersonal"
                            type="text"
                            className="with-border"
                            alt="number" minlength="8" maxlength="8" required/>
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Correo Electrónico:</h5>
                          <input
                            name="email"
                            type="email"
                            className="with-border"
                            placeholder="Usar Mismo Email del Registro" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"required
                          />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>NIT:</h5>
                          <input
                            name="nit"
                            type="number"
                            className="with-border"
                            placeholder="Sin Guion"
                            min="14" max="14" required
                            
                          />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>NUP:</h5>
                          <input
                            name="nup"
                            type="number"
                            className="with-border"
                          />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Facebook:</h5>
                          <input
                            name="red_social"
                            type="text"
                            className="with-border"
                            placeholder="Usuario Facebook"
                          />
                        </div>
                      </div>

                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Sueldo deseado:</h5>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="input-with-icon">
                                <input
                                  name="sueldoMin"
                                  className="with-border"
                                  type="text"
                                  placeholder="Min"
                                  
                                />
                                <i className="currency">DL</i>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="input-with-icon">
                                <input
                                  name="sueldoMax"
                                  className="with-border"
                                  type="text"
                                  placeholder="Max"
                                  
                                />
                                <i className="currency">DL</i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-12">
                             
                              <p>Experiencia Laboral:</p>
                        
                            
                            </div>

                        
                    <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Cargo Desempeñado</h5>
                       <input
                            name="cargo"
                            type="text"
                            className="with-border"/>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Nombre Trabajo Anterior</h5>
                       <input name="trabajo_anterior" type="text"className="with-border"/>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Tiempo Laborando</h5>
                       <input name="tiempo_laborando" type="number"className="with-border" placeholder="Expresar Cantidad en Meses"/>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Nombre Empresa</h5>
                       <input name="nombre_empresa" type="text"className="with-border"/>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Telefono Empresa</h5>
                       <input name="telefono_empresa" type="number"className="with-border"/>
                        </div>
                    </div>

               <div className="col-xl-12">
                             
                     <p>Conocimientos Academicos:</p>
                       
                           
               </div>

               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Titulo del Diploma</h5>
                       <input name="titulo_diploma" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Nombre Diploma</h5>
                       <input name="nombre_diploma" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Fecha de Diploma Recibido:</h5>
                          <input
                            name="fecha_diploma"
                            type="date"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <div className="submit-field">
                         
                          <div className="uploadButton margin-top-30">
                            <input
                              className="uploadButton-input"
                              type="file"
                              accept="image/*, application/pdf"
                              id="upload"
                              multiple
                            />
                            <label
                              className="uploadButton-button ripple-effect"
                              htmlFor="upload"
                            >
                              Archivo del Diploma
                            </label>
                            <span className="uploadButton-file-name">
                              Subir en formato PDF del Diploma
                            </span>
                          </div>

                         
                        </div>
                      </div>
                      

                          <div className="col-xl-12">
                             
                             <p>Certificaciones:</p>
                               
                                   
                       </div>
                       <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Tipo de Certificado</h5>
                          <select
                            name="tipo_certificado"
                            data-size="7"
                            title="tipo_de_certificado"
                            required
                          >
                            <option value="tp1">Tipo 1</option>
                            <option value="tp2">Tipo 2</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Titulo del Certificado</h5>
                       <input name="titulo_certificado" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Institucion Que Otorga</h5>
                       <input name="titulo_diploma" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Fecha de Certificado Recibido:</h5>
                          <input
                            name="fecha_certificado"
                            type="date"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="submit-field">
                         
                          <div className="uploadButton margin-top-30">
                            <input
                              className="uploadButton-input"
                              type="file"
                              accept="image/*, application/pdf"
                              id="upload"
                              multiple
                            />
                            <label
                              className="uploadButton-button ripple-effect"
                              htmlFor="upload"
                            >
                              Archivo del Certificado
                            </label>
                            <span className="uploadButton-file-name">
                              Subir en formato PDF del certificado
                            </span>
                          </div>

                         
                        </div>
                      </div>
                      


                          <div className="col-xl-12">
                             
                             <p>Logros:</p>
                               
                                   
                       </div>
                       <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Titulo de Logro</h5>
                       <input name="titulo_logro" type="text"className="with-border"/>
                        </div>
                        </div>
                        <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Fecha de Logro Recibido:</h5>
                          <input
                            name="fecha_logro"
                            type="date"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="submit-field">
                          <h5>Comentarios del Logro:</h5>
                          <textarea
                            name="descripcion_logro"
                            cols="30"
                            rows="5"
                            className="with-border"
                            required
                          ></textarea>
                         
                        </div>
                      </div>

                      <div className="col-xl-12">
                             
                             <p>Recomendaciones Personales:</p>
                               
                                   
                       </div>
        
                       <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Categoria Nombre</h5>
                       <input name="categoria_nombre" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Apellidos</h5>
                       <input name="apellidos_recomenacions" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Correo Electrónico:</h5>
                          <input
                            name="email_recomendacion"
                            type="text"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                             
                             <p>Recomendaciones de Trabajo:</p>
                               
                                   
                       </div>
        
                       <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Nombre de la Empresa</h5>
                       <input name="nombre_empresar" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Sitio Web</h5>
                       <input name="sitioweb_empresar" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Telefono Empresa</h5>
                       <input name="telefono_empresar" type="number"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Correo Electrónico:</h5>
                          <input
                            name="email_empresar"
                            type="text"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-xl-12">
                             
                             <p>Libros:</p>
                               
                                   
                       </div>

                       <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Titulo del Libro</h5>
                       <input name="sitioweb_empresar" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Edicion del Libro</h5>
                       <input name="edicion_libro" type="number"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Nombre del Articulo</h5>
                       <input name="nombre_articulo" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Web Editorial</h5>
                       <input name="web_publicacion" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>ISBM</h5>
                       <input name="isbm" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Fecha de Publicacion:</h5>
                          <input
                            name="fecha_libro"
                            type="date"
                            className="with-border"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-xl-12">
                             
                             <p>Congresos:</p>
                               
                                   
                       </div>
                       <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Titulo Congresos</h5>
                       <input name="titulo_congreso" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Lugar del Congreso:</h5>
                          <div className="input-with-icon">
                            <div id="autocomplete-container">
                              <input
                                name="Lugar_congreso"
                                id="autocomplete-input"
                                className="with-border"
                                type="text"
                                placeholder="Lugar del congreso"
                                
                              />
                            </div>
                            <i className="icon-material-outline-location-on"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Fecha de Inicio del Congreso:</h5>
                          <input
                            name="fecha_congreso"
                            type="date"
                            className="with-border"
                            
                          />
                        </div>
                      </div>
                      <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Talleres</h5>
                       <input name="talleres" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Foros</h5>
                       <input name="foros" type="text"className="with-border"/>
                        </div>
               </div>
               <div className="col-xl-4">
                        <div className="submit-field">
                          <h5>Nombre del Encargado del Evento</h5>
                       <input name="encargado_evento" type="text"className="with-border"/>
                        </div>
               </div>



















                      <div className="col-xl-12">
                        <div className="submit-field">
                          <h5>Descripción de habilidades y/o experiencia:</h5>
                          <textarea
                            name="descripcion"
                            cols="30"
                            rows="5"
                            className="with-border"
                            required
                          ></textarea>
                          <div className="uploadButton margin-top-30">
                            <input
                              className="uploadButton-input"
                              type="file"
                              accept="image/*, application/pdf"
                              id="upload"
                              multiple
                            />
                            <label
                              className="uploadButton-button ripple-effect"
                              htmlFor="upload"
                            >
                              Subir Archivo
                            </label>
                            <span className="uploadButton-file-name">
                              Imágenes o documentos que describan la vacante.
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-xl-12">
                        <button
                          type="submit"
                          className="button ripple-effect big margin-top-10 margin-bottom-10"
                        >
                          <i className="icon-feather-plus"></i> Publicar Perfil
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

export default PublicarCandidato;
