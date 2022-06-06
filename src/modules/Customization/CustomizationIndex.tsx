import React from "react";
import IconButton from "@mui/material/IconButton";
import VerticalTabsComponent from "./VerticalTabs";
import CloseIcon from "@mui/icons-material/Close";
import LoadingComponent from "../../components/library/Loading/LoadingIndex";
import ImageRadioGroupComponent from "../../components/library/ImageRadioGroup/ImageRadioGroupIndex";

import {
  StyledMainBox,
  StyledHeaderBox,
  StyledHeaderTitle,
  StyledHeaderPrice,
  StyledCloseIconBox,
  StyledContentBox,
  StyledVerticalTabs,
  StyledRadiogroup,
  StyledFooterBox,
  StyledActionButton,
} from "./styled";

interface CustomizationModuleProps {
  onClose: () => void;
}

const CustomizationModule: React.FunctionComponent<CustomizationModuleProps> =
  ({ onClose }) => {
    return (
      <StyledMainBox>
        <StyledHeaderBox>
          <StyledHeaderTitle variant="body1">
            White Solid Shirt
          </StyledHeaderTitle>
          <StyledHeaderPrice variant="body1">$99</StyledHeaderPrice>
          <StyledCloseIconBox>
            <IconButton onClick={onClose} sx={{ padding: 0 }}>
              <CloseIcon />
            </IconButton>
          </StyledCloseIconBox>
        </StyledHeaderBox>
        <StyledContentBox>
          <StyledRadiogroup>
            {/* <LoadingComponent loaderSize={35} /> */}
            <ImageRadioGroupComponent/>
          </StyledRadiogroup>
          <StyledVerticalTabs>
            <VerticalTabsComponent />
          </StyledVerticalTabs>
        </StyledContentBox>
        <StyledFooterBox>
          <StyledActionButton variant="contained" color="inherit">
            Save Add To Cart
          </StyledActionButton>
          <StyledActionButton variant="contained" color="primary">
            Save Customization
          </StyledActionButton>
        </StyledFooterBox>
      </StyledMainBox>
    );
  };

export default CustomizationModule;
