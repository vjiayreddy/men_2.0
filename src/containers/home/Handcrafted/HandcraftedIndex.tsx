import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  padding: "0px 110px",
  [theme.breakpoints.down("sm")]: {
    padding: "0px 30px",
  },
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.COLOR_5,
  textAlign: "right",
  lineHeight: "125px",
  [theme.breakpoints.down("sm")]: {
    lineHeight: "50px",
  },
}));

const HandcraftedContaner = () => {
  return (
    <StyledBox sx={{ padding: "0px 110px" }}>
      <StyledHeading variant="h1">
        Handcrafted for your unique male lifestyle.
      </StyledHeading>
    </StyledBox>
  );
};

export default HandcraftedContaner;
