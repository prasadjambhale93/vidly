import React from "react";

// Earlier it was like this but we made it simpler by adding ..rest parameter so we need have to add properties all the time
//const Input = ({ type, name, value, label, onChange, error }) => {
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...rest} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
