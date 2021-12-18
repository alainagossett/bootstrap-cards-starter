import React from "react";

const Button = (props) => {
  return (
    <a href={props.url} className="btn btn-primary" target="_blank">
      Go somewhere
    </a>
  );
};

export default Button;
