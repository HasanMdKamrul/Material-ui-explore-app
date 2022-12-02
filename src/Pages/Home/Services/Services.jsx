import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../../Components/Navbar/SectionTitle";
import ServiceCards from "./ServiceCards";

const servicesData = [
  {
    id: 1,
    title: "Web & Mobile Design",
    imageLink: "https://i.ibb.co/HNhykGp/iphone-1.png",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odit sed repellendus impedit. Libero, adipisci?",
  },
  {
    id: 2,
    title: "Web & Mobile Design",
    imageLink: "https://i.ibb.co/r0gHkvM/color-palette-1.png",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odit sed repellendus impedit. Libero, adipisci?",
  },
  {
    id: 3,
    title: "Web & Mobile Design",
    imageLink: "https://i.ibb.co/CvQwzKC/coding-1.png",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci odit sed repellendus impedit. Libero, adipisci?",
  },
];

const Services = () => {
  return (
    <Box>
      <SectionTitle title="Provide awesome" colored="services" />
      <Grid
        container
        spacing="20"
        mx="auto"
        sx={{
          marginTop: "30px",
        }}
      >
        {servicesData.map((service) => (
          <Grid xs={12} md={6} lg={4} key={service.id} item>
            <ServiceCards service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
