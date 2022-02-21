import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { editUser } from '../../../../redux/users/action';
import { BootstrapButton, Textbox } from '../../../common';
import "../../../../assets/styles.css"


export default function Updatepost() {
   const location=useLocation()
   const {state} =location
   console.log(state);
   const initstate={
    name:state.name,
    password:state.password
}
const navigate = useNavigate();
const dispatch = useDispatch();
const [value, setValues] = useState(initstate);
const handleInput = (event) => {
    console.log(event.target.name);
  setValues({
      ...value,
    [event.target.name]: event.target.value,
  });
};const handleUpdate= (data)=>{
    dispatch(editUser(data,value))
    navigate('/')
    }
  return (
    <div className='budgetwrapper'>
       
         Username:<Textbox name="name" onChange={(e)=>handleInput(e)} type="text" value={value.name}/><br/>
         
      Password:<Textbox id="password" name='password' onChange={(e)=>handleInput(e)} type="text" value={value.password}/><br></br>
      <BootstrapButton variant="secondary" onClick={()=>navigate(-1)} message="back" size="sm"/>
      
      <BootstrapButton variant="primary" onClick={()=>handleUpdate(state._id)} message="update" />
         
            </div>
  )
}