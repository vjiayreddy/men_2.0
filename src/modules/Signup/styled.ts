import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface loginBoxProps {
  backgroundImage: string;
}

export const StyledLoginBoxWrapper = styled(Box)<loginBoxProps>(
  ({ theme, backgroundImage }) => ({
    minWidth: 800,
    minHeight: 520,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backgroundImage})`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 30,
  })
);

export const StyledLoginForm = styled(Box)(({ theme }) => ({
  minWidth: 350,
  minHeight: 450,
  backgroundColor: theme.palette.common.white,
  borderRadius: 5,
  boxShadow: `10px 10px 18px rgba(0,0,0,0.3)`,
  padding: 20,
}));

export const StyledWelcomeLabel = styled(Typography)(({}) => ({
  fontSize: 20,
  fontWeight: 300,
}));

export const StyledSignToLabel = styled(Typography)(({}) => ({
  fontSize: 25,
  fontWeight: 600,
  marginBottom: 10,
}));

export const StyledCaptionLabel = styled(Typography)(({}) => ({
  fontSize: 12,
  fontWeight: 300,
}));

export const StyledFormBox = styled(Box)(({}) => ({
  paddingTop: 26,
}));

export const StyledFormInputLabel = styled(Typography)(({}) => ({
  fontSize: 14,
  fontWeight: 500,
  marginBottom: 10,
}));

export const StyledActionButton = styled(Button)(({}) => ({
  fontSize: 14,
  fontWeight: 500,
  marginTop: 30,
  borderRadius: 5,
}));
