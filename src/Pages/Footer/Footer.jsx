import { Button, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        bgcolor: "#121332",
        padding: "50px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            //   p: "30px",
            color: "white",
            fontWeight: "bold",
            flexGrow: 1,
          }}
        >
          Creative Agency
        </Typography>
        <Box>
          <Button
            sx={{
              bgcolor: "blue",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "blue",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Divider
        sx={{
          mt: 3,
          bgcolor: "rgba(255,255,255,0.5)",
        }}
      />
    </Box>
  );
};

export default Footer;
