import Container from "@mui/material/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Main;
