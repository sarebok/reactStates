import React from "react";
import "./Formulario.css";
import Alert from "./Alert";
import { useState } from "react";

const Formulario = () => {
  {
    /* Almacenar estados de los inputs a traves de useState */
  }
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConf, setPassConf] = useState("");
  const [result, setResult] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (!nombre || !email || !pass || pass != passConf) {
      setNombre("");
      setEmail("");
      setPass("");
      setPassConf("");
      return setResult("verifica los datos");
    }
    return setResult("Acceso correcto");
  };
  return (
    <div>
      {/* folmulario con campo para nombre, email, contraseña y confirmacion de contraseña */}
      {/* Relacionarlos con evento onChange */}
      <form onSubmit={validateForm}>
        <label htmlFor="input-text">Nombre</label>
        <input className="formulario" type="text" id="input-text" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        <label htmlFor="input-email">Email</label>
        <input className="formulario" type="email" id="input-email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label htmlFor="input-pass">Password</label>
        <input className="formulario" type="password" id="input-pass" onChange={(e) => setPass(e.target.value)} value={pass} />
        <label htmlFor="input-pass-conf">Re ingresa Password</label>
        <input className="formulario" type="password" id="input-pass-conf" onChange={(e) => setPassConf(e.target.value)} value={passConf} />
        {/* Incluir boton para procesar formulario */}
        <button type="submit">Registrarse</button>
      </form>

      {/* Validar email a traves de onSubmit */}
      {/* Validar que las contraseñas sean iguales */}
      <Alert mensaje={result}></Alert>
    </div>
  );
};

export default Formulario;
