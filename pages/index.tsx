import { Fragment } from "react";
import { NextPage } from "next";
import Box from "@mui/material/Box";

// Components
import AiClothingContainer from "../src/containers/home/AiClothing";
import InfoContentContainer from "../src/containers/home/InfoContent/InfoContentIndex";
import CongnitiveClothingContainer from "../src/containers/home/CognitiveClothing/CongnitiveClothingIndex";
import StyleCategoriesContainer from "../src/containers/home/StyleCategories/StyleCategories";
import HandcraftedContaner from "../src/containers/home/Handcrafted/HandcraftedIndex";
import CraftedStylistContainer from "../src/containers/home/CraftedPersonalised/CraftedStylistIndex";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Box sx={{ paddingTop: "30px" }}>
        <AiClothingContainer />
      </Box>

      <Box sx={{ paddingTop: "150px" }}>
        <InfoContentContainer />
      </Box>
      <Box sx={{ paddingTop: "20px" }}>
        <CongnitiveClothingContainer />
      </Box>
      <Box sx={{ paddingTop: "175px", paddingBottom: "75px" }}>
        <StyleCategoriesContainer />
      </Box>
      <Box>
        <HandcraftedContaner />
      </Box>
      <Box sx={{ padding: "75px 0px" }}>
        <CraftedStylistContainer />
      </Box>
    </Fragment>
  );
};

export default HomePage;
