import { Fragment } from "react";
import { NextPage } from "next";

// Components
import AiClothingContainer from "../src/containers/home/AiClothing";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <AiClothingContainer />
    </Fragment>
  );
};

export default HomePage;            
