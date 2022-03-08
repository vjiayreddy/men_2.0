import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const StyledImageBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  position: "relative",
  height: "100%",
  width: "100%",
  minHeight: 603,
}));

export const StyledMenCongImg = styled("img")(() => ({
  position: "absolute",
  top: -150,
  left: -150,
  zIndex: 1,
}));

export const StyledVectorBadgeImg = styled("img")(() => ({
  position: "absolute",
  zIndex: 2,
  top: 87,
  left: -16,
  width: 180,
}));

export const StyledVectorMenuImg = styled("img")(() => ({
  position: "absolute",
  top: 516,
  left: 0,
  width: 202,
}));

export const StyledContentWrapper = styled(Box)(() => ({
  minHeight: 603,
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  justifyContent: "flex-end",
}));

export const StyledMainHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: `42px !important`,
  marginBottom: 22,
}));

export const StyledCaption = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  letterSpacing: "1px",
  width: "80%",
  display: "block",
}));
