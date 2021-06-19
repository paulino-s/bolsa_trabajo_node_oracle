import React from 'react';
import { Link } from "react-router-dom";
import ComoFunciona from '../components/Banners/ComoFunciona';

const Login = (props) => {
  console.log("estos son los props: " + props);
  return (
    <div>
      <div className="container" style={{marginTop: '90px'}}>
        <div className="row">
          <div className="col-xl-6 offset-xl-3">
            <div className="login-register-page" style={{marginBottom: '90px'}}>

              <div className="welcome-text" style={{display: props.registrado ? 'none' : 'block'}}>
                <h3>BIENVENIDO</h3>
                <h4 style={{paddingTop: '10px'}}>BOLSA DE TRABAJO DE LA INDUSTRIA DE LA CONSTRUCCIÓN</h4>
                <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
                <span>No tiene una cuenta?<br/>
                  <Link to="/registro" className="button button-sliding-icon ripple-effect margin-top-10"> REGÍSTRESE AQUÍ! <i className="icon-material-outline-arrow-right-alt"></i></Link>
                </span>
              </div>

              <div className="welcome-text" style={{display: props.nota ? 'block' : 'none'}}>
                <div className="notification error closeable">
                  <p>Sus datos de usuario no son correctos,<br/><b>Por Favor vuelva a intentarlo... Gracias!</b></p>
                  <Link className="close"></Link>
                </div>
              </div>

              <div className="welcome-text" style={{display: props.registrado ? 'block' : 'none'}}>
                <h3>Bienvenido!</h3>
                <h4 style={{padding: '10px'}}>{props.email}</h4>
                <h4 style={{paddingTop: '10px'}}>BOLSA DE TRABAJO DE LA INDUSTRIA DE LA CONSTRUCCIÓN</h4>
                <div style={{display: 'flex',flexDirection: 'row'}}>
                  <Link to="/candidatos" className="button ripple-effect margin-top-30" style={{width: '100%',marginRight: '10px'}}>CANDIDATOS <i className="icon-material-outline-arrow-right-alt"></i></Link>

                  <Link to="/empleos" className="button ripple-effect margin-top-30 green" style={{width: '100%'}}>OFERTAS DE EMPLEO <i className="icon-material-outline-arrow-right-alt"></i></Link>
                </div>
              </div>

              <form onSubmit={props.handleSignIn} style={{display: props.registrado ? 'none' : 'block'}}>
                <div className="input-with-icon-left">
                  <i className="icon-material-baseline-mail-outline"></i>
                  <input type="email" name="emailaddress" className="input-text with-border" id="emailaddress" placeholder="Correo Electrónico" required/>
                </div>

                <div className="input-with-icon-left">
                  <i className="icon-material-outline-lock"></i>
                  <input type="password" name="password" className="input-text with-border" id="password" placeholder="Contraseña" required/>
                </div>

                <button type="submit" className="button full-width button-sliding-icon ripple-effect margin-top-10" style={{backgroundColor:'#2A42E8', width: '100%'}}>INGRESAR <i className="icon-material-outline-arrow-right-alt"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {
        (props.registrado)? '' : <ComoFunciona/>
      }
      
    </div>
  );
}
 
export default Login;