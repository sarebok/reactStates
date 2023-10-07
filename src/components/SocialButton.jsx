import React from "react";
import "../components/SocialButton.css";

const SocialButton = ({ ig, face, github }) => {
  return (
    <div className="icons-container">
      <p className="icon">{ig}</p>
      <p className="icon">{face}</p>
      <p className="icon">{github}</p>
    </div>
  );
};

export default SocialButton;
