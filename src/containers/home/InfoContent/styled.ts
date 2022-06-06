import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const StyledContainerBoxWrapper = styled(Box)(({ theme }) => ({
  paddingTop: "150px",
  [theme.breakpoints.down("sm")]: {
    padding: `0px 30px`,
  },
}));

export const StyledInfoContentTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.COLOR_4,
  lineHeight: "44px",
  width: "85%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "justify",
    fontSize: 21,
    lineHeight: "28px",
  },
}));

export const StyledSpanLabel = styled("span")(({ theme }) => ({
  color: theme.palette.common.black,
}));
