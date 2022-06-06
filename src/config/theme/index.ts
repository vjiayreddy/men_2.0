import { minHeight } from "@mui/system";
import { createTheme, responsiveFontSizes } from "@mui/material";
import { appColors, COLORS } from "./colors";
import { CUSTOM_CLASSES } from "./customClasses";
import { FONTS } from "./fonts";

declare module "@mui/material/styles" {
  interface Palette extends COLORS {}
  interface PaletteOptions extends COLORS {}
  interface Theme extends CUSTOM_CLASSES {}
  interface ThemeOptions extends CUSTOM_CLASSES {}
}
const muiTheme = createTheme();

const theme = createTheme({
  spacing: 2,
  typography: {
    fontFamily: ["Nunito Sans", "Montserrat", "Poppins"].join(","),
    h1: {
      fontSize: 115,
      fontFamily: FONTS.SECONDARY,
      [muiTheme.breakpoints.only("xs")]: {
        fontSize: 40,
      },
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
    fontFamily: FONTS.PRIMARY,
    fontSize: 14,
  },
  formGreetings: {
    fontFamily: FONTS.EXTRA,
    fontSize: 25,
    lineHeight: "37.5px",
  },
  formTitle: {
    fontFamily: FONTS.EXTRA,
    fontSize: 31,
    fontWeight: 600,
    lineHeight: "46.5px",
  },
  formSubTitle: {
    fontSize: 16,
    fontWeight: 400,
    fontStyle: "normal",
    lineHeight: "24px",
  },
  formLinkButton: {
    fontFamily: FONTS.PRIMARY,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "19px",
  },
  footerLink: {
    fontFamily: FONTS.PRIMARY,
    fontSize: 16,
    fontWeight: 400,
    height: "10px !important",
    lineHeight: "24.55px",
    color: muiTheme.palette.common.white,
  },
  footerLinkListHeader: {
    fontFamily: FONTS.PRIMARY,
    fontSize: 16,
    lineHeight: "24.55px",
    color: muiTheme.palette.common.white,
    fontWeight: 700,
  },
  container: {
    minHeight: `calc(100vh)`,
    paddingLeft:0,
    paddingRight:0,
    paddingTop: "84.36px",
    display: "flex",
    flexDirection: "column",
    [muiTheme.breakpoints.down("sm")]: {
      paddingTop: "80.36px",
    },
  },
  boxWrapper: {
    height: `calc(100vh - 84.36px)`,
    display: "flex",
    flexDirection: "column",
  },
  palette: {
    primary: {
      main: appColors.PRIMARY,
    },
    secondary: {
      main: appColors.SECONDARY,
    },
    COLOR_1: appColors.COLOR_1,
    COLOR_2: appColors.COLOR_2,
    COLOR_3: appColors.COLOR_3,
    COLOR_4: appColors.COLOR_4,
    COLOR_5: appColors.COLOR_5,
    COLOR_7: appColors.COLOR_7,
    COLOR_8: appColors.COLOR_8,
    COLOR_9: appColors.COLOR_9,
    COLOR_10: appColors.COLOR_10,
    COLOR_11: appColors.COLOR_11,
    COLOR_12: appColors.COLOR_12,
    COLOR_13: appColors.COLOR_13,
    COLOR_14: appColors.COLOR_14,
    COLOR_15: appColors.COLOR_15,
    COLOR_16: appColors.COLOR_16,
    COLOR_17: appColors.COLOR_17,
    COLOR_18: appColors.COLOR_18,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: muiTheme.palette.common.white,
          padding: `5px 0px`,
          color: muiTheme.palette.common.black,
          borderBottom: `1px solid ${muiTheme.palette.grey[300]}`,
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
          props: { variant: "contained", size: "medium" },
          style: {
            height: 54,
            fontSize: 16,
            minWidth: 130,
            fontFamily: FONTS.PRIMARY,
            textTransform: "none",
            borderRadius: 0,
          },
        },
        {
          props: { variant: "outlined", size: "small" },
          style: {
            height: 35,
            fontFamily: FONTS.PRIMARY,
            textTransform: "none",
            borderRadius: 0,
            fontSize: 12,
            minWidth: 130,
          },
        },
        {
          props: { variant: "contained", size: "small" },
          style: {
            height: 35,
            fontFamily: FONTS.PRIMARY,
            textTransform: "none",
            borderRadius: 0,
            fontSize: 12,
            minWidth: 130,
          },
        },
      ],
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        fullWidth: true,
        size: "small",
      },
      styleOverrides: {
        root: {
          height: 40,
          borderRadius: 5,
          padding: 10,
        },
        sizeSmall: {
          height: 35,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito Sans",
          fontSize: 14,
          fontWeight: 200,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: FONTS.POPPINS,
          color: muiTheme.palette.common.black,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito Sans",
          fontWeight: 400,
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
