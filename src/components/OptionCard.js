import React from "react";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

const OptionCard = ({ image, description, name, handleSelect }) => (
  <Paper
    style={{
      background: "lavender",
      border: "1px solid purple",
      height: "400px",
      width: "250px",
      margin: "20px",
      padding: "25px"
    }}
  >
    <img src={image} style={{ width: "100%" }} alt="Female Avatar" />
    <div style={{ background: "black" }} />
    <Typography component="h5" variant="h5">
      <h4>{name}</h4>
    </Typography>
    <Typography component="body2" variant="body2">
      <p>{description}</p>
    </Typography>
    <Button variant="outlined" color="primary" onClick={handleSelect}>
      Select
    </Button>
  </Paper>
);

export default OptionCard;
