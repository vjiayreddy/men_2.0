import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const StyledBoxWithGradent = styled(Box)(({ theme }) => ({
  padding: "0px 46px",
  background: `linear-gradient(${theme.palette.COLOR_2}, ${theme.palette.COLOR_3});`,
  borderRadius: 19,
  height: 441,
  position: "relative",
}));

export const StyledVerticalTypographyWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 30,
  right: 30,
}));

export const StyledVerticalTypography = styled(Typography)(() => ({
  writingMode: `vertical-rl`,
  fontSize: "10px",
  letterSpacing: "1px",
}));

export const StyledBg2Box = styled(Box)(() => ({
  position: "absolute",
  top: -56,
  right: 203,
}));

export const StyledImageBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

export const StyledMenAiImg = styled("img")(({ theme }) => ({
  position: "absolute",
  width: 620,
  top: -187,
  zIndex: 1,
}));

export const StyledVectorMImg = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  top: 220,
  right: 118,
  width: 100,
}));

export const Styled2VectorImg = styled("img")(() => ({
  width: 242,
  height: 252,
}));

export const StyledMainTypography = styled(Typography)(({ theme }) => ({
  width: "80%",
}));

export const StyledSpanTitle = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

export const StyledCaptionTypography = styled(Typography)(({ theme }) => ({
  letterSpacing: "3px",
}));
