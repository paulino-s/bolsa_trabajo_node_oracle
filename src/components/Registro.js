import React, {Component} from 'react';
import { Link } from "react-router-dom";


class Registro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "registroUsuario",
      registrado: this.props.registrado,
      nombre: ""
    }
  }

  tipoRegistro = (event) => {
    this.setState({ title: event.target.value });
  };

  render(){
    return (
      <div>
        <div className="container" style={{marginTop: '90px'}}>
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="login-register-page" style={{marginBottom: '90px'}}>
  
                <div className="welcome-text">
                  <h3 style={{fontSize: '26px',display: this.props.registrado ? 'none' : 'block'}}>CREAR SU CUENTA</h3>
                  <div style={{display: this.props.registrado ? 'block' : 'none'}}>
                    <h3 style={{fontSize: '26px',display: this.props.registrado ? 'block' : 'none'}}>BIENVENIDO </h3>
                    <h3 style={{color: '#0073a5',padding: '20px'}}>{this.props.nombre}</h3>
                  </div>
                  <h4 style={{paddingTop: '10px'}}>BOLSA DE TRABAJO | JobUES</h4>
                  <p>Tu Lugar Ideal, Exclusivo Egresados Familia UES</p>
                  <span style={{display: this.props.registrado ? 'none' : 'block'}}>¿Ya posee una cuenta?<br/>
                    <Link to="/" className="button button-sliding-icon ripple-effect margin-top-10"> INGRESAR <i className="icon-material-outline-arrow-right-alt"></i></Link>
                  </span>
                </div>

                <div className="welcome-text" style={{display: this.props.registrado ? 'block' : 'none'}}>
                  <div style={{display: 'flex',flexDirection: 'row'}}>
                    {this.props.tipo === "candidato" ? 
                      <Link to="/empleos" className="button ripple-effect margin-top-30 green" style={{width: '100%'}}>OFERTAS DE EMPLEO <i className="icon-material-outline-arrow-right-alt"></i></Link>
                    : 
                      <Link to="/candidatos" className="button ripple-effect margin-top-30" style={{width: '100%',marginRight: '10px'}}>CANDIDATOS <i className="icon-material-outline-arrow-right-alt"></i></Link>
                    }
                  </div>
                </div>
  
                <div className="account-type" style={{display: this.props.registrado ? 'none' : 'flex'}}>
                  <div>
                    <input type="radio" name="account-type-radio" value="registroUsuario" id="freelancer-radio" className="account-type-radio" defaultChecked onClick={this.tipoRegistro}/>
                    <label htmlFor="freelancer-radio" className="ripple-effect-dark"><i className="icon-material-outline-account-circle"></i> CANDIDATO</label>
                  </div>
                  <div>
                    <input type="radio" name="account-type-radio" value="registroEmpresa" id="employer-radio" className="account-type-radio" onClick={this.tipoRegistro}/>
                    <label htmlFor="employer-radio" className="ripple-effect-dark"><i className="icon-material-outline-business-center"></i> EMPRESA</label>
                  </div>
                </div>
  
                { 
                  (this.state.title === 'registroUsuario') ? 
                    <form onSubmit={this.props.handleRegistro} style={{display: this.props.registrado ? 'none' : 'block'}}>
                      <div className="input-with-icon-left">
                        <i className="icon-line-awesome-smile-o"></i>
                        <input type="text" className="input-text with-border" name="nombre" placeholder="Nombre completo" required/>
                        <input type="hidden" name="tipo" value="candidato"/>
                        <input type="hidden" name="empresa" value=""/>
                        <input type="hidden" name="telefono" value=""/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-baseline-mail-outline"></i>
                        <input type="email" className="input-text with-border" name="emailaddress" id="emailaddress-register" placeholder="Correo Electrónico" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"required/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-outline-lock"></i>
                        <input type="password"  className="input-text with-border" name="password" id="password-register"  placeholder="Contraseña" alt="strongPass" minlength="6" maxlength="20" required/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-outline-lock"></i>
                        <input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repetir Contraseña" alt="strongPass" minlength="6" maxlength="20" required/>
                      </div>
      
                      <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" >REGISTRO <i className="icon-material-outline-arrow-right-alt"></i></button>
                    </form>
                  :
                    <form onSubmit={this.props.handleRegistro} style={{display: this.props.registrado ? 'none' : 'block'}}>
                      <div className="input-with-icon-left">
                        <i className="icon-line-awesome-smile-o"></i>
                        <input type="text" className="input-text with-border" name="nombre" placeholder="Nombre completo" required/>
                        <input type="hidden" name="tipo" value="empresa"/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-line-awesome-street-view"></i>
                        <input type="text" className="input-text with-border" name="empresa" id="empresa-register" placeholder="Nombre de la empresa" required/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-baseline-mail-outline"></i>
                        <input type="email" className="input-text with-border" name="emailaddress" id="emailaddress-register" placeholder="Correo Electrónico" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"required/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-line-awesome-mobile-phone"></i>
                        <input type="number" className="input-text with-border" name="telefono" id="telefono-register" placeholder="Teléfono" alt="number" minlength="8" maxlength="8" required/>
                      </div>
                    
                      <div className="input-with-icon-left">
                        <i className="icon-material-outline-lock"></i>
                        <input type="password" className="input-text with-border" name="password" id="password-register" placeholder="Contraseña"alt="strongPass" minlength="6" maxlength="20" required/>
                      </div>
                      <div className="input-with-icon-left">
                        <i className="icon-material-outline-lock"></i>
                        <input type="password" className="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repetir Contraseña" required/>
                      </div>
      
                      <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" >REGISTRO <i className="icon-material-outline-arrow-right-alt"></i></button>
                    
                    
                    
                    
                    </form>
                   


                }
              </div>

            </div>
          </div>
         
        </div>
  
  
      </div>
    );
  }

  
}
 
export default Registro;


