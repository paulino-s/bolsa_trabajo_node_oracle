import React, { Component } from "react";
import {
  HashRouter,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registro from "./components/Registro";
import Empleos from "./components/Empleos";
import Empleo from "./components/Empleo";
import Candidatos from "./components/Candidatos";
import Candidato from "./components/Candidato";
import Aplicar from "./components/Aplicar";
import Dashboard from "./components/Dashboard";
import Configuracion from "./components/Configuracion";
import PublicarEmpleo from "./components/PublicarEmpleo";
import PublicarCandidato from "./components/PublicarCandidato";
import "./App.css";
import axios from "axios";

axios.defaults.withCredentials = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      value: "",
      registrado: false,
      user: {},
      persons: [],
      empresas: [],
      candidatos: [
        {
          avatar: "",
          nombre: "",
          apellidoPaterno: "",
          apellidoMaterno: "",
          fechaDeNacimiento: "",
          estudios: "",
          titulo: "",
          jornada: "",
          direccion: "",
          ciudad: "",
          telefono: "",
          email: "",
          sueldoMin: "",
          sueldoMax: "",
          descripcion: "",
          visible: false,
        },
      ],
      candidatosFiltrados: [],
      filtrados: [],
      nombre: "",
      email: "",
      password: "",
      nota: false,
      headerNotificationsIsActive: false,
    };
    this.handlePublicarEmpleo = this.handlePublicarEmpleo.bind(this);
  }
  //Muestra informacion de los candidatos
  componentDidMount() {
    axios.get(`http://localhost:3001/estudiantes`).then((res) => {
      const candidatos = res.data;
      console.log(candidatos);
      this.setState({ candidatos });
    });
    //Muestra informacion de empresas
    axios.get(`http://localhost:3001/vacantes`).then((res) => {
      const empresas = res.data;
      console.log("COMPONENTDIDMOUNT");
      console.log(empresas);
      this.setState({ empresas });
    });
  }

  componentDidUpdate() {
    console.log(`El usuario al cargar: ${this.state.email}`);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      nombre: this.state.nombre,
      email: this.state.email,
      password: this.state.password,
    };
    //Crear Usuario
    /* axios.post(`http://18.219.47.222/apis/bolsadetrabajo/insertuser.php`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
//Muestra informacion de candidatos
    axios.get(`http://18.219.47.222/apis/bolsadetrabajo/candidatos.php`)
      .then(res => {
        const candidatos = res.data;
        this.setState({ candidatos });
      })
  }*/
  };
  //No se para que es
  verEmpleo = () => {
    console.log("cacatua");
  };

  callbackFunction = (childData) => {
    console.log(childData);
  };

  filtroCiudad = (e) => {
    console.log(e.target.value);
    const ciudad = e.target.value;
    console.log("FILTRO CANDIDATOS");
    console.log(ciudad);
    const candidatos = this.state.candidatos.filter(
      (candidato) => candidato.ciudad === ciudad
    );
    this.setState({
      candidatos: candidatos,
    });
    console.log(this.state.filtrados);
  };

  filtroCiudadEmpresas = (e) => {
    console.log(e.target.value);
    const ciudad = e.target.value;
    const empresas = this.state.empresas.filter(
      (empresa) => empresa.ciudad === ciudad
    );
    this.setState({
      empresas: empresas,
    });
    console.log(this.state.filtrados);
  };

  filtroEstudios = (e) => {
    console.log(e.target.value);
    const estudios = e.target.value;
    const candidatos = this.state.candidatos.filter(
      (candidato) => candidato.titulo === estudios
    );
    this.setState({
      candidatos: candidatos,
    });
  };

  filtroTipo = (e) => {
    console.log("FILTRO TIPO");
    console.log(e.target.value);
    const tipo = e.target.value;
    const candidatos = this.state.candidatos.filter(
      (candidato) => candidato.jornada === tipo
    );
    this.setState({
      candidatos: candidatos,
    });
    console.log("filtro tipo");
  };

  handleAlertas = (e) => {
    console.log(e.target.value);
  };

  handlePublicarEmpleo = (event) => {
    event.preventDefault();

    const empresa = {
      logo: "jobues2.png",
      vacante: event.target.vacante.value,
      tipoVacante: event.target.tipoVacante.value,
      rubro: event.target.rubro.value,
      direccion_empresa: event.target.direccion_empresa.value,
      ciudad: event.target.ciudad.value,
      salarioMin: event.target.salarioMin.value,
      salarioMax: event.target.salarioMax.value,
      habilidades: event.target.habilidades.value,
      descripcion: event.target.descripcion.value,
    };

    console.log(empresa);

    //Crear empresa

    axios
      .post(
        `http://localhost:3001/registrar-vacante`,
        {
          ...empresa,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        //Mostrar empresas
        axios.get(`http://localhost:3001/vacantes`).then((res) => {
          console.log("EMPRESAS");
          const empresas = res.data;
          console.log(empresas);
          this.setState({ empresas });
        });
      });

    window.scrollTo(0, 0);
    alert("OFERTA AGREGADA CON ÉXITO");
  };
  handlePublicarCandidato = (event) => {
    event.preventDefault();

    const candidato = {
      avatar: "https://image.flaticon.com/icons/png/512/64/64572.png",
      nombre: event.target.nombre.value,
      apellidos: event.target.apellidos.value,
      carnet: event.target.carnet.value,
      sexo: event.target.sexo.value,
      fecha: event.target.fecha.value,
      titulo: event.target.titulo.value,
      jornada: event.target.jornada.value,
      direccion: event.target.direccion.value,
      ciudad: event.target.ciudad.value,
      telefonoFijo: event.target.telefonoFijo.value,
      telefonoPersonal: event.target.telefonoPersonal.value,
      email: event.target.email.value,
      nit: event.target.nit.value,
      nup: event.target.nup.value,
      facebook: event.target.facebook.value,
      sueldoMin: event.target.sueldoMin.value,
      sueldoMax: event.target.sueldoMax.value,
      descripcion: event.target.descripcion.value,
      cv: event.target.upload.files[0],
    };

    let formData = new FormData();

    formData.append("nombre", candidato.nombre);
    formData.append("apellidos", candidato.apellidos);
    formData.append("carnet", candidato.carnet);
    formData.append("sexo", candidato.sexo);
    formData.append("fecha", candidato.fecha);
    formData.append("titulo", candidato.titulo);
    formData.append("jornada", candidato.jornada);
    formData.append("direccion", candidato.direccion);
    formData.append("ciudad", candidato.ciudad);
    formData.append("telefonoFijo", candidato.telefonoFijo);
    formData.append("telefonoPersonal", candidato.telefonoPersonal);
    formData.append("email", candidato.email);
    formData.append("nit", candidato.nit);
    formData.append("nup", candidato.nup);
    formData.append("facebook", candidato.facebook);
    formData.append("sueldoMin", candidato.sueldoMin);
    formData.append("sueldoMax", candidato.sueldoMax);
    formData.append("descripcion", candidato.descripcion);
    formData.append("cv", candidato.cv);

    console.log(candidato);

    //Crear candidatos
    axios
      .post(`http://localhost:3001/actualizar-estudiante`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        //Mostrar candidatos
        axios.get(`http://localhost:3001/estudiantes`).then((res) => {
          const candidatos = res.data;
          this.setState({ candidatos });
        });
      });

    window.scrollTo(0, 0);
    alert("CANDIDATO AGREGADO CON ÉXITO!!!");
  };
  handleSignIn = (event) => {
    event.preventDefault();
    let emailaddress = event.target.emailaddress.value;
    let password = event.target.password.value;

    var usuario = {
      emailaddress: emailaddress,
      password: password,
    };
    //console.log(usuario);
    axios.post(`http://localhost:3001/loggearse`, usuario).then((res) => {
      console.log(res.data);
      //console.log(typeof res.data);
      if (res.data[2] != null) {
        console.log("Ya entraste!!!");
        this.setState({
          email: emailaddress,
          password: res.data[2],
          registrado: true,
          nota: false,
        });
        return <Redirect to="/dashboard" />;
      } else {
        console.log("no entraste!!!");
        this.setState({
          email: "",
          password: "",
          registrado: false,
          nota: true,
        });
        return <Redirect to="/" />;
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  handleRegistro = (event) => {
    event.preventDefault();

    const usuario = {
      nombre: event.target.nombre.value,
      avatar: "https://image.flaticon.com/icons/png/512/64/64572.png",
      emailaddress: event.target.emailaddress.value,
      password: event.target.password.value,
      tipo: event.target.tipo.value,
      empresa: event.target.empresa.value,
      telefono: event.target.telefono.value,
    };

    console.log(usuario);
    //Crear Usuario
    axios
      .post(
        `http://localhost:3001/registro`,
        {
          ...usuario,
        },
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            nombre: usuario.nombre,
            email: usuario.emailaddress,
            tipo: usuario.tipo,
          },
          registrado: {
            ...prevState.registrado,
            registrado: true,
          },
        }));
      })
      .catch((err) => console.log(err));

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  signOut = (history) => {
    axios
      .post(
        `http://localhost:3001/logout`,
        {},
        { withCredentials: true, credentials: "include" }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.setState((prevState) => ({
          user: {
            ...prevState.user,
            nombre: "",
            avatar: "",
            emailaddress: "",
            password: "",
            tipo: "",
            empresa: "",
            telefono: "",
          },
          registrado: false,
        }));
      })
      .catch((err) => console.log(err));
  };

  headerNotifications = (event) => {
    event.preventDefault();
    this.setState({
      headerNotificationsIsActive: !this.state.headerNotificationsIsActive,
    });
  };

  render() {
    return (
      <HashRouter basename="/">
        <div id="wrapper" className="App">
          <Header
            registrado={this.state.registrado}
            email={this.state.email}
            nombre={this.state.user.nombre}
            tipo={this.state.user.tipo}
            headerNotifications={this.headerNotifications}
            headerNotificationsIsActive={this.state.headerNotificationsIsActive}
            signOut={this.signOut}
          />
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  handleSignIn={this.handleSignIn}
                  registrado={this.state.registrado}
                  email={this.state.email}
                  nota={this.state.nota}
                />
              )}
            />

            <Route
              exact
              path="/logout"
              render={(props) => (
                <Logout
                  {...props}
                  registrado={this.state.registrado}
                  signOut={() => this.signOut()}
                />
              )}
            />

            <Route
              exact
              path="/registro"
              render={(props) => (
                <Registro
                  {...props}
                  handleRegistro={this.handleRegistro}
                  registrado={this.state.registrado}
                  usuario={this.state.user}
                  nombre={this.state.user.nombre}
                  tipo={this.state.user.tipo}
                />
              )}
            />
            <Route
              exact
              path="/empleos"
              render={(props) => (
                <Empleos
                  {...props}
                  empresas={this.state.empresas}
                  addEmpresas={this.addEmpresas}
                  filtroCiudadEmpresas={this.filtroCiudadEmpresas}
                />
              )}
            />
            <Route
              exact
              path="/empleo/:id"
              render={(props) => (
                <Empleo
                  {...props}
                  empresas={this.state.empresas}
                  verEmpleo={this.verEmpleo}
                />
              )}
            />
            <Route
              exact
              path="/candidatos"
              render={(props) => (
                <Candidatos
                  {...props}
                  filtrados={this.state.filtrados}
                  candidatos={this.state.candidatos}
                  filtroCiudad={this.filtroCiudad}
                  filtroEstudios={this.filtroEstudios}
                  filtroTipo={this.filtroTipo}
                  handleAlertas={this.handleAlertas}
                />
              )}
            />
            <Route
              exact
              path="/candidato/:id"
              render={(props) => (
                <Candidato {...props} candidatos={this.state.candidatos} />
              )}
            />
            <Route
              exact
              path="/aplicar"
              render={(props) => (
                <Aplicar {...props} empresas={this.state.empresas} />
              )}
            />
            <Route
              exact
              path="/dashboard"
              render={(props) => (
                <Dashboard
                  {...props}
                  parentCallback={this.callbackFunction}
                  candidatos={this.state.candidatos}
                  email={this.state.email}
                />
              )}
            />
            <Route
              exact
              path="/configuracion"
              render={(props) => (
                <Configuracion {...props} candidatos={this.state.candidatos} />
              )}
            />
            <Route
              exact
              path="/publicar-vacante"
              render={(props) => (
                <PublicarEmpleo
                  {...props}
                  candidatos={this.state.candidatos}
                  handlePublicarEmpleo={this.handlePublicarEmpleo}
                />
              )}
            />
            <Route
              exact
              path="/publicar-candidato"
              render={(props) => (
                <PublicarCandidato
                  {...props}
                  candidatos={this.state.candidatos}
                  handlePublicarCandidato={this.handlePublicarCandidato}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={(props) => (
                <Login
                  {...props}
                  handleSignIn={this.handleSignIn}
                  registrado={this.state.registrado}
                  email={this.state.email}
                  nota={this.state.nota}
                />
              )}
            />
          </Switch>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default withRouter(App);
