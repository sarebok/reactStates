import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import "./Registro.css";

const Registro = () => {
  return (
    <div>
      <h1>crear una cuenta</h1>
      <div className="btn-container">
        <div>
          <p>boton1</p>
        </div>
        <div>
          <p>boton 2</p>
        </div>
        <div>
          <p>boton 3</p>
        </div>
      </div>
      <p>o usa tu mail para registrarte</p>
      <Formulario></Formulario>
      <Alert></Alert>
    </div>
  );
};

export default Registro;
