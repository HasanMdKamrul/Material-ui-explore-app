import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const ServiceCards = ({ service }) => {
  const { imageLink, text, title } = service;
  return (
    <Card
      sx={{
        boxShadow: "none",
      }}
    >
      <CardMedia
        sx={{
          height: "150px",
          width: "150px",
          mx: "auto",
        }}
        component="img"
        image={imageLink}
        alt="green iguana"
      />
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCards;
