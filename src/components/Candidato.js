import React from "react";
import { Link } from "react-router-dom";

const Empleos = (props) => {
  var id = props.match.params.id;

  console.log(id);
  console.log(props.candidatos);

  var marvelHeroes = props.candidatos.filter((candidato) => {
    console.log("filter");
    console.log(candidato.id);
    console.log(id);
    return candidato.id == id;
  });

  console.log(marvelHeroes);

  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div>
      {marvelHeroes.map((Heroe) => (
        <div key={Heroe.id}>
          <div
            className="single-page-header freelancer-header"
            data-background-image="images/single-freelancer.jpg"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="single-page-header-inner">
                    <div className="left-side">
                      <div className="header-image freelancer-avatar">
                        <img src={Heroe.avatar} alt="" />
                      </div>
                      <div className="header-details">
                        <h3>
                          {Heroe.nombre} {Heroe.apellidos}
                          <span>{Heroe.titulo}</span>
                        </h3>
                        <ul>
                          <li>
                            <div
                              className="star-rating"
                              data-rating="5.0"
                            ></div>
                          </li>
                          <li>
                            <img
                              className="flag"
                              src="images/flags/de.svg"
                              alt=""
                            />{" "}
                            {Heroe.ciudad}
                          </li>
                          <li>
                            <div className="verified-badge-with-title">
                              Verificado por JobUES
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 content-right-offset">
                <div className="single-page-section">
                  <h3 className="margin-bottom-25">Resumen profesional</h3>
                  {/*  <p style={{ textAlign: "justify" }}>{Heroe.descripcion}</p> */}
                </div>

                <div className="boxed-list margin-bottom-60">
                  <div className="boxed-list-headline">
                    <h3>
                      <i className="icon-material-outline-thumb-up"></i>{" "}
                      Experiencia Profesional
                    </h3>
                  </div>
                </div>
                <div className="boxed-list margin-bottom-60">
                  <div className="boxed-list-headline">
                    <h3>
                      <i className="icon-material-outline-business"></i>{" "}
                      Historial Laboral
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4">
                <div className="sidebar-container">
                  <div className="profile-overview">
                    <div className="overview-item">
                      <span>Sueldo deseado:</span>
                      <strong>${Heroe.sueldoMax} DLL</strong>
                    </div>
                    <div className="overview-item">
                      <span>Título:</span>
                      <strong>{Heroe.titulo}</strong>
                    </div>
                  </div>
                  <div className="profile-overview">
                    <div className="overview-item">
                      <span>Jornada:</span>
                      <strong>{Heroe.jornada}</strong>
                    </div>
                  </div>
                  <div className="profile-overview">
                    <div className="overview-item">
                      <span>Residencia:</span>
                      <strong>{Heroe.ciudad}</strong>
                    </div>
                  </div>

                  <div className="sidebar-widget">
                    <h3>CV / Documentos</h3>
                    <div className="attachments-container">
                      <a href="/" className="attachment-box ripple-effect">
                        <span>Curriculum Vitae</span>
                        <i>PDF</i>
                      </a>
                      <a href="/" className="attachment-box ripple-effect">
                        <span>Contrato</span>
                        <i>DOCX</i>
                      </a>
                    </div>
                  </div>

                  <div className="sidebar-widget">
                    <h3>Contactar</h3>
                    <div className="col-xl-12">
                      <div className="submit-field">
                        <h5>Nombre:</h5>
                        <input type="text" className="with-border" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="submit-field">
                        <h5>Teléfono:</h5>
                        <input type="text" className="with-border" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="submit-field">
                        <h5>Correo Electrónico:</h5>
                        <input type="text" className="with-border" />
                      </div>
                    </div>
                    <Link
                      to=""
                      className="apply-now-button popup-with-zoom-anim margin-bottom-10"
                    >
                      Contactar con candidato{" "}
                      <i className="icon-material-outline-arrow-right-alt"></i>
                    </Link>
                  </div>

                  <div className="sidebar-widget">
                    <h3>Compartir Candidato</h3>
                    <button className="bookmark-button margin-bottom-25">
                      <span className="bookmark-icon"></span>
                      <span className="bookmark-text">
                        Enviar datos de candidato
                      </span>
                      <span className="bookmarked-text">Datos enviados</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Empleos;
