import React from 'react';

const SidebarCandidatos = (props) => {
  return(
    <div className="col-xl-3 col-lg-4">
      <div className="sidebar-container">

			<div className="sidebar-widget">
						<h3>Ubicación:</h3>
						<select name="ciudad" data-size="7" title="Select Job Type" onChange={props.filtroCiudad}>
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

				<div className="sidebar-widget">
					<h3>Profesión/Especialidad:</h3>
					<select name="estudios" data-size="7" title="Todas" onChange={props.filtroEstudios} >
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

				<div className="sidebar-widget">
					<h3>Tipo:</h3>
					<div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Por Temporada</label>
						</div>
					</div>
          <div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Tiempo Completo</label>
						</div>
					</div>
          <div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Medio Tiempo</label>
						</div>
					</div>
          
          <div className="switches-list">
						<div className="switch-container">
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Temporal</label>
						</div>
					</div>
				</div>

        <div className="sidebar-widget">
					<h3>Palabras clave:</h3>
					<div className="keywords-container">
						<div className="keyword-input-container">
							<input type="text" className="keyword-input" placeholder="e.g. Ingeniero Civil"/>
							<button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add"></i></button>
						</div>
						<div className="keywords-list"></div>
						<div className="clearfix"></div>
					</div>
				</div>

        <div className="sidebar-widget">
					<h3>Sueldo:</h3>
					<select data-size="7" title="Todas" >
					<option value="500">$500 - $1000</option>
						<option value="5000">$1,000 - $5,000</option>
						<option value="10000">$5,000 - $10,000</option>
						<option value="15000">$10,000 - $15,000</option>
						<option value="20000">$15,000 - $20,000</option>
						<option value="30000">$25,000 - $30,000</option>
						<option value="35000">$30,000 - $35,000</option>
						
					</select>
				</div>

      </div>
    </div>
  );
}

export default SidebarCandidatos;