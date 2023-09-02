import propTypes from "prop-types";
import React from "react";

export const Lines = ({ ...props }) => {
  return (
    <div className="details">
      {props.line}
      <button className="buttons" onClick={props.btn}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

Lines.prototype = {
  line: propTypes.text,
  btn: propTypes.func,
};
