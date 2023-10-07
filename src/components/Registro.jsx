import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import "./Registro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";
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
