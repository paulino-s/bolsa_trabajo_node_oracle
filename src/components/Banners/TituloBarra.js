import React from 'react';
import { Link } from "react-router-dom";

const TituloBarra = (props) => {
  return (
    <div id="titlebar" className="gradient">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>{props.titulo}</h2>
            <nav id="breadcrumbs" className="dark">
              <ul>
                <li>
                  <Link to="/">INICIO</Link>
                </li>
                <li>{props.ruta}</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TituloBarra;