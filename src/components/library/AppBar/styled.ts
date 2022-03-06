import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const StyledNavActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
}));

export const StyledMenuIcon = styled("img")(({ theme }) => ({
  width: 32.77,
  height: 33.37,
}));

export const StyledAnchorLink = styled("a")(({ theme }) => ({
  ...theme.a,
  padding: "0px 10px",
  ":hover": {
    cursor: "pointer",
  },
}));
