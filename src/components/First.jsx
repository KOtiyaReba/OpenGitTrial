import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const First = () => {
  var[inputs,setInputs] = useState([]);
  const inputHandler = (e)=>{
    console.log("txt ",e.target.value);
    setInputs({...inputs,[e.target.name]:e.target.value});
    console.log("in",inputs)
  }
  return (
    <div>
      <h1>Login Form</h1>
      <Typography variant='h1'>Hello</Typography>
      <TextField label="Name" variant='outlined' name='fname' value={inputs.fname} onChange={inputHandler}/>
      <br />
      <TextField label="email" variant='outlined' name='email' value={inputs.email} onChange={inputHandler}/>
      
      
      <br />
      <Button variant='contained'>Submit</Button>
      
    </div>
  )
}

export default First
