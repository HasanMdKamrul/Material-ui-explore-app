import { Box } from "@mui/material";
import React from "react";
import CreativeAccordion from "../../../Components/Navbar/creativeAccordion";
import SectionTitle from "../../../Components/Navbar/SectionTitle";

const Faq = () => {
  return (
    <Box>
      <SectionTitle title="Frequently Asked" colored="questions" />
      <Box>
        {[...Array(3).keys()].map((number) => (
          <CreativeAccordion
            key={number}
            title="Accordion Title"
            description="Dummy Text"
          />
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
