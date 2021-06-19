import React from "react";
import { Link } from "react-router-dom";
import logo from "../../jobues2.png";

const Header = (props) => {
  return (
    <header id="header-container" className="fullwidth">
      <div id="header">
        {props.registrado ? (
          <div className="container">
            <div className="left-side">
              <div id="logo" style={{ width: "100px" }}>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <nav id="navigation">
                <ul>
                  <li>
                    <Link to="/empleos">OFERTAS DE EMPLEO</Link>
                    <ul className="dropdown-nav">
                      <li>
                        <Link to="/empleos">VER OFERTAS</Link>
                      </li>
                      <li>
                        <Link to="/publicar-candidato">
                          PUBLICAR CURRICULUM
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/candidatos">CANDIDATOS</Link>
                    <ul className="dropdown-nav">
                      <li>
                        <Link to="/candidatos">VER CANDIDATOS</Link>
                      </li>
                      <li>
                        <Link to="/publicar-vacante">
                          PUBLICAR OFERTA DE EMPLEO
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="clearfix"></div>
            </div>
            <div className="right-side">
              <div className="header-widget">
                <div
                  className={`header-notifications user-menu ${
                    props.headerNotificationsIsActive ? "active" : "inactive"
                  }`}
                >
                  <div className="header-notifications-trigger">
                    <div
                      className="user-avatar status-online"
                      onClick={props.headerNotifications}
                    >
                      <img
                        src="https://image.flaticon.com/icons/png/512/64/64572.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="header-notifications-dropdown">
                    <div className="user-status">
                      <div className="user-details">
                        <div
                          className="user-avatar status-online"
                          style={{ height: "19px" }}
                        >
                          <img src="images/user-avatar-small-01.jpg" alt="" />
                        </div>
                        <div className="user-name">
                          {props.registrado ? props.nombre : props.email}
                          {props.email}
                        </div>
                      </div>
                    </div>
                    <ul className="user-menu-small-nav">
                      <li>
                        <Link to="/dashboard">
                          <i className="icon-material-outline-dashboard"></i>{" "}
                          Panel de control
                        </Link>
                      </li>
                      <li>
                        <Link to="/logout" onClick={props.signOut}>
                          <i className="icon-material-outline-power-settings-new"></i>{" "}
                          Salir
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="left-side">
              <div id="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <nav id="navigation">
                <ul>
                  <li>
                    <Link to="/empleos">VACANTES</Link>
                  </li>
                  <li>
                    <Link to="/contacto">CONTACTO</Link>
                  </li>
                  <li>
                    <Link to="/quienes-somos">QUIENES SOMOS</Link>
                  </li>
                </ul>
              </nav>
              <div className="clearfix"></div>
            </div>
            <div className="right-side">
              <nav>
                <ul className="user-menu-small-nav">
                  <li>
                    <Link to="/">
                      <i className="icon-line-awesome-sign-in"></i> LOGIN
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
