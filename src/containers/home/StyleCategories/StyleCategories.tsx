import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import { styled } from "@mui/material";
import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import StyleCategoryCardComponent from "../../../components/library/cards/StyleCategory/StyleCategoryIndex";

type cardDataType = {
  title: string;
  image: string;
  content: string;
};

const data: cardDataType[] = [
  {
    title: "Business leaders",
    image: "business_leaders.svg",
    content: `Boardroom to Zoom to morning standups - find the right style & looks.`,
  },
  {
    title: "Executives",
    image: "executives.png",
    content: `The corporate ladder has no idea the style you’re going to hit them with.`,
  },
  {
    title: "Grooms",
    image: "grooming.png",
    content: `Make your big day your best dressed way with our weddingwear.`,
  },
];

const StyledCardBox = styled(Box)(({ theme }) => ({
  paddingTop: "150px",
  paddingBottom: "50px",
  [theme.breakpoints.down("sm")]: {
    padding: `40px 30px`,
  },
}));

const StyleCategoriesContainer = () => {
  return (
    <StyledCardBox>
      <Hidden only={["xs"]}>
        <Grid container justifyContent="stretch" spacing={25}>
          {data.map((_item, index) => (
            <Grid item key={index} md={4}>
              <StyleCategoryCardComponent
                image={`/assets/${_item.image}`}
                title={_item.title}
                content={_item.content}
                onClickbtn={() => {}}
              />
            </Grid>
          ))}
        </Grid>
      </Hidden>
      <Hidden only={["md", "lg", "xl"]}>
        <StyleCategoryCardComponent
          image={`/assets/${data[0].image}`}
          title={data[0].title}
          content={data[0].content}
          onClickbtn={() => {}}
        />
      </Hidden>
    </StyledCardBox>
  );
};

export default StyleCategoriesContainer;
