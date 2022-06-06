import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginTop: 50,
  },
}));

export const StyledImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  position: "relative",
  height: "100%",
  width: "100%",
  minHeight: 603,
  [theme.breakpoints.down("sm")]: {
    marginTop: 50,
    minHeight: 0,
  },
}));

export const StyledMenCongImg = styled("img")(() => ({
  position: "absolute",
  top: -150,
  left: -150,
  zIndex: 1,
}));

export const StyledVectorBadgeImg = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  top: 87,
  left: -16,
  width: 180,
  [theme.breakpoints.down("sm")]: {
    left: 205,
    width: 150,
    top: -20,
  },
}));

export const StyledVectorMenuImg = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 516,
  left: 0,
  width: 202,
  [theme.breakpoints.down("sm")]: {
    top: 212,
    width: 130,
    left: 37,
  },
}));

export const StyledContentWrapper = styled(Box)(({ theme }) => ({
  minHeight: 603,
  display: "flex",
  flexDirection: "column",
  alignItems: "baseline",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
    minHeight: 0,
    paddingLeft: 30,
    paddingRight: 30,
  },
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
