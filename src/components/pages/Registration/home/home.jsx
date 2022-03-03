import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BootstrapButton, Textbox } from "../../../common";
import { addUser, deleteUser, fetchUser } from "../../../../redux/users/action";
import "../../../../assets/styles.css";
import { FaPen, FaTrash } from "react-icons/fa";

export default function Home() {
  const state = {
    name: "",
    password: "",
  };
  const navigate = useNavigate();
  const [value, setValues] = useState(state);
  const data = useSelector((state) => state.app);
  console.log(data);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleFields = (event) => {
    console.log(event.target.name);
    setValues({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleAdd = () => {
    dispatch(addUser(value));
    console.log(value);
  };
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  return (
    <div>
    
      <BootstrapButton
        variant="primary"
        message="LOGIN"
        onClick={() => navigate("/login")}
      />
    
      <div className="budgetwrapper">
        <h3> ADD USER</h3>
        Username:
        <Textbox
          id="name"
          name="name"
          onChange={(e) => handleFields(e)}
          type="text"
        />
       
        Password:
        <Textbox
          id="password"
          name="password"
          onChange={(e) => handleFields(e)}
          type="password"
        />
     <br/>
        <BootstrapButton
          variant="primary"
          message="Regiter"
          onClick={() => handleAdd()}
        />
      
      </div>

      <div className="budgetwrapper">
        <h3>USERS VIEW</h3>
        {data.users.map((e) => {
          return (
            <div key={e._id}>
              {e.name}
              <FaPen onClick={() => navigate("/editpost", { state: e })} />

              <FaTrash onClick={() => handleDelete(e._id)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
