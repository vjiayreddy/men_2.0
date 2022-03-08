import React from "react";
import AppBarComponent from "../../library/AppBar/AppBarIndex";
import FooterComponent from "../../library/Footer/FooterIndex";
import { StyledAppMainContainer } from "./styled";

interface appLayoutProps {
  children: React.ReactNode;
}

const AppLayoutComponent: React.FC<appLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <AppBarComponent />
      <StyledAppMainContainer>{children}</StyledAppMainContainer>
      <FooterComponent />
    </React.Fragment>
  );
};

export default AppLayoutComponent;
