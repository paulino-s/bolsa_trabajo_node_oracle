import React from 'react';
import { Link } from "react-router-dom";

const DashboardSidebarEmpresa = (props) => {

  return(
    <div className="dashboard-sidebar">
        <div className="dashboard-sidebar-inner" data-simplebar>
            <div className="dashboard-nav-container">
                <Link to="/" className="dashboard-responsive-nav-trigger">
                    <span className="hamburger hamburger--collapse" >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </span>
                    <span className="trigger-title">Navegación</span>
                </Link>
                <div className="dashboard-nav">
                    <div className="dashboard-nav-inner">
                        <ul>
                            <li className="active" onClick={props.sayHello}>
                              <Link to="/dashboard">
                                <i className="icon-material-outline-dashboard"></i> 
                                Panel de Control
                              </Link>
                            </li>
                        </ul>
                        <ul data-submenu-title="Administrar Vacantes">
                          <li>
                            <Link to="/">
                              <i className="icon-material-outline-business-center"></i> 
                              Vacantes publicadas
                            </Link>
                            <ul>
                              <li>
                                <Link to="/publicar-vacante">
                                  Publicar Vacante 
                                  <span className="nav-tag">3</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/administrar-vacantes">
                                  Aministrar Vacantes 
                                  <span className="nav-tag">3</span>
                                </Link>
                              </li>
                            </ul>	
                          </li>
                          
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardSidebarEmpresa;