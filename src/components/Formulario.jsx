import React from "react";
import "./Formulario.css";
import Alert from "./Alert";

const Formulario = () => {
  return (
    <div>
      {/* folmulario con campo para nombre, email, contraseña y confirmacion de contraseña */}
      <label htmlFor="input-text">Nombre</label>
      <input className="formulario" type="text" />
      <label htmlFor="input-email">Email</label>
      <input className="formulario" type="email" />
      <label htmlFor="input-pass">Password</label>
      <input className="formulario" type="password" />
      <label htmlFor="input-pass-conf">Re ingresa Password</label>
      <input className="formulario" type="password" />
      {/* Almacenar estados de los inputs a traves de useState */}
      {/* Relacionarlos con evento onChange */}
      {/* Incluir boton para procesar formulario */}
      <button>Registrarse</button>
      {/* Validar email a traves de onSubmit */}
      {/* Validar que las contraseñas sean iguales */}
      <Alert></Alert>
    </div>
  );
};

export default Formulario;
