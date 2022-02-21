import React,{ useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import { BootstrapButton, Textbox } from '../../../common';
import { addUser,deleteUser, fetchUser } from '../../../../redux/users/action';
import '../../../../assets/styles.css'
import {FaPen,FaTrash} from 'react-icons/fa'


 function Home() {
  const state={
    name:"",
    password:""
}
const navigate = useNavigate();
const [value, setValues] = useState(state)
const data = useSelector((state=>state.app))
console.log(data)
const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchUser())
 }, [])

const handleFields = (event) => {
  console.log(event.target.name);
setValues({
    ...value,
  [event.target.name]: event.target.value,
});
};




const handleAdd= ()=>{
dispatch(addUser(value))
console.log(value)
}
const handleDelete=(id)=>{
  dispatch(deleteUser(id))
}
  return (
    <div>
      
     <div className='budgetwrapper'>
     <h1> ADD USER</h1>
     Username:<Textbox id="name" name="name" onChange={(e)=>handleFields(e)}  type="text"/><br/><br/>
     
     Password:<Textbox id="password" name='password' onChange={(e)=>handleFields(e)}  type="password"/><br/><br/>
      <BootstrapButton variant="primary" message="Add" onClick={()=>handleAdd()} /><br/>
     

    </div>
  
    <div className='budgetwrapper'>
    <h1>USERS VIEW</h1>
    {data.users.map((e)=>
                { return(
                   <div key={e._id}>{e.name}
                   <FaPen onClick={()=>navigate("/editpost",{state:e})}/>
                  
                   <FaTrash onClick={()=>handleDelete(e._id)}/>
                   </div>
                 )}
                ) } 
     
     </div>
   </div>
   
    );
  }
export default Home;