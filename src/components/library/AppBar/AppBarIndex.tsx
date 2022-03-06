import React from "react";
// Material UI
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { StyledNavActions, StyledMenuIcon, StyledAnchorLink } from "./styled";
import IconButton from "@mui/material/IconButton";
import LogoComponent from "../Logo/LogoIndex";
import Link from "next/link";

const AppBarComponent = () => {
  return (
    <AppBar color="secondary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LogoComponent id="men-2.0-logo" />
          <Box sx={{ flexGrow: 1 }} />
          <StyledNavActions>
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
                <StyledMenuIcon alt="icon-menu" src="./assets/menu_icon.svg" />
              </IconButton>
            </Box>
          </StyledNavActions>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
