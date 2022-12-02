import styled from "@emotion/styled";
import { Box } from "@mui/system";
import React from "react";

const brands = [
  "https://i.ibb.co/27wHw8Y/image-5.png",
  "https://i.ibb.co/vVSVd76/image-6.png",
  "https://i.ibb.co/Dwj3KYc/image-7.png",
  "https://i.ibb.co/99gcp3b/image-8.png",
  "https://i.ibb.co/Rhk2VSh/image-9.png",
];

const BrandsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "4rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  "& > img": {
    height: "50px",
  },
}));

const Brands = () => {
  return (
    <BrandsWrapper>
      {brands.map((brand, index) => (
        <img src={brand} key={index} alt="" />
      ))}
    </BrandsWrapper>
  );
};

export default Brands;
