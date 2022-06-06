import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tooltip from "@mui/material/Tooltip";

import { styled } from "@mui/material";

function a11yProps(index: number) {
  return {
    id: `customization-option-${index}`,
    "aria-controls": `customization-options-panel-${index}`,
  };
}

const StyledTabs = styled(Tabs)(() => ({
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.MuiTab-root": {
    justifyContent: "space-between",
    textTransform: "none",
    padding: `0px 10px`,
    minHeight: 45,
    fontSize: 14,
    color: theme.palette.common.black,
    borderBottom: `1px solid ${theme.palette.divider}`,
    textAlign: "left",
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.grey[200],
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
}));

const StyledTabIcon = styled("img")(({ theme }) => ({
  width: 25,
  paddingLeft: 10,
}));

const tabsData = [
  "Fit Type",
  "Sleve Type",
  "Collar Type",
  "Cuff Type",
  "Pocket Type",
  "Back Styling",
  "Back Styling",
  "Additional Notes",
];

const VerticalTabsComponent = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <StyledTabs
      aria-label="customization-options"
      onChange={handleChange}
      orientation="vertical"
      value={tabIndex}
      centered={false}
      variant="scrollable"
      visibleScrollbar={true}
    >
      {tabsData.map((tab, index) => (
        <StyledTab
          wrapped={true}
          key={index}
          iconPosition="end"
          icon={
            <Tooltip title={tab}>
              <StyledTabIcon alt="" src="/assets/info.svg" />
            </Tooltip>
          }
          label={tab}
          {...a11yProps(index)}
        />
      ))}
    </StyledTabs>
  );
};

export default VerticalTabsComponent;
