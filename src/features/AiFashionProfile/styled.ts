import { height } from "@mui/system";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface AdditionProps {
  height?: number;
  width?: number;
}

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const StyledQuestionsView = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.grey[100],
  flexDirection: "column",
  width: "65%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledSectionHeader = styled(Box)(({ theme }) => ({
  boxSizing: "border-box",
  padding: `20px 40px 0px 28px`,
  [theme.breakpoints.down("sm")]: {
    padding: `15px 15px  0px 15px`,
    backgroundColor: theme.palette.COLOR_3,
  },
}));

export const StyledOptionsView = styled(Box)<AdditionProps>(({ height }) => ({
  overflow: "auto",
  boxSizing: "border-box",
  flexGrow: 1,
  height: height,
  padding: 30,
}));

export const StyledLooksView = styled(Box)(({ theme }) => ({
  width: "35%",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledAiLookGenerator = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

export const StyledCognitiveView = styled(Box)<AdditionProps>(
  ({ theme, height, width }) => ({
    height: 450,
    width: 299,
    backgroundColor:  theme.palette.COLOR_3,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      height: "60%",
      borderRadius: 0,
      width: "100%",
      backgroundColor: theme.palette.COLOR_3,
    },
    [theme.breakpoints.only("md")]: {
      height: 400,
    },
    [theme.breakpoints.only("lg")]: {
      height: 400,
    },
    [theme.breakpoints.up("xl")]: {
      height: 450,
    },
  })
);

interface sliderCardProps {
  url: string;
  backgroundSize?: string;
}

export const StyledMainBoxWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100%",
}));

export const StyledAIFashionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1,
  color: theme.palette.COLOR_11,
  lineHeight: "24px",
  fontStyle: "normal",
  fontSize: 18,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    color: theme.palette.common.black,
  },
}));

export const StyledCaptionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: 12,
  lineHeight: "19px",
  fontStyle: "normal",
  color: theme.palette.COLOR_11,
  marginBottom: 20,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 10,
    lineHeight: "13.64px",
  },
}));

export const StyledCloseButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
}));

export const StyledPreferredLookWrapper = styled(Box)(({ theme }) => ({
  paddingTop: 40,
  paddingLeft: 40,
  paddingRight: 40,
}));

export const StyledMyStyledLookWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: "30px 0px 0px 0px",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.COLOR_2,
  },
}));

export const StyledMyStyledTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 18,
  color: theme.palette.COLOR_12,
  lineHeight: "24.55px",
}));

export const StyledMyStyledCaption = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 12,
  fontWeight: 300,
  lineHeight: "16px",
}));

export const StyledSliderHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 0,
  marginBottom: 15,
}));

export const StyledSliderTitle = styled(Typography)(({ theme }) => ({
  fontSize: 25,
  color: theme.palette.primary.main,
}));

export const StyledSliderBoxWrapper = styled(Box)(({ theme }) => ({
  marginTop: 10,
  paddingBottom: 30,
}));

export const StyledSliderCard = styled(Box)<sliderCardProps>(
  ({ theme, url, backgroundSize }) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: backgroundSize ? backgroundSize : "contain",
    height: "188px",
    width: "100%",
    border: `10px solid ${theme.palette.COLOR_10}`,
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      height: "120px",
      border: `5px solid ${theme.palette.common.white}`,
    },
  })
);

export const StyledViewLooksBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  height: 50,
  textTransform: "uppercase",
  letterSpacing: 1,
}));

export const StyledAiEngineViewTopIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 20,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    top: 0,
    left: 5,
  },
}));

export const StyledMyLooksSelectionBox = styled(Box)(({ theme }) => ({
  minHeight: 50,
  paddingTop: 20,
  marginTop: 15,
  marginBottom: 30,
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 10,
    marginTop: 0,
    borderTop: `none`,
  },
}));

export const StyledStatusIcon = styled(Box)(({ theme }) => ({
  width: 20,
  height: 20,
  borderRadius: 100,
  border: `1px solid ${theme.palette.grey[300]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 10,
}));

export const StyledAiEngineLooksView = styled(Box)(({ theme }) => ({
  width: 250,
  height: "100%",
  overflow: "hidden",
  backgroundColor: theme.palette.COLOR_2,
  borderRadius: 20,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    width: 300,
  },
}));

export const StyledAiEngineSignalLoadingWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const StyledAiEngineSinalIndication = styled(Typography)(
  ({ theme }) => ({
    textAlign: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 0,
    fontSize: 11,
    color: theme.palette.COLOR_13,
  })
);

export const StyledAiEngineImage = styled("img")(({ theme }) => ({
  //width: "70%",
}));

export const StyledMobileSliderWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.common.white,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
  paddingLeft: 10,
  paddingRight: 10,
  height: "40%",
}));

export const StyledSliderArrows = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  position: "absolute",
  top: "50%",
  zIndex: 2,
}));

export const StyledLeftArrowButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: -25,
}));

export const StyledRightArrowButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: -25,
}));

export const StyledSectionHeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: "15px",
  paddingTop: 20,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 50,
    paddingRight: 50,
  },
}));

export const StyledLoaderIndication = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const StyledQuestionsHeader = styled(Box)(({ theme }) => ({
  paddingTop: 20,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
}));

export const StyledQuestionsBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  paddingTop: 20,
  paddingRight: 20,
  paddingBottom: 20,
}));
