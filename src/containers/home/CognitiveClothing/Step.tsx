import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

interface stepComponentProps {
  step: string;
  lable: string;
}

const StyledStepLabel = styled(Typography)(({ theme }) => ({
  display: "block",
  color: theme.palette.COLOR_7,
  fontSize: 16,
  marginBottom: 5,
}));

const StyledMainLabel = styled(Typography)(({ theme }) => ({
  display: "block",
  color: theme.palette.primary.main,
  fontSize: `24px !important`,
  fontWeight: 200,
  [theme.breakpoints.only('xs')]:{
    fontSize:21
  }
}));

const StepComponent: React.FC<stepComponentProps> = ({ step, lable }) => {
  return (
    <Box>
      <StyledStepLabel variant="caption">{step}</StyledStepLabel>
      <StyledMainLabel variant="h3">{lable}</StyledMainLabel>
    </Box>
  );
};
export default StepComponent;
