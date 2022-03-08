import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import StyleCategoryCardComponent from "../../../components/library/cards/StyleCategory/StyleCategoryIndex";

const data = [
  {
    title: "Business leaders",
    image: "business_leaders.svg",
    content: `Boardroom to Zoom to morning standups - find the right style & looks.`,
  },
  {
    title: "Executives",
    image: "executives.svg",
    content: `The corporate ladder has no idea the style you’re going to hit them with.`,
  },
  {
    title: "Grooms",
    image: "groom.svg",
    content: `Make your big day your best dressed way with our weddingwear.`,
  },
];

const StyleCategoriesContainer = () => {
  return (
    <ContainerWrapperComponent>
      <Box sx={{ padding: "0px 70px" }}>
        <Grid container justifyContent="stretch" spacing={25}>
          {data.map((_item, index) => (
            <Grid item key={index} md={4}>
              <StyleCategoryCardComponent
                image={`./assets/${_item.image}`}
                title={_item.title}
                content={_item.content}
                onClickbtn={() => {}}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ContainerWrapperComponent>
  );
};

export default StyleCategoriesContainer;
