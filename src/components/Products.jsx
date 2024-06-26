import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  var [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{margin: "2%", justifyContent:"center"}}>
      <Grid container spacing={2}>
        {data.map((val, i) => (
             <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: "345", margin: '16px'  }} key={i}>
            <CardMedia
              sx={{ height: 140 }}
              image={val.image}
              title={val.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Buy Now
              </Button>
              <Button size="small" color="secondary">
                Add to Cart
              </Button>
            </CardActions>
          </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
