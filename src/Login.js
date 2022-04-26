import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = () => {
    setValues({ name: "", password: "" });
    navigate("/");
    console.log(values);
  };
  const postData = (Data) => {
      try {
        fetch("https://pizza-app-n.herokuapp.com/login", {
          method: "POST",
          body: JSON.stringify(Data),
          headers: { "Content-type": "application/json" },
        })
        .then(navigate('/dashboard'))

      } catch (err) {
        console.log(err);
      }
    };
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: async (values) => {
      postData(values);
   

      //
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
       
        <TextField
          
          label="Username"
          variant="standard"
          type="text"
          name="username"
          id="username"
          onChange={formik.handleChange}
        />
        <br></br>
        <TextField
        
          label="Password"
          variant="standard"
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="outlined" type="submit" onClick={handleChange}>
          Login
        </Button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default Login;
