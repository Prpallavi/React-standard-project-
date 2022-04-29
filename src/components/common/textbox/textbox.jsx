import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";
function Textbox(props) {
  return (  
  <Form.Control 
    
    type={props.type}
    id={props.id}
    name={props.name}
    onChange={(e)=>props.onChange(e)}
    value={props.value}
  />
  )
}

export default Textbox