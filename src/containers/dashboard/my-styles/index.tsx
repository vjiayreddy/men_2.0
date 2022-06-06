import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import FormCheckBoxGroup from "../../../components/library/Form/FormCheckboxGroup";
import MyStyledCardComponent from "../../../components/library/cards/MystyleCard";

// Apollo
import { useGetRecommendedLooks } from "../../../config/apollo/actions/useGetRecommendedLooks";
import { AUTH_STATE } from "../../../utils/enums";
import { useSession } from "next-auth/react";

const StyledMSContainer = styled(Box)(() => ({}));
const StyledMSContainerHeading = styled(Typography)(() => ({
  fontSize: `30px !important`,
  lineHeight: "49.1px",
}));

const MyStyleContainer = () => {
  const { status } = useSession();
  const { looks, GURLLoading, getRecommendedLooks } = useGetRecommendedLooks();
  useEffect(() => {
    if (status === AUTH_STATE.AUTHENTICATED) {
      getRecommendedLooks();
    }
  }, [status]);

  return (
    <StyledMSContainer>
      {GURLLoading ? (
        <>Loading</>
      ) : (
        <>
          <Box mb={3}>
            <StyledMSContainerHeading variant="h4">
              My personalised styles
            </StyledMSContainerHeading>
          </Box>
          <Divider />
          <Box pt={3} pb={3}>
            <FormCheckBoxGroup />
          </Box>
          <Divider />
          <Box pt={20} pb={6}>
            {looks && (
              <Grid container spacing={10}>
                {looks?.map((item, index) => (
                  <Grid key={index} item md={3}>
                    <MyStyledCardComponent
                      btnName="View"
                      onClickView={() => {
                        return;
                      }}
                      data={item}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </>
      )}
    </StyledMSContainer>
  );
};

export default MyStyleContainer;
