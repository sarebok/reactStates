import React from "react";

const SocialButton = ({ ig, face }) => {
  return (
    <div className="btn-container">
      <div>
        <p>{ig}</p>
      </div>
      <div>
        <p>{face}</p>
      </div>
    </div>
  );
};

export default SocialButton;
