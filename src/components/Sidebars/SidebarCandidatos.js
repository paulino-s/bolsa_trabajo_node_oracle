import React from 'react';

const SidebarCandidatos = (props) => {
  return(
    <div className="col-xl-3 col-lg-4">
      <div className="sidebar-container">

			<div className="sidebar-widget">
						<h3>Ubicación:</h3>
						<select name="ciudad" data-size="7" title="Select Job Type" onChange={props.filtroCiudad}>
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

				<div className="sidebar-widget">
					<h3>Profesión/Especialidad:</h3>
					<select name="estudios" data-size="7" title="Todas" onChange={props.filtroEstudios} >
						<option value="">Seleccionar Profesión</option>
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
							<label className="switch"><input type="checkbox"/><span className="switch-button"></span> Prácticas</label>
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
						<option value="5000">$1,000 - $5,000 MX</option>
						<option value="10000">$5,000 - $10,000 MX</option>
						<option value="15000">$10,000 - $15,000 MX</option>
						<option value="20000">$15,000 - $20,000 MX</option>
						<option value="30000">$25,000 - $30,000 MX</option>
						<option value="35000">$30,000 - $35,000 MX</option>
						<option value="40000">$35,000 - $40,000 MX</option>
					</select>
				</div>

      </div>
    </div>
  );
}

export default SidebarCandidatos;