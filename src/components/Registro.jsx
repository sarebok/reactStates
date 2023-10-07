import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import { useState } from "react";

import "./Registro.css";

const socialButtons = {
  facebook: "facebook",
  instagram: "instagram",
};

const Registro = () => {
  return (
    <div>
      <h1>crear una cuenta</h1>
      <SocialButton ig={socialButtons.instagram} face={socialButtons.facebook}></SocialButton>
      <p>o usa tu mail para registrarte</p>
      <Formulario></Formulario>
    </div>
  );
};

export default Registro;
