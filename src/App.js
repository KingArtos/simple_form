import React, { Component } from "react";
import "./assets/App.css";
import './assets/index.css';
import 'fontsource-roboto';
import RegisterForm from "./components/RegisterForm/RegisterForm"
import {Container, Typography} from "@material-ui/core"

class App extends Component {

  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de cadastro
        </Typography>
        <RegisterForm sendForm={printMe} validateCpf={validateCpf} dname="Artur" />
      </Container>
    );
  }
}

function printMe(obj) {
  console.log(obj)
}

function validateCpf(cpf) {
  if (cpf.length !== 0 && cpf.length !== 11) {
    return {valid: false, msg: "Deve ter 11 digitos"}
  } else {
    return {valid: true, msg: ""}
  }
}

export default App;
