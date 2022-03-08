import { Fragment } from "react";
import { NextPage } from "next";
import Box from "@mui/material/Box";

// Components
import AiClothingContainer from "../src/containers/home/AiClothing";
import InfoContentContainer from "../src/containers/home/InfoContent/InfoContentIndex";
import CongnitiveClothingContainer from "../src/containers/home/CognitiveClothing/CongnitiveClothingIndex";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <AiClothingContainer />
      <Box sx={{ paddingTop: "150px" }}>
        <InfoContentContainer />
      </Box>
      <Box sx={{ paddingTop: "20px" }}>
        <CongnitiveClothingContainer />
      </Box>
    </Fragment>
  );
};

export default HomePage;
