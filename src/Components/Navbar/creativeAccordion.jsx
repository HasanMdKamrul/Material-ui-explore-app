import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

function CreativeAccordion({ title, description }) {
  const theme = useTheme();
  const [expened, setExpend] = useState(false);

  console.log(theme.palette.primary.main);

  const ExpendIcons = (
    <div>
      {expened ? (
        <div className="expendMore">
          <IconButton>
            <RemoveIcon
              sx={{
                color: "blue",
              }}
            />
          </IconButton>
        </div>
      ) : (
        <div className="expendLess">
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      )}
    </div>
  );

  return (
    <Box my={2}>
      <Accordion
        sx={{
          boxShadow: "none",
          border: "1px solid gray",
          "& .Mui-expanded": {
            color: "blue",
          },
        }}
      >
        <AccordionSummary
          onClick={() => setExpend(!expened)}
          expandIcon={ExpendIcons}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CreativeAccordion;
