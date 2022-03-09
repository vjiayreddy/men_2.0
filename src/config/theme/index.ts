import { CSSProperties } from "@emotion/serialize";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { appColors } from "./colors";
import { FONTS } from "./fonts";

declare module "@mui/material/styles" {
  interface Palette {
    COLOR_2?: string;
    COLOR_3?: string;
    COLOR_4?: string;
    COLOR_5?: string;
    COLOR_7?: string;
    COLOR_8?: string;
    COLOR_9?: string;
  }
  interface PaletteOptions {
    COLOR_2?: string;
    COLOR_3?: string;
    COLOR_4?: string;
    COLOR_5?: string;
    COLOR_7?: string;
    COLOR_8?: string;
    COLOR_9?: string;
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
    h1: {
      fontSize: 115,
      fontFamily: FONTS.SECONDARY,
    },
    h3: {
      fontFamily: "Nunito Sans",
      fontSize: 48,
      fontWeight: 200,
      fontStyle: "normal",
    },
    h4: {
      fontFamily: "Nunito Sans",
      fontSize: 32,
    },
    body1: {
      fontFamily: "Nunito Sans",
      fontSize: 14,
      fontWeight: 200,
      fontStyle: "normal",
      lineHeight: "19px",
    },
    subtitle2: {
      fontFamily: "Nunito Sans",
      fontSize: 16,
      lineHeight: "9px",
      fontWeight: 400,
      fontStyle: "normal",
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
    COLOR_4: appColors.COLOR_4,
    COLOR_5: appColors.COLOR_5,
    COLOR_7: appColors.COLOR_7,
    COLOR_8: appColors.COLOR_8,
    COLOR_9: appColors.COLOR_9,
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
            height: 40,
            fontSize: 16,
            minWidth: 130,
            fontFamily: FONTS.PRIMARY,
            textTransform: "none",
            borderRadius: 0,
          },
        },
      ],
    },
    MuiDialog:{
      styleOverrides:{
        paper:{
          borderRadius:0
        }
      }
    }
  },
});

export default responsiveFontSizes(theme);
