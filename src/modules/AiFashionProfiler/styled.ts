import Box from "@mui/material/Box";
import { styled } from "@mui/material";

export const StyledMainBoxWrapper = styled(Box)(({ theme }) => ({
  padding: 10,
  position: "relative",
}));

export const StyledCloseButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: -10,
  right: -10,
}));
