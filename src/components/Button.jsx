import React from 'react';
import './Button.css';

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      onClick={onClickHandler}
      value={value}
      className="custom-btn"
    >
      {title}
    </button>
  );
};

export default Button;
