import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

import {
  StyledLoginBoxWrapper,
  StyledLoginForm,
  StyledWelcomeLabel,
  StyledSignToLabel,
  StyledCaptionLabel,
  StyledFormBox,
  StyledFormInputLabel,
  StyledActionButton,
} from "./styled";
import { Button } from "@mui/material";

const SignInModule = () => {
  return (
    <StyledLoginBoxWrapper backgroundImage="./assets/loginBg.png">
      <StyledLoginForm>
        <StyledWelcomeLabel variant="body1">Welcome !</StyledWelcomeLabel>
        <Box sx={{ marginTop: "15px" }}>
          <StyledSignToLabel variant="body1">Sign in to </StyledSignToLabel>
        </Box>
        <StyledCaptionLabel variant="body1">
          Lorem Ipsum is simply{" "}
        </StyledCaptionLabel>
        <StyledFormBox>
          <Box>
            <StyledFormInputLabel variant="body1">
              User name
            </StyledFormInputLabel>
            <InputBase
              placeholder="Enter your user name"
              id="demo-helper-text-misaligned-no-helper"
            />
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <StyledFormInputLabel variant="body1">
              Enter your Password
            </StyledFormInputLabel>
            <InputBase
              placeholder="Enter your user name"
              id="demo-helper-text-misaligned-no-helper"
            />
          </Box>
          <Box>
            <StyledActionButton variant="contained" fullWidth={true}>
              Login
            </StyledActionButton>
          </Box>
        </StyledFormBox>
      </StyledLoginForm>
    </StyledLoginBoxWrapper>
  );
};

export default SignInModule;
