import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CreativeCard from "../../../Components/Navbar/CreativeCard";
import SectionTitle from "../../../Components/Navbar/SectionTitle";
import TabComponent from "../TabComponent/TabComponent";
import { cardData } from "./CardData";

const OurWorks = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box style={{ display: "flex" }}>
          <SectionTitle title="Here are some of" colored={`Our Works`} />
        </Box>
        <Box>
          <TabComponent
            handleChange={handleChange}
            value={value}
            setValue={setValue}
          />
        </Box>
      </Box>
      <Box>
        <Grid container>
          {cardData[value].map((card, index) => (
            <Grid key={index} item xs={12} md={6} lg={4}>
              <CreativeCard card={card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurWorks;
