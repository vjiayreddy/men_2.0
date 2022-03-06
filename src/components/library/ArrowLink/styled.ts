import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

export const StyledArrowLinkWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledLabelLink = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  ":hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));
