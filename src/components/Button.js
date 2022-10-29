import PropTypes from "prop-types";
import React from "react";

const Button = ({ backgroundColor, color, text, onClick, display }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: { backgroundColor },
        color: { color },
        display: { display },
        cursor: "pointer",
      }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "greenyellow",
};

Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
