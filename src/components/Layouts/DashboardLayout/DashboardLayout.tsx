import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// Components

import SidebarTabs from "./SideBarTabs/SidebarTabs";
import LoadingComponent from "../../library/Loading/LoadingIndex";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  onTabChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => void;
  tabIndex: number | boolean;
  loading?: boolean;
}

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: 30,
  backgroundColor: theme.palette.COLOR_1,
}));

const StyledSideTabs = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const StyledRenderContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: 30,
  minHeight: "81vh",
}));

const StyledLoadingIndication = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "81vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const tabs: string[] = ["My Styles", "My Orders", "Accounts", "Addresses"];

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  onTabChange,
  tabIndex,
  loading,
}) => {
  return (
    <StyledBoxWrapper>
      <Grid container>
        <Grid item xs={12} md={3} lg={3} xl={3}>
          <StyledSideTabs>
            <SidebarTabs
              onTabChange={onTabChange}
              tabIndex={tabIndex}
              title="Dashboard"
              tabs={tabs}
            />
          </StyledSideTabs>
        </Grid>
        <Grid item xs={12} md={9} lg={9} xl={9}>
          <StyledRenderContent>
            {loading ? (
              <StyledLoadingIndication>
                <LoadingComponent sx={{ position: "relative" }} label="Loading..." />
              </StyledLoadingIndication>
            ) : (
              <>{children}</>
            )}
          </StyledRenderContent>
        </Grid>
      </Grid>
    </StyledBoxWrapper>
  );
};

export default DashboardLayout;
