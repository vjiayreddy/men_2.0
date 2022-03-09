import React, { useState } from "react";
// Material UI
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {
  StyledNavActions,
  StyledMenuIcon,
  StyledAnchorLink,
  StyledLinkButton,
  StyledActionButton,
  StyledSignInDialog,
  StyledSignInDialogContainer,
} from "./styled";
import IconButton from "@mui/material/IconButton";
import LogoComponent from "../Logo/LogoIndex";
import Link from "next/link";
import SignInForm from "../../../modules/Sign/SignInIndex";
import SignUpModule from "../../../modules/Signup/SignupIndex";

const AppBarComponent = () => {
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);

  return (
    <AppBar color="secondary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LogoComponent id="men-2.0-logo" />
          <Box sx={{ flexGrow: 1 }} />
          <StyledNavActions>
            <StyledActionButton>
              <StyledLinkButton
                onClick={() => setOpenSignIn(true)}
                variant="text"
                id="btn-sign-in"
              >
                Sign in /
              </StyledLinkButton>
              <StyledLinkButton
                onClick={() => setOpenSignUp(true)}
                variant="text"
                id="btn-sign-up"
              >
                Sign Up
              </StyledLinkButton>
            </StyledActionButton>
            <StyledActionButton>
              <Box>
                <Link href="/dashboard">
                  <StyledAnchorLink>Dashboard</StyledAnchorLink>
                </Link>
              </Box>
              <Box>
                <IconButton id="icon-heart">
                  <img alt="icon-heart" src="./assets/like_icon.svg" />
                </IconButton>
              </Box>
              <Box>
                <IconButton id="icon-cart">
                  <img alt="icon-cart" src="./assets/cart_icon.svg" />
                </IconButton>
              </Box>
              <Box>
                <IconButton id="icon-menu">
                  <StyledMenuIcon
                    alt="icon-menu"
                    src="./assets/menu_icon.svg"
                  />
                </IconButton>
              </Box>
            </StyledActionButton>
          </StyledNavActions>
        </Toolbar>
        <StyledSignInDialog
          maxWidth={false}
          onClose={() => setOpenSignIn(false)}
          open={openSignIn}
        >
          <StyledSignInDialogContainer>
            <SignInForm />
          </StyledSignInDialogContainer>
        </StyledSignInDialog>
        <StyledSignInDialog
          maxWidth={false}
          onClose={() => setOpenSignUp(false)}
          open={openSignUp}
        >
          <StyledSignInDialogContainer>
            <SignUpModule />
          </StyledSignInDialogContainer>
        </StyledSignInDialog>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
