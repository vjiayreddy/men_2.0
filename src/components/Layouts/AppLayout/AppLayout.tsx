import React from "react";
import AppBarComponent from "../../library/AppBar/AppBarIndex";
import FooterComponent from "../../library/Footer/Footer";
import { StyledAppMainContainer } from "./styled";
import { useRouter } from "next/router";
interface appLayoutProps {
  children: React.ReactNode;
}

const showFooter = (route) => {
  if (
    route.pathname === "/" ||
    route.pathname === "/about-us" ||
    route.pathname === "/our-process"
  ) {
    return true;
  } else {
    return false;
  }
};

const AppLayoutComponent: React.FC<appLayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <AppBarComponent />
      <StyledAppMainContainer>{children}</StyledAppMainContainer>\
      {showFooter(router) && <FooterComponent />}
      {/* {router.pathname === "/" || router.pathname==="/about-us" && <FooterComponent />} */}
    </React.Fragment>
  );
};

export default AppLayoutComponent;
