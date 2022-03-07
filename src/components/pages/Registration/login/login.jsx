import React, { useState } from "react";
import { BootstrapButton, Textbox } from "../../../common";
import { getjson } from "../../../../services/baseapiservices";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const jsond = getjson();
  console.log(jsond);
  const state = {
    name: "",
    password: "",
  };
  const [value, setValues] = useState(state);
  const [error, setError] = useState("");

  const handleInput = (event) => {
    console.log(event.target.name);
    setValues({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    jsond.map((data) => {
      console.log(jsond);

      if (data.name === value.name && data.password === value.password) {
        navigate("/form");
      }
      setError("Invalid Username or Password");
    });
  };

  return (
    <div className="budgetwrapper">
      <h3> LOGIN </h3>
      <h5 style={{ color: "red" }}>{error}</h5>
      Username
      <Textbox
        id="name"
        name="name"
        onChange={(e) => handleInput(e)}
        type="text"
      />
      Password
      <Textbox
        id="password"
        name="password"
        onChange={(e) => handleInput(e)}
        type="password"
      />
      <br />
      <BootstrapButton
        variant="primary"
        message="Login"
        onClick={(e) => handleSubmit(e)}
      />{" "}
      <BootstrapButton
        variant="primary"
        message="back"
        onClick={() => navigate("/")}
      />
      {/*     <Link to="/form" style={{textDecoration:"none"}} >Next</Link> */}
      {/*     <BootstrapButton variant="primary" message="Back"   /><br/> */}
    </div>
  );
}
