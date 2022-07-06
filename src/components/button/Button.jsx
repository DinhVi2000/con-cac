import React from 'react';
import PropTypes from 'propTypes';

const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => onClick() : null}
    >
      {props.children}
    </button>
  );
};

const OutlineButton = (props) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.prototypes = {
  onClick: PropTypes.func,
};

export default Button;
