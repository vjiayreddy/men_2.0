import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledOrderMainBox = styled(Box)(({ theme }) => ({
  padding: 40,
}));
export const StyledOrderItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
export const StyledOrderItemLeftBox = styled(Box)(() => ({
  flexGrow: 1,
}));
export const StyledOrderItemRightBox = styled(Box)(() => ({}));
