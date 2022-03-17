import React from 'react'
import Select from "react-select";
function Dropselect (props) {
  return (
    <Select placeholder={props.placeholder}
    value={props.value}
    options={props.options}
    onChange={props.onChange}
    getOptionLabel={props.getOptionLabel}
    getOptionValue={props.getOptionValue}></Select>
  )
}

export default Dropselect