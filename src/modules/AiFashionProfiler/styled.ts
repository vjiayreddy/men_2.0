import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

interface sliderCardProps {
  url: string;
  backgroundSize?: string;
}

export const StyledMainBoxWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
}));

export const StyledAIFashionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: 1,
  color: theme.palette.COLOR_11,
  lineHeight: "24px",
  fontStyle: "normal",
  fontSize: 18,
}));

export const StyledCaptionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: 12,
  lineHeight: "19px",
  fontStyle: "normal",
  color: theme.palette.COLOR_11,
}));

export const StyledCloseButton = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
}));

export const StyledPreferredLookWrapper = styled(Box)(({ theme }) => ({
  padding: 40,
}));

export const StyledMyStyledLookWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: "50px 0px 0px 0px",
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  position: "relative",
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
  paddingTop: 30,
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
  })
);

export const StyledViewLooksBtn = styled(Button)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: 67,
  textTransform: "uppercase",
  letterSpacing: 1,
}));

export const StyledAiEngineLooksView = styled(Box)(({ theme }) => ({
  width: 300,
  height: 400,
  backgroundColor: theme.palette.COLOR_2,
  borderRadius: 20,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const StyledAiEngineViewTopIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 20,
  right: 20,
}));

export const StyledAiEngineSinalIndication = styled(Typography)(
  ({ theme }) => ({
    textAlign: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 30,
    fontSize: 12,
    color: theme.palette.COLOR_13,
  })
);

export const StyledMyLooksSelectionBox = styled(Box)(({ theme }) => ({}));
