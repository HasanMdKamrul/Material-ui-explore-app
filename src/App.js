import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import { theme } from "./Theme/Theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
