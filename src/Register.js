import React from 'react'
import { useFormik } from 'formik'
import { Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';



const Register = () => {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: ""
    })
    const handleChange = () => {
        setValues({name:"", password:""});
      navigate('/');
        
    }

    const postData = (Data) => {
        // console.log(Data);
        fetch("https://pizza-app-n.herokuapp.com/signup",
        {
            method:'POST',
            body:JSON.stringify(Data),
            headers:{'Content-type':'application/json'}
        }
        )
    }
    const formik = useFormik({
        initialValues: { username: "", password: "" },
        onSubmit: (values) => {
            postData(values);
        }
    });
       
  return (
    <div>
   

<form>

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
        <Button variant="outlined" type="submit"  onClick={handleChange} >Register</Button>
     
    </form>

 
  
    </div>
  )
}

export default Register