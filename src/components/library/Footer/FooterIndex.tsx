import Box from "@mui/material/Box";
import React from "react";
import ContainerWrapperComponent from "../ContainerWrapper/ContainerWrapperIndex";
import {
  StyledFooterWrapper,
  StyledLocationWrapper,
  StyledContentTypography,
  StyledCopywriteContent,
} from "./styled";

const FooterComponent = () => {
  return (
    <ContainerWrapperComponent>
      <StyledFooterWrapper>
        <StyledLocationWrapper>
          <Box sx={{ marginTop: "5px", marginRight: "10px" }}>
            <img
              width={15}
              alt="asset-location-icon"
              src="./assets/location.svg"
            />
          </Box>
          <StyledContentTypography variant="subtitle2">
            Lakeshore drive, Michigan(c) Men 2.0
          </StyledContentTypography>
        </StyledLocationWrapper>
        <StyledCopywriteContent variant="subtitle2">
          © {new Date().getFullYear()} MEN 2.0 | All Rights Reserved
        </StyledCopywriteContent>
      </StyledFooterWrapper>
    </ContainerWrapperComponent>
  );
};

export default FooterComponent;
