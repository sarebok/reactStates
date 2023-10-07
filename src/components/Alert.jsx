import React from "react";

const Alert = ({ usuario, mensaje, estado }) => {
  const eligeMensaje = () => {
    if (estado) return `${usuario}, ${mensaje}`;
    return `${mensaje}`;
  };
  return (
    <div>
      {/* mostrar registro exitoso o campos vacios con props */}
      <h3>{eligeMensaje()}</h3>
      {/* usar otros props para cambiar el color del alert si es exitoso o no */}
    </div>
  );
};

export default Alert;
