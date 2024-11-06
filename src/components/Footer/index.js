import React from 'react';
import logoblanco from '../../jobuesb.png';

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-2">
              <div className="footer-rows-container">
               
                <div className="footer-rows-left">
                 
                  <div className="footer-row">
                    <div className="footer-row-inner footer-logo">
                      <img src={logoblanco} alt="JobUES" title="JobUES" style={{width: '150px'}} />
                    </div>
                  </div>
                </div>
                

                
              </div>
            </div>
          </div>
        </div>
      </div>
  

      <div className="footer-bottom-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              © 2021 <strong>JobUES</strong>. Todo Los Derechos Reservados.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;