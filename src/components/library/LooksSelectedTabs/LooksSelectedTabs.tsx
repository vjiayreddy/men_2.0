import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { sliderData } from "../../../utils/mockData";
import LooksPriceBox from "../LooksPriceBox/LooksPriceBox";
import ContainerWrapperComponent from "../ContainerWrapper/ContainerWrapperIndex";

// Components

interface StyledTabProps {
  image: string;
  backgroundSize?: string;
}

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  height: 100,
  left: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  //justifyContent: "flex-start",
  width: "100%",
  backgroundColor: theme.palette.COLOR_1,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const StyledContainerSection = styled(ContainerWrapperComponent)(
  ({ theme }) => ({})
);

const StyledLooksTabsBox = styled(Box)(({ theme }) => ({
  width: "70%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 30,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: 20,
  },
}));
const StyledLooksPriceBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "30%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "center",
  },
}));

export const StyledTabs = styled(Tabs)(({}) => ({
  width: "100%",
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

export const StyledTab = styled(Tab)<StyledTabProps>(
  ({ theme, image, backgroundSize }) => ({
    minWidth: 10,
    width: 75,
    height: 80,
    marginLeft: 10,
    borderRadius: 10,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundSize: backgroundSize ? backgroundSize : "cover",
    backgroundImage: `url(${image})`,
    "&.Mui-selected": {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  })
);

interface LooksSelectedTabsComponentProps {
  tabsData: any[];
  tabIndex: number;
  onTabChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => void;
  onClickByLook: () => void;
}

const LooksSelectedTabsComponent: React.FC<LooksSelectedTabsComponentProps> = ({
  tabsData,
  onTabChange,
  tabIndex,
  onClickByLook,
}) => {
  const theme = useTheme();
  const isSxDownDevice = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <StyledBoxWrapper>
      <StyledLooksTabsBox>
        {tabsData && (
          <StyledTabs
            value={tabIndex}
            onChange={onTabChange}
            variant="scrollable"
            scrollButtons="auto"
            visibleScrollbar={isSxDownDevice}
          >
            {tabsData.map((item, index) => (
              <StyledTab key={index} image={item.image} />
            ))}
          </StyledTabs>
        )}
      </StyledLooksTabsBox>
      <StyledLooksPriceBox>
        <LooksPriceBox
          price={tabsData[tabIndex]["lookPrice"]}
          onClick={onClickByLook}
        />
      </StyledLooksPriceBox>
    </StyledBoxWrapper>
  );
};

export default LooksSelectedTabsComponent;
