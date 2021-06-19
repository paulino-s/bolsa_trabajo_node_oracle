import React from 'react';
import { Link } from "react-router-dom";
import DashboardSidebarEmpresa from './Dashboard/DashboardSidebarEmpresa';

const PublicarEmpleo = (props) => {

    function sayHello() {
        props.parentCallback("Hey Popsie, How’s it going?");
    }

    return(
        <div className="dashboard-container" style={{marginBottom: '50px'}}>
            
            <DashboardSidebarEmpresa sayHello={sayHello}/>

            <div className="dashboard-content-container" data-simplebar>
                <div className="dashboard-content-inner" style={{marginBottom: '50px'}}>
                    <div className="dashboard-headline">
                        <h3>Nueva Vacante</h3>
                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><Link to="/dashboard">Home</Link></li>
                                <li><Link to="/dashboard">Panel de control</Link></li>
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
                                                <input name="vacante" type="text" className="with-border" required />
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Tipo de vacante:</h5>
                                                <select name="tipoVacante" data-size="7" title="Select Job Type" required>
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
                                                <h5>Categoría:</h5>
                                                <select name="categoria" data-size="7" title="Categoría" required>
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
                                                <h5>Ubicación:</h5>
                                                <div className="input-with-icon">
                                                    <div id="autocomplete-container">
                                                        <input name="ubicacion" id="autocomplete-input" className="with-border" type="text" placeholder="Dirección" required />
                                                    </div>
                                                    <i className="icon-material-outline-location-on"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Ciudad:</h5>
                                                <select name="ciudad" data-size="7" title="Select Job Type" required>
                                                    <option value="Aguascalientes">Aguascalientes</option>
                                                    <option value="Baja California">Baja California</option>
                                                    <option value="Baja California Sur">Baja California Sur</option>
                                                    <option value="Campeche">Campeche</option>
                                                    <option value="Coahuila">Coahuila</option>
                                                    <option value="Colima">Colima</option>
                                                    <option value="Chiapas">Chiapas</option>
                                                    <option value="Chihuahua">Chihuahua</option>
                                                    <option value="Ciudad de México">Ciudad de México</option>
                                                    <option value="Durango">Durango</option>
                                                    <option value="Estado de México">Estado de México</option>
                                                    <option value="Guanajuato">Guanajuato</option>
                                                    <option value="Guerrero">Guerrero</option>
                                                    <option value="Hidalgo">Hidalgo</option>
                                                    <option value="Jalisco">Jalisco</option>
                                                    <option value="Michoacán">Michoacán</option>
                                                    <option value="Morelos">Morelos</option>
                                                    <option value="Nayarit">Nayarit</option>
                                                    <option value="Nuevo León">Nuevo León</option>
                                                    <option value="Oaxaca">Oaxaca</option>
                                                    <option value="Puebla">Puebla</option>
                                                    <option value="Querétaro">Querétaro</option>
                                                    <option value="Quintana Roo">Quintana Roo</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Sueldo:</h5>
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <div className="input-with-icon">
                                                            <input 
                                                            name="sueldoMin"
                                                            className="with-border" type="text" placeholder="Min" required/>
                                                            <i className="currency">MX</i>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <div className="input-with-icon">
                                                            <input 
                                                            name="sueldoMax"
                                                            className="with-border" type="text" placeholder="Max" required/>
                                                            <i className="currency">MX</i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Palabras clave <span>(opcional)</span>  <i className="help-icon" data-tippy-placement="right" title="Máximo de 10 tags"></i></h5>
                                                <div className="keywords-container">
                                                    <div className="keyword-input-container">
                                                        <input type="text" className="keyword-input with-border" placeholder="e.g. Nombre Vacante, responsibilites"/>
                                                        <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
                                                    </div>
                                                    <div className="keywords-list"></div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Nivel de estudios mínimo:</h5>
                                                <select name="estudio" data-size="7" title="Select Job Type" required>
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
                                                <h5>Nombre de la Empresa:</h5>
                                                <input name="empresa" type="text" className="with-border" required/>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Nombre de Contacto:</h5>
                                                <input name="contacto" type="text" className="with-border" required/>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Teléfono:</h5>
                                                <input name="telefono" type="text" className="with-border" required/>
                                            </div>
                                        </div>

                                        <div className="col-xl-4">
                                            <div className="submit-field">
                                                <h5>Correo Electrónico:</h5>
                                                <input name="email" type="text" className="with-border" required/>
                                            </div>
                                        </div>

                                        <div className="col-xl-12">
                                            <div className="submit-field">
                                                <h5>Descripción:</h5>
                                                <textarea name="descripcion" cols="30" rows="5" className="with-border" required></textarea>
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
                                            <button type="submit" className="button ripple-effect big margin-top-10 margin-bottom-10">
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
    )
}

export default PublicarEmpleo;