import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useSession } from "next-auth/react";
import { NextRouter, useRouter } from "next/router";
import _ from "lodash";

// Apollo
import { useGetRecommendedLooks } from "../../src/config/apollo/actions/useGetRecommendedLooks";
import { useAddItemsToCart } from "../../src/apollo/actions/useAddItemsToCart";

// Components
import LooksProductView from "../../src/components/library/LooksProductView/LooksProductView";
import LooksFooterView from "../../src/components/library/LooksSelectedTabs/LooksSelectedTabs";
import ContainerWrapper from "../../src/components/library/ContainerWrapper/ContainerWrapperIndex";
import { AUTH_STATE } from "../../src/utils/enums";
import LoadingComponent from "../../src/components/library/Loading/LoadingIndex";

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  ...theme.boxWrapper,
  display: "flex",
  width: "100%",
  flexDirection: "column",
}));

const RecommendedLooksPage = () => {
  const { status } = useSession();
  const { getRecommendedLooks, looks, GURLLoading } = useGetRecommendedLooks();
  const { addCartItems } = useAddItemsToCart();

  const [tabIndex, setTabIndex] = useState<number>(looks.length);
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      getRecommendedLooks();
    }
  }, [status]);


  return (
    <ContainerWrapper>
      {GURLLoading ? (
        <LoadingComponent label="Loading Looks..." />
      ) : (
        <>
          {!_.isEmpty(looks) && (
            <StyledBoxWrapper>
              <LooksProductView product={looks[tabIndex]} />
              <LooksFooterView
                onClickByLook={() => {
                  if (!_.isEmpty(looks[tabIndex])) {
                    addCartItems(looks[tabIndex])
                      .then(() => {
                        alert("Successfully added cart item");
                      })
                      .catch((error) => {
                        alert(error);
                      });
                  } else {
                    alert("Cart items empty");
                  }
                }}
                tabIndex={tabIndex}
                onTabChange={(e, value) => {
                  setTabIndex(value);
                  router.push(
                    {
                      pathname: router.pathname,
                      query: { index: value },
                    },
                    undefined,
                    { shallow: true }
                  );
                }}
                tabsData={looks}
              />
            </StyledBoxWrapper>
          )}
        </>
      )}
    </ContainerWrapper>
  );
};

export default RecommendedLooksPage;
