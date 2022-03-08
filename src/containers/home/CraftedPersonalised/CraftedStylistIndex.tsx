import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

interface imageProps {
  height: string | number;
  image: string;
  backgroundSize?: string;
}

const ImageCard = styled(Box)<imageProps>(
  ({ theme, height, backgroundSize, image }) => ({
    width: "100%",
    height: height,
    backgroundSize: backgroundSize ? backgroundSize : "cover",
    backgroundImage: `url(${image})`,
    borderRadius: 20,
  })
);

const StyledActionCard = styled(Box)(({ theme }) => ({
  height: 300,
  padding: 15,
}));

const StyledActionCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: 30,
  lineHeight: "36px",
}));

const StyledActionCardContent = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  lineHeight: "24px",
}));

const StyledActionButton = styled(Button)(({ theme }) => ({
  color: theme.palette.COLOR_9,
}));

const StyledContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black,
  textAlign: "justify",
  fontSize: 18,
  lineHeight: "24px",
}));

const CraftedStylistContainer = () => {
  return (
    <ContainerWrapperComponent>
      <Grid container spacing={10} sx={{ flexGrow: 1 }}>
        <Grid item xs={3}>
          <Stack spacing={10} direction={"column"}>
            <StyledActionCard>
              <Box>
                <StyledActionCardTitle variant="subtitle2">
                  Crafted by stylists. Personalised for you.
                </StyledActionCardTitle>
              </Box>
              <Box sx={{ marginTop: "25px" }}>
                <StyledActionCardContent variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </StyledActionCardContent>
              </Box>
              <Box sx={{ marginTop: "25px" }}>
                <StyledActionButton variant="contained">
                  View more
                </StyledActionButton>
              </Box>
            </StyledActionCard>

            <ImageCard height="250px" image="./assets/carfted-1.svg" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={10} direction={"column"}>
            <ImageCard height="200px" image="./assets/carfted-2.svg" />
            <ImageCard height="350px" image="./assets/crafted-3.svg" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={10} direction={"column"}>
            <ImageCard height="350px" image="./assets/crafted-4.svg" />
            <ImageCard height="200px" image="./assets/crafted-5.svg" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={10} direction={"column"}>
            <ImageCard height="300px" image="./assets/crafted-5.svg" />
            <ImageCard height="250px" image="./assets/crafted-6.svg" />
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "150px" }}></Box>
      <Grid container>
        <Grid item md={6}>
          <Box sx={{ padding: "20px" }}>
            <StyledContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
              blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
              tristique, tortor mauris molestie elit, et lacinia ipsum quam nec
              dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
              blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
              tristique, tortor mauris molestie elit, et lacinia ipsum quam nec
              dui. Lorem ipsum dolor sit amet,
            </StyledContent>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box sx={{ padding: "20px" }}>
            <StyledContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
              blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
              tristique, tortor mauris molestie elit, et lacinia ipsum quam nec
              dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque. Duis
              vulputate commodo lectus, ac blandit elit tincidunt id. Sed
              rhoncus, tortor sed eleifend tristique, tortor mauris molestie
              elit, et lacinia ipsum quam nec dui.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla quam velit, vulputate eu
              pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
              blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend
              tristique, tortor mauris molestie elit, et lacinia ipsum quam nec
              dui. Lorem ipsum dolor sit amet,
            </StyledContent>
          </Box>
        </Grid>
      </Grid>
    </ContainerWrapperComponent>
  );
};

export default CraftedStylistContainer;
