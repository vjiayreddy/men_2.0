import { Fragment } from "react";
import { NextPage } from "next";

// Components
import AiClothingContainer from "../src/containers/home/AiClothing";
import InfoContentContainer from "../src/containers/home/InfoContent/InfoContentIndex";
import CongnitiveClothingContainer from "../src/containers/home/CognitiveClothing/CongnitiveClothingIndex";
import StyleCategoriesContainer from "../src/containers/home/StyleCategories/StyleCategories";
import HandcraftedContaner from "../src/containers/home/Handcrafted/HandcraftedIndex";
import CraftedStylistContainer from "../src/containers/home/CraftedPersonalised/CraftedStylistIndex";
import TestimonialSliderComponent from "../src/components/library/TestimonialSlider";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <AiClothingContainer />
      <InfoContentContainer />
      <CongnitiveClothingContainer />
      <StyleCategoriesContainer />
      <HandcraftedContaner />
      <CraftedStylistContainer />
      <TestimonialSliderComponent/>
    </Fragment>
  );
};

export default HomePage;
