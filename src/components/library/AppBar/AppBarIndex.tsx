import React, { useState, useEffect } from "react";
// Material UI
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Apollo
import { useGetCartByUserId } from "../../../apollo/actions/useGetCartByUserId";

import {
  ToolbarStyled,
  StyledNavActions,
  StyledMenuIcon,
  StyledAnchorLink,
  StyledLinkButton,
  StyledActionButton,
  StyledSignInDialog,
  StyledSignInDialogContainer,
  StyledhumburgBox,
  StyledTopDrawer,
  StyledTopDrawerLeftBox,
  StyledTopDrawerMenuCard,
  StyledMenuImage,
  StyledTopDrawerRightBox,
  StyledExtraLinksBox,
  StyledTabMenuBox,
  StyledTabs,
  StyledTab,
  StyledExtraLink,
  StyledVerticalDivider,
  StyledCloseIcon,
} from "./styled";
import IconButton from "@mui/material/IconButton";
import LogoComponent from "../Logo/LogoIndex";
import Link from "next/link";
import SignInForm from "../../../modules/Sign/SignInIndex";
import SignUpModule from "../../../modules/Signup/SignupIndex";
import { ROUTES } from "../../../config/routes/routes";
import ArrowLinkComponent from "../ArrowLink/ArrowLinkIndex";
import { CircularProgress, Hidden, Theme } from "@mui/material";
import Image from "next/image";
import { AUTH_STATE } from "../../../utils/enums";

interface NavigationMenuCardProps {
  label: string;
  image: string;
}

interface ImageIconProps {
  alt: string;
  icon: string;
  height?: number;
  width?: number;
  layout?: "fill" | "fixed" | "intrinsic" | "responsive";
  [x: string]: any;
}

const ImageIcon: React.FC<ImageIconProps> = ({
  alt,
  height,
  width,
  layout,
  icon,
  ...props
}) => {
  return (
    <Image
      {...props}
      alt={alt}
      src={icon}
      width={width ? width : 30}
      height={height ? height : 30}
      layout={layout ? layout : "fixed"}
    />
  );
};

const NavigationMenuCard: React.FC<NavigationMenuCardProps> = ({
  label,
  image,
}) => {
  return (
    <>
      <Box mb={4}>
        <ArrowLinkComponent
          labelSx={(theme: Theme) => ({
            [theme.breakpoints.up("xs")]: {
              color: theme.palette.common.white,
            },
          })}
          label={label}
          icon={
            <Image
              alt="arrow-icon-white"
              src="/assets/arrow_icon_white.svg"
              width={16}
              height={16}
              layout="fixed"
            />
          }
        />
      </Box>
      <StyledTopDrawerMenuCard>
        <StyledMenuImage src={image} alt={label} layout="fill" quality={100} />
      </StyledTopDrawerMenuCard>
    </>
  );
};

const AppBarComponent = () => {
  const { status } = useSession();
  const [tabsChange, setTabChange] = React.useState(0);
  const { gqlGetCartByUserId, cartItems, cartLoading } = useGetCartByUserId();
  const [openSignIn, setOpenSignIn] = useState<boolean>(false);
  const [openSignUp, setOpenSignUp] = useState<boolean>(false);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const router = useRouter();

  const handleNavigate = (URL: string) => {
    router.push(URL);
  };

  useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      gqlGetCartByUserId();
    }
  }, [status]);

  const handleTabsChange = (e: React.SyntheticEvent, value: any) => {
    setTabChange(value);
    // if (value === 0) {
    //   router.push(`${ROUTES.DASHBOARD}?mode=my-styles`);
    // } else if (value === 1) {
    //   router.push(`${ROUTES.DASHBOARD}?mode=my-orders`);
    // } else if (value === 2) {
    //   router.push(`${ROUTES.DASHBOARD}?mode=accounts`);
    // } else if (value === 3) {
    //   router.push(`about-us`);
    // } else if (value === 4) {
    //   router.push(`privacy-policy`);
    // }
  };

  return (
    <AppBar color="secondary">
      <Container maxWidth="lg">
        <ToolbarStyled disableGutters>
          <LogoComponent id="men-2.0-logo" />
          <Box sx={{ flexGrow: 1 }} />
          <Hidden only={["md", "lg", "xl"]}>
            <IconButton
              onClick={() => {
                router.push(ROUTES.CART);
              }}
              id="icon-cart"
            >
              <Badge badgeContent={cartItems.length} color="secondary">
                <ImageIcon alt="icon-cart" icon="/assets/cart_icon.svg" />
              </Badge>
            </IconButton>
          </Hidden>
          <StyledhumburgBox>
            <IconButton
              onClick={() => setOpenDrawer(!openDrawer)}
              id="icon-menu"
            >
              <StyledMenuIcon alt="icon-menu" src="/assets/menu_icon.svg" />
            </IconButton>
          </StyledhumburgBox>
          <StyledNavActions>
            {AUTH_STATE.UNAUTHENTICATED === status && (
              <StyledActionButton>
                <StyledLinkButton
                  onClick={() => {
                    handleNavigate(ROUTES.LOGIN);
                  }}
                  variant="text"
                  id="btn-sign-in"
                >
                  Sign in /
                </StyledLinkButton>
                <StyledLinkButton
                  onClick={() => {
                    handleNavigate(ROUTES.SIGNUP);
                  }}
                  variant="text"
                  id="btn-sign-up"
                >
                  Sign Up
                </StyledLinkButton>
              </StyledActionButton>
            )}
            {AUTH_STATE.AUTHENTICATED === status && (
              <StyledActionButton>
                <StyledLinkButton
                  onClick={() => {
                    signOut().then(() => {});
                  }}
                  variant="text"
                  id="btn-sign-in"
                >
                  Sign Out
                </StyledLinkButton>
              </StyledActionButton>
            )}

            <StyledActionButton>
              {AUTH_STATE.AUTHENTICATED === status && (
                <Box>
                  <Link href={ROUTES.DASHBOARD} passHref={true}>
                    <StyledAnchorLink>Dashboard</StyledAnchorLink>
                  </Link>
                </Box>
              )}

              {/* <Box>
                <IconButton id="icon-heart">
                  <ImageIcon alt="icon-heart" icon="/assets/like_icon.svg" />
                </IconButton>
              </Box> */}
              <Box>
                {cartLoading ? (
                  <CircularProgress size={16} />
                ) : (
                  <IconButton
                    onClick={() => {
                      router.push(ROUTES.CART);
                    }}
                    id="icon-cart"
                  >
                    <Badge badgeContent={cartItems.length} color="secondary">
                      <ImageIcon alt="icon-cart" icon="/assets/cart_icon.svg" />
                    </Badge>
                  </IconButton>
                )}
              </Box>
              <Box>
                <IconButton
                  onClick={() => setOpenDrawer(!openDrawer)}
                  id="icon-menu"
                >
                  <StyledMenuIcon alt="icon-menu" src="/assets/menu_icon.svg" />
                </IconButton>
              </Box>
            </StyledActionButton>
          </StyledNavActions>
        </ToolbarStyled>
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
      <StyledTopDrawer
        hideBackdrop={false}
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Grid container alignItems="stretch">
          <Grid item xs={12} md={8}>
            <StyledTopDrawerLeftBox>
              <Grid
                container
                spacing={10}
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} md={4} lg={4} xl={4}>
                  <NavigationMenuCard
                    label="Business leaders"
                    image="/assets/Businessleaders.png"
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4}>
                  <NavigationMenuCard
                    label="Executives"
                    image="/assets/exexutive_image.png"
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={4} xl={4}>
                  <NavigationMenuCard
                    label="Grooms"
                    image="/assets/groom_menu_image.png"
                  />
                </Grid>
              </Grid>
            </StyledTopDrawerLeftBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledTopDrawerRightBox>
              <StyledTabMenuBox>
                {AUTH_STATE.AUTHENTICATED === status ? (
                  <StyledTabs
                    orientation="vertical"
                    variant="scrollable"
                    value={tabsChange}
                    onChange={handleTabsChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: "divider" }}
                  >
                    <StyledTab
                      onClick={() => {
                        router.push(`${ROUTES.DASHBOARD}?mode=my-styles`);
                        setOpenDrawer(false);
                      }}
                      label="Your dashboard"
                    />
                    <StyledTab
                      onClick={() => {
                        router.push(`${ROUTES.DASHBOARD}?mode=my-orders`);
                        setOpenDrawer(false);
                      }}
                      label="Your orders"
                    />
                    <StyledTab
                      onClick={() => {
                        router.push(`${ROUTES.DASHBOARD}?mode=accounts`);
                        setOpenDrawer(false);
                      }}
                      divider="true"
                      label="Account settings"
                    />
                    <StyledTab
                      onClick={() => {
                        router.push(`about-us`);
                        setOpenDrawer(false);
                      }}
                      label="About"
                    />
                    <StyledTab divider="true" label="Policies" />
                  </StyledTabs>
                ) : (
                  <StyledTabs
                    orientation="vertical"
                    variant="scrollable"
                    value={tabsChange}
                    onChange={handleTabsChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: "divider" }}
                  >
                    <StyledTab
                      onClick={() => {
                        router.push(`about-us`);
                        setOpenDrawer(false);
                      }}
                      label="About"
                    />
                    <StyledTab divider="true" label="Policies" />
                  </StyledTabs>
                )}
              </StyledTabMenuBox>
              {AUTH_STATE.AUTHENTICATED === status && (
                <StyledExtraLinksBox>
                  <StyledExtraLink
                    id="btn-sign-out"
                    onClick={() => {
                      signOut().then(() => {
                        setOpenDrawer(false);
                      });
                    }}
                  >
                    SIGN OUT
                  </StyledExtraLink>
                </StyledExtraLinksBox>
              )}
              {AUTH_STATE.UNAUTHENTICATED === status && (
                <StyledExtraLinksBox>
                  <StyledExtraLink
                    id="btn-sign-in"
                    onClick={() => {
                      handleNavigate(ROUTES.LOGIN);
                    }}
                  >
                    SIGN IN
                  </StyledExtraLink>
                  <StyledVerticalDivider />
                  <StyledExtraLink
                    id="btn-sign-up"
                    onClick={() => {
                      handleNavigate(ROUTES.SIGNUP);
                    }}
                  >
                    SIGN UP
                  </StyledExtraLink>
                </StyledExtraLinksBox>
              )}
            </StyledTopDrawerRightBox>
          </Grid>
        </Grid>
        <StyledCloseIcon>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <ImageIcon
              width={16}
              height={16}
              alt="close-icon"
              icon="/assets/closeIconWhite.svg"
            />
          </IconButton>
        </StyledCloseIcon>
      </StyledTopDrawer>
    </AppBar>
  );
};

export default AppBarComponent;
