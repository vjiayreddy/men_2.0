import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import { useSession } from "next-auth/react";
import Hidden from "@mui/material/Hidden";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

import {
  StyledBoxWithGradent,
  GridStyled,
  NavigationGridStyled,
  StyledImageBox,
  StyledBg2Box,
  Styled2VectorImg,
  StyledNextImage,
  StyledMenAiImg,
  StyledVectorMImg,
  StyledMainTypography,
  StyledSpanTitle,
  StyledCaptionTypography,
  StyledVerticalTypography,
  StyledVerticalTypographyWrapper,
  StyledAiProfileDialog,
  StyledAiProfileDialogContainer,
} from "./styled";

// Components
import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import ArrowLinkComponent from "../../../components/library/ArrowLink/ArrowLinkIndex";
import AiFashionProfiler from "../../../features/AiFashionProfile/AiFashionProfile";
import DialogModelComponent from "../../../components/library/DialogModel/DialogModel";
import { AUTH_STATE } from "../../../utils/enums";
import { ROUTES } from "../../../config/routes/routes";

const AiClothingContainer = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const [isAuth, setIsAuth] = React.useState<boolean>(false);
  const { status } = useSession();

  const MenuNavigation = () => {
    return (
      <NavigationGridStyled
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <ArrowLinkComponent
            onClick={() => {
              if (AUTH_STATE.AUTHENTICATED === status) {
                window.localStorage.removeItem("REDIRECT");
                setOpen(true);
              } else {
                window.localStorage.setItem("REDIRECT", "#BUSINESS_LEADERS");
                router.push(ROUTES.SIGNUP);
              }
            }}
            label="Business leaders"
          />
        </Grid>
        <Grid item>
          <ArrowLinkComponent onClick={() => {}} label="Executives" />
        </Grid>
        <Grid item>
          <ArrowLinkComponent label="Grooms" />
        </Grid>
      </NavigationGridStyled>
    );
  };

  React.useEffect(() => {
    if (router) {
      if (window.localStorage.getItem("REDIRECT")) {
        setOpen(true);
      }
    }
  }, [router]);

  return (
    <>
      <StyledBoxWithGradent>
        <GridStyled container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={7} lg={7}>
            <Hidden only={["md", "lg", "xl"]}>
              <Typography
                marginBottom="10px"
                display="block"
                align="center"
                variant="caption"
              >
                BUILT BY MEN. FOR MEN.
              </Typography>
            </Hidden>
            <Hidden only="xs">
              <StyledMainTypography variant="h3">
                <StyledSpanTitle>Handcrafted mensware</StyledSpanTitle>. powered
                by AI, customized for you
              </StyledMainTypography>
            </Hidden>
            <Hidden only={["md", "lg", "xl"]}>
              <StyledMainTypography variant="h3">
                The no-nonsense clothing solution
                <StyledSpanTitle> men</StyledSpanTitle> deserve.
              </StyledMainTypography>
            </Hidden>

            <Hidden only="xs">
              <Box sx={{ marginTop: "29px" }}>
                <StyledCaptionTypography variant="caption">
                  Discover your style and uncover your looks. Start now.
                </StyledCaptionTypography>
              </Box>
            </Hidden>
            <Hidden only={"xs"}>
              <Box sx={{ paddingTop: "10px", width: "75%" }}>
                <MenuNavigation />
              </Box>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <StyledImageBox>
              <Hidden only={"xs"}>
                <StyledMenAiImg alt="asset-men-ai" src="/assets/men_ai.svg" />
              </Hidden>
              <Hidden only={["md", "lg", "xl"]}>
                <StyledNextImage
                  alt="asset-ai-mobile"
                  src="/assets/ai-mobile.svg"
                  layout="fixed"
                  quality={100}
                  width={`248.34px`}
                  height={`297.53px`}
                />
              </Hidden>
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
              >
                <StyledBg2Box>
                  <Styled2VectorImg alt="asset-vector-2" src="/assets/2.svg" />
                </StyledBg2Box>
              </Grow>
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                {...{ timeout: 2000 }}
              >
                <StyledVectorMImg
                  alt="asset-vector-m"
                  src="/assets/m.svg"
                ></StyledVectorMImg>
              </Grow>
            </StyledImageBox>
          </Grid>
        </GridStyled>
        <Hidden only={["xs"]}>
          <StyledVerticalTypographyWrapper>
            <StyledVerticalTypography variant="caption">
              BUILT BY MEN. FOR MEN.
            </StyledVerticalTypography>
          </StyledVerticalTypographyWrapper>
        </Hidden>
      </StyledBoxWithGradent>
      <Hidden only={["md", "lg", "xl"]}>
        <Box sx={{ paddingTop: "10px", width: "100%" }}>
          <MenuNavigation />
        </Box>
      </Hidden>
      <DialogModelComponent
        title="Request for Sign-up/Sign-In "
        content="You are about to experience a AI Recommendation Engine based on your Personalisation. We request you to Please Sign up/Sign-in in order to move ahead. Click below "
        onClose={() => setIsAuth(false)}
        open={isAuth}
        actions={
          <>
            <Button
              id="btn-signup"
              onClick={() => {
                router.push(ROUTES.SIGNUP);
              }}
            >
              SIGN UP
            </Button>
            <Button
              onClick={() => setIsAuth(false)}
              id="btn-error"
              color="error"
            >
              Cancel
            </Button>
          </>
        }
      ></DialogModelComponent>

      <StyledAiProfileDialog
        fullScreen={true}
        open={open}
        hideBackdrop={true}
        onClose={() => setOpen(false)}
      >
        <ContainerWrapperComponent sx={{ height: "100vh" }}>
          <StyledAiProfileDialogContainer>
            <AiFashionProfiler
              onClose={() => {
                window.localStorage.removeItem("REDIRECT");
                setOpen(false);
              }}
            />
          </StyledAiProfileDialogContainer>
        </ContainerWrapperComponent>
      </StyledAiProfileDialog>
    </>
  );
};

export default AiClothingContainer;
