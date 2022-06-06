import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import {
  StyledGrid,
  ImageCardWrapper,
  StyledActionCard,
  StyledActionCardTitle,
  StyledActionCardContent,
  StyledActionButton,
  StyledBoxWrapper,
} from "./styled";
import { Hidden } from "@mui/material";

const MdDeviceGallaryView = () => {
  return (
    <StyledGrid container spacing={10} sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={3} lg={3} xl={3}>
        <Stack spacing={10} direction={"column"}>
          <StyledActionCard>
            <Box>
              <StyledActionCardTitle variant="subtitle2">
                Crafted by stylists. Personalized for you.
              </StyledActionCardTitle>
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <StyledActionCardContent variant="body1">
                Our bespoke designs are made to bring out the best in you
              </StyledActionCardContent>
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <StyledActionButton variant="contained">
                View more
              </StyledActionButton>
            </Box>
          </StyledActionCard>
          <ImageCardWrapper height="250px">
            <Image
              alt="carfted-1"
              src="/assets/carfted-1.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
        </Stack>
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3}>
        <Stack spacing={10} direction={"column"}>
          <ImageCardWrapper height="200px">
            <Image
              alt="carfted-2"
              src="/assets/carfted-2.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
          <ImageCardWrapper height="350px">
            <Image
              alt="carfted-3"
              src="/assets/crafted-3.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
        </Stack>
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3}>
        <Stack spacing={10} direction={"column"}>
          <ImageCardWrapper height="350px">
            <Image
              alt="carfted-4"
              src="/assets/crafted-4.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
          <ImageCardWrapper height="200px">
            <Image
              alt="carfted-5"
              src="/assets/crafted-5.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
        </Stack>
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3}>
        <Stack spacing={10} direction={"column"}>
          <ImageCardWrapper height="300px">
            <Image
              alt="carfted-5"
              src="/assets/crafted-5.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
          <ImageCardWrapper height="250px">
            <Image
              alt="carfted-6"
              src="/assets/crafted-6.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
        </Stack>
      </Grid>
    </StyledGrid>
  );
};

const SxDeviceGallaryView = () => {
  return (
    <StyledGrid container spacing={0} sx={{ flexGrow: 1 }}>
      <Grid item xs={12} md={3} lg={3} xl={3}>
        <Stack spacing={0} direction={"column"}>
          <StyledActionCard>
            <Box>
              <StyledActionCardTitle variant="subtitle2">
                Crafted by stylists. Personalised for you.
              </StyledActionCardTitle>
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <StyledActionCardContent variant="body1">
                Our bespoke designs are made to bring out the best in you
              </StyledActionCardContent>
            </Box>
            <Box sx={{ marginTop: "25px" }}>
              <StyledActionButton variant="contained">
                View more
              </StyledActionButton>
            </Box>
          </StyledActionCard>
        </Stack>
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3}>
        <Stack spacing={0}>
          <ImageCardWrapper height="165px">
            <Image
              alt="carfted-2"
              src="/assets/carfted-2.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
          <ImageCardWrapper height="247px">
            <Image
              alt="carfted-3"
              src="/assets/crafted-3.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
        </Stack>
      </Grid>
      <Grid item xs={6} md={3} lg={3} xl={3}>
        <Stack spacing={0} direction={"column"}>
          <ImageCardWrapper height="273px">
            <Image
              alt="carfted-4"
              src="/assets/crafted-4.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
          <ImageCardWrapper height="140px">
            <Image
              alt="carfted-5"
              src="/assets/crafted-5.svg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </ImageCardWrapper>
        </Stack>
      </Grid>
    </StyledGrid>
  );
};

const CraftedStylistContainer = () => {
  return (
    <StyledBoxWrapper>
      <Hidden only={"xs"}>
        <MdDeviceGallaryView />
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <SxDeviceGallaryView />
      </Hidden>
    </StyledBoxWrapper>
  );
};

export default CraftedStylistContainer;
