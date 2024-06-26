import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const ViewStudents = () => {
  var [data, setData] = useState([]);
  var [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteValue = (id) => {
    console.log("clicked");
    console.log(id);
    axios
      .delete("http://localhost:3001/remove/" + id)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateValue = (data) => {
    console.log("up clicked", data);
    setUpdate(update=true);
    navigate("/add", { state: { data, update } });
  };

  return (
    <div>
      <TableContainer style={{ marginTop: "2%" }}>
        <Table
          sx={{
            border: "1px solid #ccc",
            "& .MuiTableCell-root": {
              border: "1px solid #ccc",
            },
            "& .MuiTableRow-root:last-child .MuiTableCell-root": {
              borderBottom: 0,
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Place</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, i) => {
              return (
                <TableRow>
                  <TableCell align="center">{val.Name}</TableCell>
                  <TableCell align="center">{val.Age}</TableCell>
                  <TableCell align="center">{val.Place}</TableCell>
                  <TableCell align="center">{val.Email}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => {
                        updateValue(val);
                      }}
                    >
                      <EditIcon></EditIcon>
                    </Button>{" "}
                    &nbsp;
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteValue(val._id)}
                    >
                      <DeleteIcon></DeleteIcon>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ViewStudents;
