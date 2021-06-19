import React from 'react';
import { Link } from "react-router-dom";
import ComoFunciona from './Banners/ComoFunciona';

const Logout = (props) => {
  return (
    <div style={{marginBottom: '50px'}}>
      <div className="container" style={{marginTop: '90px'}}>
        <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <div className="login-register-page" style={{marginBottom: '90px'}}>
              <div className="welcome-text">
                <h3>Gracias Por Visitarnos!</h3>
                <h4 style={{paddingTop: '10px'}}>BOLSA DE TRABAJO | JobUES</h4>
                <p>Tu lugar Ideal</p>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                  <Link to="/login" className="button ripple-effect margin-top-30" style={{width: '100%',marginRight: '10px'}}>INGRESAR <i className="icon-material-outline-arrow-right-alt"></i></Link>
                  <Link to="/registro" className="button ripple-effect margin-top-30 green" style={{width: '100%'}}>REGISTRARSE <i className="icon-material-outline-arrow-right-alt"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ComoFunciona />
      </div>
    </div>
  );
}
   
export default Logout;