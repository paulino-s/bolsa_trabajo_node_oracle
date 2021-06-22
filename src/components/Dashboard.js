import React from 'react';
import { Link } from "react-router-dom";
import DashboardSidebarEmpresa from './Dashboard/DashboardSidebarEmpresa';

const Dashboard = (props) => {

    function sayHello() {
        props.parentCallback("Hey Popsie, How’s it going?");
    }

    return(
        <div className="dashboard-container">
            
            <DashboardSidebarEmpresa sayHello={sayHello}/>

            <div className="dashboard-content-container" data-simplebar>
		        <div className="dashboard-content-inner" >
                    <div className="dashboard-headline">
                        <h3>Bienvenido</h3>
                        <h4>{props.email}</h4>
                        <span>Panel de control!</span>
                        <nav id="breadcrumbs" class="dark">
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li>Panel de control</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="fun-facts-container">
                        <div className="fun-fact" data-fun-fact-color="#36bd78">
                            <div className="fun-fact-text">
                                <span>Vistas de perfil</span>
                                <h4>22</h4>
                            </div>
                            <div className="fun-fact-icon"><i class="icon-material-outline-gavel"></i></div>
                        </div>
                        <div className="fun-fact" data-fun-fact-color="#b81b7f">
                            <div className="fun-fact-text">
                                <span>Aplicaciones</span>
                                <h4>4</h4>
                            </div>
                            <div className="fun-fact-icon"><i className="icon-material-outline-business-center"></i></div>
                        </div>
                        <div className="fun-fact" data-fun-fact-color="#efa80f">
                            <div className="fun-fact-text">
                                <span>Empresas Registradas</span>
                                <h4>2</h4>
                            </div>
                            <div className="fun-fact-icon"><i class="icon-material-outline-rate-review"></i></div>
                        </div>
                        <div className="fun-fact" data-fun-fact-color="#2a41e6">
                            <div className="fun-fact-text">
                                <span>Vistas por mes</span>
                                <h4>12</h4>
                            </div>
                            <div className="fun-fact-icon"><i class="icon-feather-trending-up"></i></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="dashboard-box main-box-in-row">
                                <div className="headline">
                                    <h3><i className="icon-feather-bar-chart-2"></i> Vistas de perfil por mes</h3>
                                    <div className="sort-by">
                                        <select className="selectpicker hide-tick">
                                            <option>Últimos 6 meses</option>
                                            <option>Este Año</option>
                                            <option>Este Mes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="chart">
                                        <canvas id="chart" width="100" height="45"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;