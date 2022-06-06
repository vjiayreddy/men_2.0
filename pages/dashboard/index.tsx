import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { NextRouter, useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import { AUTH_STATE, DASHBOARD_TABS } from "../../src/utils/enums";
import { useSession } from "next-auth/react";
// Apollo
import { useGetRecommendedLooks } from "../../src/config/apollo/actions/useGetRecommendedLooks";

// Components
import MyStyles from "../../src/containers/dashboard/my-styles";
import DashboardLayout from "../../src/components/Layouts/DashboardLayout/DashboardLayout";
import MyOrdersContainer from "../../src/containers/dashboard/my-orders/MyOrders";

const tabs: string[] = ["My Styles", "My Orders", "Accounts", "Addresses"];

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  ...theme.boxWrapper,
  backgroundColor: theme.palette.COLOR_1,
  flexDirection: "row",
  paddingLeft: 30,
  paddingRight: 30,
  height: "100%",
}));

const StyledContentBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  marginTop: 50,
  marginBottom: 30,
  borderRadius: 5,
  width: "100%",
  padding: `30px`,
  height: "100%",
  minHeight: `calc(100vh - 150px)`,
}));

const updateTabIndex = (value: string, stateTabIndex: any) => {
  switch (value) {
    case DASHBOARD_TABS.MY_STYLES:
      stateTabIndex(0);
      return;
    case DASHBOARD_TABS.MY_ORDERS:
      stateTabIndex(1);
      return;
    case DASHBOARD_TABS.ACCOUNTS:
      stateTabIndex(2);
      return;
    case DASHBOARD_TABS.ADDRESSES:
      stateTabIndex(3);
      return;
    default:
      stateTabIndex(0);
  }
};

const DashboardPage = () => {
  const [tabIndex, setTabIndex] = useState<number | boolean>(0);
  const router: NextRouter = useRouter();
  const { data: session, status } = useSession();
  const { looks, GURLLoading, getRecommendedLooks } = useGetRecommendedLooks();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    const _selectedTab = tabs[newValue].replaceAll(" ", "-").toLowerCase();
    router.push(
      {
        pathname: router.pathname,
        query: { mode: _selectedTab },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    if (router.query?.mode) {
      const mode: string = router.query.mode as string;
      updateTabIndex(mode, setTabIndex);
    }
  }, [router]);

  useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      getRecommendedLooks();
    }
  }, [status]);

  return (
    <DashboardLayout
      loading={false}
      onTabChange={handleTabChange}
      tabIndex={tabIndex}
    >
      {tabIndex === 0 && <MyStyles />}
      {tabIndex === 1 && <MyOrdersContainer />}
    </DashboardLayout>
  );
};

export default DashboardPage;
