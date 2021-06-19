import React from 'react';
import { Link } from "react-router-dom";
import DashboardSidebarEmpresa from './Dashboard/DashboardSidebarEmpresa';

const PublicarCandidato = (props) => {

    function sayHello() {
        props.parentCallback("Hey Popsie, How’s it going?");
    }

    return(
        <div className="dashboard-container" style={{marginBottom: '100px'}}>
            
            <DashboardSidebarEmpresa sayHello={sayHello}/>

            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner" style={{marginBottom: '50px'}}>
                    <div className="dashboard-headline">
                        <h3>Nuevo Perfil</h3>
                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><Link to="/dashboard">Inicio</Link></li>
                                <li><Link to="/dashboard">Panel de control</Link></li>
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
                                                <input name="nombre" type="text" className="with-border" required />
                                                <input type="hidden" name="visible" value="true" />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Apellido Paterno:</h5>
                                                <input name="apellidoPaterno" type="text" className="with-border" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Apellido Materno:</h5>
                                                <input name="apellidoMaterno" type="text" className="with-border" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Fecha de Nacimiento:</h5>
                                                <input name="fechaDeNacimiento" type="date" className="with-border" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Último nivel de estudios:</h5>
                                                <select name="estudios" data-size="7" title="Select Job Type" required>
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
                                                <h5>Título Profesional:</h5>
                                                <select name="titulo" data-size="7" title="Categoría" required>
                                                <option value="Ingeniero Civil">Ingeniero Civil</option>
                                                <option value="Ingeniero Estructural">Ingeniero Estructural</option>
                                                <option value="Laboratorista de concreto">Laboratorista de concreto</option>
                                                <option value="Arquitecto">Arquitecto</option>
                                                <option value="Dibujante">Dibujante</option>
                                                <option value="Técnico de Mantenimiento">Técnico de Mantenimiento</option>
                                                <option value="Supervisor de Obra">Supervisor de Obra</option>
                                                <option value="Operador de Maquinaria">Operador de Maquinaria</option>
                                                <option value="Chofer de revolvedora">Chofer de revolvedora</option>
                                            </select>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Tipo de jornada:</h5>
                                                <select name="jornada" data-size="7" title="Select Job Type" required>
                                                    <option value="Por Temporada">Por Temporada</option>
                                                    <option value="Tiempo Completo">Tiempo Completo</option>
                                                    <option value="Medio Tiempo">Medio Tiempo</option>
                                                    <option value="Prácticas Profesionales">Prácticas Profesionales</option>
                                                    <option value="Temporal">Temporal</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Dirección:</h5>
                                                <div className="input-with-icon">
                                                    <div id="autocomplete-container">
                                                        <input name="direccion" id="autocomplete-input" className="with-border" type="text" placeholder="Dirección" required />
                                                    </div>
                                                    <i className="icon-material-outline-location-on"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Ciudad:</h5>
                                                <select name="ciudad" data-size="7" title="Select Job Type" required>
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
                                                <h5>Teléfono:</h5>
                                                <input name="telefono" type="text" className="with-border" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Correo Electrónico:</h5>
                                                <input name="email" type="text" className="with-border" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Sueldo deseado:</h5>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="input-with-icon">
                                                            <input name="sueldoMin" className="with-border" type="text" placeholder="Min" required/>
                                                            <i className="currency">DL</i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="input-with-icon">
                                                            <input name="sueldoMax" className="with-border" type="text" placeholder="Max" required/>
                                                            <i className="currency">DL</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="submit-field">
                                                <h5>Descripción de habilidades y/o experiencia:</h5>
                                                <textarea name="descripcion" cols="30" rows="5" className="with-border" required></textarea>
                                                <div className="uploadButton margin-top-30">
                                                    <input className="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple/>
                                                    <label className="uploadButton-button ripple-effect" htmlFor="upload">Subir Archivo</label>
                                                    <span className="uploadButton-file-name">Imágenes o documentos que describan la vacante.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <button type="submit" className="button ripple-effect big margin-top-10 margin-bottom-10">
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
    )
}

export default PublicarCandidato;