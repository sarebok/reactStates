import React from "react";

const Alert = (props) => {
  return (
    <div>
      {/* mostrar registro exitoso o campos vacios con props */}
      <h1>{props.mensaje}</h1>
      {/* usar otros props para cambiar el color del alert si es exitoso o no */}
    </div>
  );
};

export default Alert;
