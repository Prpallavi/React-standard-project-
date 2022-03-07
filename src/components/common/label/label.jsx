import React from 'react'
import { Form,FloatingLabel } from 'react-bootstrap'
function Label(props) {
    return (
        <FloatingLabel
        controlId="floatingInput"
      /*   label="Email address" */
        className="mb-3"
      >
        <Form.Label
        htmlFor={props.id}
        placeholder={props.placeholder}
        >{props.message}</Form.Label>
        </FloatingLabel>
    )
}
export default Label