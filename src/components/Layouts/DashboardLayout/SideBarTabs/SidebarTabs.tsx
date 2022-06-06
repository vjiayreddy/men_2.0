import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";

export const StyledSideBarWrapper = styled(Box)(({ theme }) => ({
  minWidth: 250,
  paddingRight: 30,
  position: `sticky`,
  top: 150,
}));

export const StyledRenderContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.common.white,
  minHeight: `calc(100vh - 150px)`,
  padding: "40px",
  borderRadius: 5,
}));

export const StyledSidebarTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: `30px !important`,
  color: theme.palette.COLOR_15,
}));

export const StyledTabs = styled(Tabs)(() => ({
  "&.MuiTabs-root": {
    borderRight: "none",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  "&.MuiTab-root": {
    textTransform: "none",
    padding: `0px 10px`,
    fontSize: 16,
    color: theme.palette.common.black,
    textAlign: "left",
    height: 42,
    width: 120,
    lineHeight: "21.86px",
    backgroundColor: theme.palette.COLOR_17,
    marginBottom: 20,
    borderRadius: 100,
  },
  "&.Mui-selected": {
    border: `1px solid ${theme.palette.grey[500]}`,
    backgroundColor: theme.palette.common.white,
  },
}));

interface SidebarComponentPros {
  tabs: any[];
  title?: string;
  tabIndex: number | boolean;
  tabsSx?: SxProps;
  orientation?: "horizontal" | "vertical";
  onTabChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => void;
}

const SidebarComponent: React.FC<SidebarComponentPros> = ({
  title,
  tabs,
  tabIndex,
  tabsSx,
  orientation = "vertical",
  onTabChange,
}) => {
  return (
    <StyledSideBarWrapper>
      <Box>
        <StyledSidebarTitle variant="h6">{title}</StyledSidebarTitle>
      </Box>
      <Box mt={20}>
        <StyledTabs
          orientation={orientation}
          value={tabIndex}
          onChange={onTabChange}
          aria-label="side-bar"
          sx={tabsSx}
        >
          {tabs.map((tab, index) => (
            <StyledTab
              key={index}
              label={tab}
              id={`${tab}${index}`}
              aria-controls={`tab-${tab}-${index}`}
            />
          ))}
        </StyledTabs>
      </Box>
    </StyledSideBarWrapper>
  );
};

export default SidebarComponent;
