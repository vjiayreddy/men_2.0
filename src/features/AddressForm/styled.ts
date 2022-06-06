import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  width: "65%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledFormInputLabel = styled(Typography)(({}) => ({
  fontSize: 14,
  fontWeight: 500,
  marginBottom: 10,
}));

export const StyledCartButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: `1px dotted ${theme.palette.grey[300]}`,
  width: "100%",
  paddingTop: 30,
  marginTop: 40,
}));
