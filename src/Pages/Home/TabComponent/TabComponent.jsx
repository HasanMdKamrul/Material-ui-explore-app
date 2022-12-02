import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";

const TabComponent = ({ value, setValue, handleChange }) => {
  const { palette } = useTheme();

  return (
    <Box sx={{ width: "100%", my: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Tabs
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .Mui-selected": {
                // color: "palette.primary.green",
                color: (theme) =>
                  value === 0 ? theme.palette.primary.main : "blue",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
                fontSize: "15px",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="UX/UI" />
          </Tabs>
        </Box>
        <Box>
          <IconButton
            disabled={value === 0}
            onClick={() => setValue(value - 1)}
            sx={{
              //   border: "1px solid green",
              marginRight: "1rem",
              border: (theme) =>
                value === 0
                  ? `1px solid theme.palette.primary.main`
                  : `1px solid blue`,
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            disabled={value === 2}
            onClick={() => setValue(value + 1)}
            sx={{
              //   border: "1px solid green",
              border: (theme) =>
                value === 2
                  ? `1px solid theme.palette.primary.main`
                  : `1px solid blue`,
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TabComponent;
