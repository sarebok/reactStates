import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import { useState } from "react";
import "./Registro.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//faSquareInstagram

const Registro = () => {
  return (
    <div className="registro">
      <h1>crear una cuenta</h1>
      <SocialButton
        ig={<FontAwesomeIcon icon={faInstagram} />}
        face={<FontAwesomeIcon icon={faFacebookF} />}
        github={<FontAwesomeIcon icon={faGithub} />}
      ></SocialButton>
      <p>o usa tu mail para registrarte</p>
      <Formulario></Formulario>
    </div>
  );
};

export default Registro;
