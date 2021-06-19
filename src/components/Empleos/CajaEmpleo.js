import React from 'react';
import { Link } from "react-router-dom";

const CajaEmpleo = (props) => {
  return(
    <div>
      <Link
        id={props.id}
        logo={props.logo}
        to={{
          pathname: `/empleo/${props.id}`
        }}
        className="job-listing"
      >
        <div className="job-listing-details">
          <div className="job-listing-company-logo">
            
            <img src={props.logo} alt={props.empresa} />
          </div>
          <div className="job-listing-description">
            <h4 className="job-listing-company">{props.empresa}</h4>
            <h3 className="job-listing-title">{props.vacante}</h3>
            <p className="job-listing-text">{props.descripcion}</p>
          </div>
          <span className="bookmark-icon"></span>
        </div>
        <div className="job-listing-footer">
          <ul>
            <li><i className="icon-material-outline-location-on"></i> {props.ciudad}</li>
            <li><i className="icon-material-outline-business-center"></i> {props.tipoVacante}</li>
            <li><i className="icon-material-outline-account-balance-wallet"></i> {props.sueldoMax}</li>
            <li><i className="icon-material-outline-access-time"></i> {props.tiempo}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
 
export default CajaEmpleo;