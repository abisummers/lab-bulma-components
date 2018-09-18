import React from "react";

function FormField(props) {
  const { label, type, placeholder } = props;

  //what is rendered in the DOM
  return (
    <div>
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
}

export default FormField;
