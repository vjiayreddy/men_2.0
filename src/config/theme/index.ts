import { CSSProperties } from "@emotion/serialize";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { appColors } from "./colors";
import { FONTS } from "./fonts";

declare module "@mui/material/styles" {
  interface Palette {
    COLOR_2?: string;
    COLOR_3?: string;
  }
  interface PaletteOptions {
    COLOR_2?: string;
    COLOR_3?: string;
  }
  interface Theme {
    a?: {
      fontFamily?: string;
      fontSize?: string | number;
    };
  }
  interface ThemeOptions {
    a?: {
      fontFamily?: string;
      fontSize?: string | number;
    };
  }
}
const muiTheme = createTheme();

const theme = createTheme({
  spacing: 2,
  typography: {
    fontFamily: ["Nunito Sans", "Montserrat"].join(","),
    h3: {
      fontFamily: "Nunito Sans",
      fontSize: 50,
      fontWeight: 200,
      fontStyle: "normal",
    },
    subtitle2: {
      fontFamily: "Nunito Sans",
      fontSize: 16,
      lineHeight: "9px",
      fontWeight: 400,
      fontStyle: "normal",
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

    caption: {
      fontFamily: "Nunito Sans",
      fontSize: 14,
      letterSpacing: "13.5%",
      fontStyle: "normal",
    },
  },
  a: {
    fontFamily: "Nunito Sans",
    fontSize: 14,
  },
  palette: {
    primary: {
      main: appColors.PRIMARY,
    },
    secondary: {
      main: appColors.SECONDARY,
    },
    COLOR_2: appColors.COLOR_2,
    COLOR_3: appColors.COLOR_3,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: muiTheme.palette.common.white,
          padding: `20px 0px`,
          color: muiTheme.palette.common.black,
        },
      },
    },
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
