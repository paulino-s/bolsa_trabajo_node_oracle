import React from 'react';

const IntroBanner = () => {
  return (
    <div className="intro-banner" data-background-image="images/home-background.jpg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-headline">
              <h3>
                <strong>Bolsa de Trabajo Exclusiva Estudiantes Universitarios</strong>
                <br/>
                <span>Si eres parte de la familia UES <strong className="color">JobUES</strong> Tu primera Opcion.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroBanner;