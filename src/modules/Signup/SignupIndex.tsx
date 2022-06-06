import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

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

const SignUpModule = () => {
  return (
    <StyledLoginBoxWrapper backgroundImage="/assets/signUpbg.svg">
      <StyledLoginForm>
        <StyledWelcomeLabel variant="body1">Welcome !</StyledWelcomeLabel>
        <Box sx={{ marginTop: "15px" }}>
          <StyledSignToLabel variant="body1">Sign up to </StyledSignToLabel>
        </Box>
        <StyledCaptionLabel variant="body1">
          Lorem Ipsum is simply{" "}
        </StyledCaptionLabel>
        <StyledFormBox>
          <Box>
            <StyledFormInputLabel variant="body1">Email</StyledFormInputLabel>
            <InputBase
              placeholder="Enter your user name"
              id="demo-helper-text-misaligned-no-helper"
            />
          </Box>
          <Box sx={{ marginTop: "15px" }}>
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
              Password
            </StyledFormInputLabel>
            <InputBase
              placeholder="Enter your user name"
              id="demo-helper-text-misaligned-no-helper"
            />
          </Box>
          <Box sx={{ marginTop: "15px" }}>
            <StyledFormInputLabel variant="body1">
              Confrim Password
            </StyledFormInputLabel>
            <InputBase
              placeholder="Enter your user name"
              id="demo-helper-text-misaligned-no-helper"
            />
          </Box>
          <Box>
            <StyledActionButton variant="contained" fullWidth={true}>
              Sign up
            </StyledActionButton>
          </Box>
        </StyledFormBox>
      </StyledLoginForm>
    </StyledLoginBoxWrapper>
  );
};

export default SignUpModule;
