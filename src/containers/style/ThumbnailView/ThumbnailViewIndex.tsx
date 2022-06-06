import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";
import Dialog from "@mui/material/Dialog";
import { sliderData } from "../../../utils/mockData";
import {
  StyledThubnailMainWrapper,
  StyledTabsContainer,
  StyledTab,
  StyledActionsBoxWrapper,
  StyledThubnaiLayout,
  StyledLabelButtonWrapper,
  StyledPriceLabel,
  StyledDividerVertical,
} from "./styled";
import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";
import CustomizationModule from "../../../modules/Customization/CustomizationIndex";

interface thumbnailContainerProps {
  onBuyLook: () => void;
}

const ThumbnailContainer: React.FC<thumbnailContainerProps> = ({
  onBuyLook,
}) => {
  const [value, setValue] = React.useState(0);
  const [openCustomize, setOpenCustomize] = useState<boolean>(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledThubnailMainWrapper>
      <ContainerWrapperComponent>
        <StyledThubnaiLayout>
          <StyledTabsContainer
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={true}
            aria-label="scrollable force tabs example"
          >
            {sliderData.map((item, index) => (
              <StyledTab key={index} image={item.url} />
            ))}
          </StyledTabsContainer>
          <StyledActionsBoxWrapper>
            <StyledLabelButtonWrapper>
              <StyledPriceLabel variant="body1">$ 500</StyledPriceLabel>
              <Box sx={{ marginBottom: 2 }}>
                <Button
                  onClick={onBuyLook}
                  id="btn-buy-looks"
                  size="small"
                  variant="outlined"
                >
                  Buy this look
                </Button>
              </Box>
            </StyledLabelButtonWrapper>
            <StyledDividerVertical />
            <StyledLabelButtonWrapper>
              <StyledPriceLabel variant="body1">$ 300</StyledPriceLabel>
              <Box sx={{ marginBottom: 2 }}>
                <Button
                  onClick={() => {
                    setOpenCustomize(true);
                  }}
                  size="small"
                  variant="contained"
                >
                  Buy this look
                </Button>
              </Box>
            </StyledLabelButtonWrapper>
          </StyledActionsBoxWrapper>
        </StyledThubnaiLayout>
      </ContainerWrapperComponent>
      <Dialog
        fullScreen={true}
        onClose={() => {
          setOpenCustomize(false);
        }}
        open={openCustomize}
      >
        <CustomizationModule
          onClose={() => {
            setOpenCustomize(false);
          }}
        />
      </Dialog>
    </StyledThubnailMainWrapper>
  );
};

export default ThumbnailContainer;
