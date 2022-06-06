import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Image from "next/image";

export const StyledFooterWrapper = styled(Box)(({ theme }) => ({
  minHeight: 180,
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  paddingLeft: 100,
  paddingRight: 100,
  paddingTop: 50,
  paddingBottom: 40,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 30,
    paddingRight: 30,
  },
}));

export const StyledLocationWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
}));

export const StyledContentTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  color: theme.palette.common.white,
  fontSize: 18,
  lineHeight: "26px",
}));

export const StyledCopywriteContent = styled(Typography)(({ theme }) => ({
  marginTop: "30px",
  color: theme.palette.common.white,
  fontSize: 14,
  lineHeight: "26px",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    marginTop:50
  },
}));

export const StyledSocialIconsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
}));
export const StyledLogoImage = styled("img")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: 193,
  height: 52,
  [theme.breakpoints.down("sm")]: {
    width: 140,
  },
}));
