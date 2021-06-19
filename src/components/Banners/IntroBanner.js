import React from 'react';

const IntroBanner = () => {
  return (
    <div className="intro-banner" data-background-image="images/home-background.jpg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-headline">
              <h3>
                <strong>Bolsa de trabajo especializada de la Construcción</strong>
                <br/>
                <span>Encuentra la vacante/candidato que estás buscando <strong className="color">IMCYC</strong> compartir el conocimiento.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroBanner;