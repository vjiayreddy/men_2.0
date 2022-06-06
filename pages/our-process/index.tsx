import React from "react";
import FabricSection from "../../src/containers/our-process/FabricSection";
import SectionHandcrafted from "../../src/containers/our-process/SectionHandcrafted";
import CategoriesSection from "../../src/containers/our-process/CategoriesSection";
import StyleCategoriesContainer from "../../src/containers/home/StyleCategories/StyleCategories";

const OurProcessPage = () => {
  return (
    <div>
      <SectionHandcrafted />
      <FabricSection />
      <CategoriesSection
        image="/assets/category.png"
        title="Measurements"
        content={`We’re a menswear company like no other. We’ve made every effort to make sure you got from point A to the best-fitting clothes you’ve ever worn with ease, because finding your fit should never be unpleasant.`}
      />
      <CategoriesSection
        image="/assets/category.png"
        title="Stitching"
        content={`We’re a menswear company like no other. We’ve made every effort to make sure you got from point A to the best-fitting clothes you’ve ever worn with ease, because finding your fit should never be unpleasant.`}
        align="right"
      />
      <CategoriesSection
        image="/assets/category.png"
        title="Quality checks"
        content={`We’re a menswear company like no other. We’ve made every effort to make sure you got from point A to the best-fitting clothes you’ve ever worn with ease, because finding your fit should never be unpleasant.`}
        align="left"
      />
      <StyleCategoriesContainer />
    </div>
  );
};

export default OurProcessPage;
