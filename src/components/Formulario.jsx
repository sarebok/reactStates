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
  const [ok, setOk] = useState(false);

  const resetData = () => {
    setNombre("");
    setEmail("");
    setPass("");
    setPassConf("");
  };
  const validateForm = (e) => {
    e.preventDefault();
    if (!nombre) {
      resetData();
      setOk(false);
      return setResult("Ingresa tu nombre");
    }
    if (!email) {
      resetData();
      setOk(false);
      return setResult("Ingresa un email valido");
    }
    if (!pass) {
      resetData();
      setOk(false);
      return setResult("Ingresa un password");
    }
    if (pass != passConf) {
      resetData();
      setOk(false);
      return setResult("Los passwords no coinciden");
    }
    setOk(true);
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
      <Alert usuario={nombre} mensaje={result} estado={ok}></Alert>
    </div>
  );
};

export default Formulario;
