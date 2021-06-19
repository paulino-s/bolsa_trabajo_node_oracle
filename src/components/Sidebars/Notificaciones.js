import React from 'react';

const Notificaciones = (props) => {
  return (
    <div className="notify-box margin-top-15">
  
      <div className="switch-container" style={{marginTop: '13px'}}>
        <label className="switch">
          <input type="checkbox" onChange={props.handleAlertas} value="alerta" />
            <span className="switch-button"></span>
            <span className="switch-text">Recibir alertas de correo para esta búsqueda</span>
        </label>
      </div>

  
      <div className="sort-by">
        <select onChange={props.filtroTipo} style={{marginBottom: "0px",paddingBottom: '0px', marginTop: '10px'}}>
          <option value="Relevantes">Relevantes</option>
          <option value="Nuevos">Nuevos</option>
          <option value="Viejos">Viejos</option>
          <option value="Aleatorios">Aleatorios</option>
        </select>
      </div>
  
    </div>
  );
}

export default Notificaciones;