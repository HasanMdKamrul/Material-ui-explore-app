import { Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title, colored }) => {
  return (
    <div>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "40px",
        }}
      >
        {title}
        {colored && (
          <span style={{ marginLeft: "1rem", color: "#7AB259" }}>
            {colored}
          </span>
        )}
      </Typography>
    </div>
  );
};

export default SectionTitle;
