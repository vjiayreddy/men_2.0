import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export const StyledSectionWrapper = styled(Box)(({ theme }) => ({
  marginTop: 0,
  [theme.breakpoints.up("sm")]: {
    marginTop: 20,
  },
}));

export const StyledBoxWithGradent = styled(Box)(({ theme }) => ({
  padding: "0px 46px",
  marginTop: 30,
  background: `linear-gradient(${theme.palette.COLOR_2}, ${theme.palette.COLOR_3});`,
  borderRadius: 19,
  height: 441,
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    borderRadius: 0,
    padding: 0,
    marginTop: 0,
    height: 500,
    paddingTop: 50,
  },
}));

export const GridStyled = styled(Grid)(() => ({
  minHeight: 441,
}));

export const NavigationGridStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: 70,
    marginBottom: 30,
    padding: `10px 29px`,
  },
}));

export const StyledVerticalTypographyWrapper = styled(Box)(() => ({
  position: "absolute",
  bottom: 30,
  right: 30,
}));

export const StyledVerticalTypography = styled(Typography)(() => ({
  writingMode: `vertical-rl`,
  fontSize: "10px",
  letterSpacing: "1px",
}));

export const StyledBg2Box = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: -56,
  right: 203,
  [theme.breakpoints.down("sm")]: {
    top: 30,
    right: 127,
  },
}));

export const StyledImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    paddingTop: 70,
  },
}));

export const StyledMenAiImg = styled("img")(() => ({
  position: "absolute",
  width: 600,
  top: -187,
  zIndex: 1,
}));

export const StyledVectorMImg = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  top: 220,
  right: 118,
  width: 100,
  [theme.breakpoints.down("sm")]: {
    top: 252,
    right: 41,
    width: 120,
  },
}));

export const Styled2VectorImg = styled("img")(({ theme }) => ({
  width: 242,
  height: 252,
  [theme.breakpoints.down("sm")]: {
    width: 224,
    height: 215,
  },
}));

export const StyledMainTypography = styled(Typography)(({ theme }) => ({
  width: "80%",
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    fontSize: 36,
    fontWeight: 200,
    lineHeight: "36px",
    paddingLeft: 25,
    paddingRight: 25,
  },
}));

export const StyledSpanTitle = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const StyledCaptionTypography = styled(Typography)(() => ({
  letterSpacing: "3px",
}));

export const StyledAiProfileDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    backgroundColor: theme.palette.COLOR_10,
    padding: 0,
  },
}));
export const StyledAiProfileDialogContainer = styled(DialogContent)(
  ({ theme }) => ({
    backgroundColor:"transparent",
    padding: 0,
    height: "100%",
  })
);

export const StyledNextImage = styled(Image)(({ theme }) => ({
  zIndex: 1,
  marginTop: 50,
}));
