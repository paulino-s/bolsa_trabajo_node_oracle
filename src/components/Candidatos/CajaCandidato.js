import React from 'react';
import { Link } from "react-router-dom";

const CajaCandidato = (props) => {
  return(
    <Link
        id={props.id}
        to={{
          pathname: `/candidato/${props.id}`
        }}
        className="job-listing"
        style={{width: '100%'}}
      >
    <div className="freelancer" style={{display: (props.visible) ? 'flex':'none'}}>
      <div className="freelancer-overview">
        <div className="freelancer-overview-inner">
          <span className="bookmark-icon"></span>
          <div className="freelancer-avatar">
            <div className="verified-badge"></div>
            <Link to="single-freelancer-profile.html"><img src={props.avatar} alt="" /></Link>
          </div>
        </div>
        <div className="freelancer-name">
          <h4>
            <Link to={{pathname: `/candidato/${props.id}`}}>{props.nombre}, {props.apellidoPaterno} {props.apellidoMaterno}<img className="flag" src="images/flags/gb.svg" alt="" title="United Kingdom" data-tippy-placement="top" /></Link>
          </h4>
          <span>{props.titulo}</span>
          <div className="freelancer-rating">
            <div className="star-rating" data-rating="4.9"></div>
          </div>
        </div>
      </div>
      <div className="freelancer-details" style={{display: 'flex',flexDirection: 'column',}}>
        <div className="freelancer-details-list">
          <ul style={{display: 'flex',flexDirection: 'column',width: '100%'}}>
            <li><i className="icon-material-outline-location-on"></i> Ubicación <strong>{props.ciudad}</strong></li>
            <li><i className="icon-material-outline-location-on"></i> Sueldo <strong>${props.sueldoMin} MX - ${props.sueldoMax} MX</strong></li>
            <li><i className="icon-material-outline-location-on"></i> Estudios <strong>{props.estudios}</strong></li>
          </ul>
        </div>
        <Link to={{pathname: `/candidato/${props.id}`}} className="button button-sliding-icon ripple-effect">Ver Candidato <i className="icon-material-outline-arrow-right-alt"></i></Link>
      </div>
    </div>
    </Link>
  );
}

export default CajaCandidato;