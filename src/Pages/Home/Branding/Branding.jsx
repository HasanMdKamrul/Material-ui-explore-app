import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";

const BrandWrapper = styled(Box)(({ theme }) => ({
  height: "70vh",
  //   width: "100vw",
  backgroundColor: "#45BA8D",
  //   padding: "0px 0px 0px 150px",
  clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
  marginTop: "20px",
  display: "flex",
  alignItems: "center",
}));

const Branding = () => {
  return (
    <Container>
      <BrandWrapper>
        <Stack
          spacing={5}
          sx={{
            // width: "50%",
            color: "white",
            display: "flex",
            marginLeft: "100px",
          }}
        >
          <Typography sx={{ fontSize: "2rem", fontWeight: "700" }}>
            Let’s Grow Your Brand <br /> To The Next Level
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsa
            nobis, quidem ex temporibus corporis incidunt aperiam excepturi
            mollitia
          </Typography>
          <Button
            sx={{
              bgcolor: "primary.main",
              color: "white",
              width: "50%",
            }}
          >
            Hire Us
          </Button>
        </Stack>
        <Box
          sx={{
            width: "100%",
            display: ["none", "none", "flex"],
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "50%" }}
            src="https://i.ibb.co/sPXVMbC/Frame.png"
            alt=""
          />
        </Box>
      </BrandWrapper>
    </Container>
  );
};

export default Branding;
