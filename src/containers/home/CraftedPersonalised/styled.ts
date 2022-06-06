import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { minHeight } from "@mui/system";

interface imageProps {
  height: string | number;
  image?: string;
  backgroundSize?: string;
}

export const StyledBoxWrapper = styled(Box)(({}) => ({
  marginBottom: 75,
}));

export const StyledGrid = styled(Grid)(({}) => ({
  marginTop: 75,
}));

export const ImageCardWrapper = styled(Box)<imageProps>(
  ({ theme, height }) => ({
    width: "100%",
    height: height,
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  })
);

export const StyledActionCard = styled(Box)(({ theme }) => ({
  minHeight: 300,
  padding: 15,
  [theme.breakpoints.down("sm")]: {
    padding: "0px 30px",
    minHeight: 200,
    marginBottom: 40,
  },
}));

export const StyledActionCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: 30,
  lineHeight: "36px",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

export const StyledActionCardContent = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  lineHeight: "24px",
}));

export const StyledActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.COLOR_9,
}));

export const StyledContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  textAlign: "justify",
  fontSize: 18,
  lineHeight: "24px",
}));

export const StyledInfoContent = styled(Box)(({ theme }) => ({
  marginTop: "150px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "50px",
  },
}));
