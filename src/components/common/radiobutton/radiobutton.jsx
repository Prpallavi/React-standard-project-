import React from "react";
import { Form } from "react-bootstrap";
function RadioButton(props) {
  return (
    <Form.Check
      label={props.label}
      name={props.name}
      value={props.value}
      type="radio"
      id={props.id}
      onChange={props.onChange}
    />
  );
}

export default RadioButton;
