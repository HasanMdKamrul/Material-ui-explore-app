import { useTheme } from "@emotion/react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React from "react";
const CreativeCard = ({ card }) => {
  const theme = useTheme();

  const {
    palette: { primary },
  } = theme;

  const { main } = primary;

  return (
    <Card sx={{ maxWidth: 345, my: "4rem", borderRadius: "30px" }}>
      <CardMedia
        sx={{
          p: 2,
          borderRadius: "30px",
        }}
        component="img"
        alt="green iguana"
        height="190"
        image={card}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="body"
            sx={{
              color: "gray",
              fontWeight: "900",
            }}
          >
            Web Design
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize={20}
            fontWeight={"bold"}
          >
            Web Design Research
          </Typography>
        </Box>
        <Box>
          <IconButton
            sx={{ border: "1px solid gray", width: "30px", height: "30px" }}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
