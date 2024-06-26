import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddStudent = ({ props, upVal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  var [inputs, setInputs] = useState({
    Name: "",
    Age: "",
    Place: "",
    Email: "",
    Password: "",
  });
  console.log("loca", location.state);
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        Name: location.state.data.Name,
        Age: location.state.data.Age,
        Place: location.state.data.Place,
        Email: location.state.data.Email,
        Password: location.state.data.Password,
      });
    } else {
      console.log("state", location.state);
    }
  }, []);

  const addData = () => {
    if (location.state !== null) {
      axios
        .put("http://localhost:3001/edit/" + location.state.data._id,inputs)
        .then((res) => {
          console.log("res after up", res.data);
          alert(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("http://localhost:3001/add", inputs)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            // width: '300px',
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Name"
            onChange={inputHandler}
            name="Name"
            value={inputs.Name}
          />
          <TextField
            variant="outlined"
            placeholder="Age"
            onChange={inputHandler}
            name="Age"
            value={inputs.Age}
          />
          <TextField
            variant="outlined"
            placeholder="Place"
            onChange={inputHandler}
            name="Place"
            value={inputs.Place}
          />
          <TextField
            variant="outlined"
            placeholder="Email"
            type="email"
            onChange={inputHandler}
            name="Email"
            value={inputs.Email}
          />
          <TextField
            variant="outlined"
            placeholder="Password"
            type="password"
            onChange={inputHandler}
            name="Password"
            value={inputs.Password}
          />

          <Button variant="contained" color="primary" onClick={addData}>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddStudent;
