import React from "react";

function Button({ text, onClick, className, type, disabled, width, height }) {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
      style={{ width: width, height: height }}
    >
      {text}
    </button>
  );
}

export default Button;
