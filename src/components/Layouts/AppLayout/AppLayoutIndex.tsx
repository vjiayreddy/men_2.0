import React from "react";
import AppBarComponent from "../../library/AppBar/AppBarIndex";
import { StyledAppMainContainer } from "./styled";

interface appLayoutProps {
  children: React.ReactNode;
}

const AppLayoutComponent: React.FC<appLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <AppBarComponent></AppBarComponent>
      <StyledAppMainContainer>{children}</StyledAppMainContainer>
    </React.Fragment>
  );
};

export default AppLayoutComponent;
