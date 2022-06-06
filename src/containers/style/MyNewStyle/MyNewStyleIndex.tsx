import React, { Fragment } from "react";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const StyledNewStyledBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
}));

export const StyledButtonBoxWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
}));

export const StyledMyNewStyledLabel = styled(Typography)(({ theme }) => ({
  fontSize: `25px !important`,
  color: theme.palette.primary.main,
  fontWeight: 200,
  [theme.breakpoints.down("sm")]: {
    fontSize: `18px !important`,
  },
}));

export const StyledLinkedBtnLabel = styled(Button)(({ theme }) => ({
  fontSize: `14px !important`,
  color: theme.palette.primary.main,
  fontWeight: 300,
  textTransform: "none",
  textDecoration: "underline",
  marginRight: 10,
  padding: 0,
  "&:hover": {
    textDecoration: "underline",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: `12px !important`,
  },
}));

export const StyledAiEngineView = styled(Box)(({ theme }) => ({
  width: 230,
  backgroundColor: theme.palette.COLOR_2,
  color: theme.palette.primary.main,
  marginTop: 25,
  height: 290,
  borderRadius: 20,
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
}));

export const StyledAiEngineViewHeader = styled(Box)(({ theme }) => ({
  top: 10,
  right: 10,
  position: "absolute",
  display: "flex",
}));

const MyNewStyleContainer = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Fragment>
      <StyledNewStyledBoxWrapper>
        <Box sx={{ marginRight: 10 }}>
          <StyledMyNewStyledLabel variant="h4">
            My new style
          </StyledMyNewStyledLabel>
        </Box>
        <Box>
          <IconButton>
            <img alt="asset-edit-icon" src="/assets/editIcon.svg" />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <img alt="asset-heart-lined-icon" src="/assets/heartLined.svg" />
          </IconButton>
        </Box>
      </StyledNewStyledBoxWrapper>
      <StyledButtonBoxWrapper>
        <StyledLinkedBtnLabel onClick={() => setOpen(true)} variant="text">
          View Style
        </StyledLinkedBtnLabel>
        <StyledLinkedBtnLabel variant="text">Modify style</StyledLinkedBtnLabel>
      </StyledButtonBoxWrapper>
      {open && (
        <StyledAiEngineView>
          <img
            width="60%"
            alt="asset-ai-profile"
            src="/assets/ai-profile.svg"
          />
          <StyledAiEngineViewHeader>
            <IconButton>
              <img alt="asset-icon-adjust" src="/assets/adjustFrame.svg" />
            </IconButton>
            <IconButton onClick={() => setOpen(false)}>
              <img alt="asset-icon-close" src="/assets/circleCloseIcon.svg" />
            </IconButton>
          </StyledAiEngineViewHeader>
        </StyledAiEngineView>
      )}
    </Fragment>
  );
};

export default MyNewStyleContainer;
