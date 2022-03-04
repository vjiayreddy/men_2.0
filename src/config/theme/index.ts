import { createTheme, responsiveFontSizes } from "@mui/material";
import { appColors } from "./colors";
import { FONTS } from "./fonts";

const muiTheme = createTheme();

const theme = createTheme({
  spacing: 2,
  typography: {
    fontFamily: ["Lora", "Raleway"].join(","),
    h3: {
      [muiTheme.breakpoints.only("xs")]: {
        fontSize: "1.8rem",
        fontStyle:"normal"
      },
    },
    body1: {
      fontFamily: FONTS.SECONDARY,
      fontStyle: "normal",
      fontSize: "1.2rem",
    },
    body2: {
      [muiTheme.breakpoints.only("xs")]: {
        fontFamily: FONTS.DEFAULT,
        lineHeight: 1.6,
        fontSize: "1rem",
      },
    },
  },
  palette: {
    primary: {
      main: appColors.PRIMARY,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        fullWidth: false,
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            height: 30,
            fontSize: "0.8rem",
            width: 130,
            fontFamily: FONTS.SECONDARY,
            [muiTheme.breakpoints.only("xs")]: {
              height: 35,
            },
          },
        },
      ],
    },
  },
});

export default responsiveFontSizes(theme);
