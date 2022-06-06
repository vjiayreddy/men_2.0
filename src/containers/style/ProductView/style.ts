import Box from "@mui/material/Box";
import { styled } from "@mui/material";

interface bgCircleProps {
  height?: number;
  width?: number;
}

interface imageProps {
  height?: number;
  width?: number;
}

export const StyledProductContainerWrapper = styled(Box)(({}) => ({
  width: "100%",
  flexGrow: 1,
}));

export const StyledProductView = styled(Box)(({}) => ({
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  position: "relative",
}));

export const StyledBackgroundCircle = styled(Box)<bgCircleProps>(
  ({ theme, height, width }) => ({
    backgroundColor: theme.palette.COLOR_7,
    top: "30%",
    left: "44%",
    position: "absolute",
    width: width / 2,
    height: height / 2,
    zIndex: -1,
    borderRadius: "100%",
    [theme.breakpoints.down("sm")]: {
      height: width / 2,
      width: height / 2,
      top: "40%",
      left: "20%",
    },
  })
);

export const StyledMyNewStyleBoxWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 20,
  left: 0,
  [theme.breakpoints.down("sm")]: {
    left: 20,
  },
}));

export const StyledAddCartWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 0,
  [theme.breakpoints.down("sm")]: {
    top: 0,
  },
}));

export const StyledProductImage = styled("img")<imageProps>(
  ({ theme, height, width }) => ({
    width: width / 2.1,
    height: height,
    [theme.breakpoints.down("sm")]: {
      width: width / 2.4,
    },
  })
);
