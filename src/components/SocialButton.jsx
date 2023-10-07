import React from "react";
import "../components/SocialButton.css";

const SocialButton = ({ ig, face, github }) => {
  return (
    <div className="btn-container">
      <div>
        <p className="icon">{ig}</p>
      </div>
      <div>
        <p className="icon">{face}</p>
      </div>
      <div>
        <p className="icon">{github}</p>
      </div>
    </div>
  );
};

export default SocialButton;
