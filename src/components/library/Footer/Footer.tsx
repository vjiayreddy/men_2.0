import Grid from "@mui/material/Grid";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Hidden from "@mui/material/Hidden";
import Image from "next/image";
import {
  StyledFooterWrapper,
  StyledSocialIconsBox,
  StyledCopywriteContent,
  StyledLogoImage,
} from "./styled";

// Components
import ContainerWrapperComponent from "../ContainerWrapper/ContainerWrapperIndex";
import MenuListComponent from "./MenuList";
import { footerLinks } from "../../../utils/mockData";
import Box from "@mui/material/Box";

const FooterComponent = () => {
  return (
    <ContainerWrapperComponent>
      <StyledFooterWrapper>
        <Grid justifyContent="center" alignItems="flex-start" container>
          {footerLinks.map((item, index) => (
            <Grid key={index} item xs={6} md={2}>
              <MenuListComponent
                listTitle={item.menuTitle}
                links={item.menus}
                id={`menu-item-${index}`}
              />
            </Grid>
          ))}
          <Hidden only={["sm", "lg", "md", "xl"]}>
            <Grid item xs={6}></Grid>
          </Hidden>

          <Grid item xs={6} md={4}>
            <Box p={2}>
              <StyledLogoImage src="/assets/logo_white.svg" alt="men_2.0" />
            </Box>
            <StyledSocialIconsBox>
              <Box mr={2}>
                <IconButton sx={{ padding: 0 }}>
                  <Image
                    src="/social_icons/icon-insta.svg"
                    alt="insta-icon"
                    width={25}
                    height={25}
                    layout="fixed"
                  />
                </IconButton>
              </Box>
              <Box mr={1}>
                <IconButton sx={{ padding: 0 }}>
                  <Image
                    src="/social_icons/icon-twitter.svg"
                    alt="twitter-icon"
                    width={25}
                    height={25}
                    layout="fixed"
                  />
                </IconButton>
              </Box>
              <Box>
                <IconButton sx={{ padding: 0 }}>
                  <Image
                    src="/social_icons/icon_fb.svg"
                    alt="facebook-icon"
                    width={25}
                    height={25}
                    layout="fixed"
                  />
                </IconButton>
              </Box>
            </StyledSocialIconsBox>
          </Grid>
        </Grid>
        <StyledCopywriteContent>
          © 2022 MEN 2.0 | All Rights Reserved
        </StyledCopywriteContent>
      </StyledFooterWrapper>
    </ContainerWrapperComponent>
  );
};

export default FooterComponent;
