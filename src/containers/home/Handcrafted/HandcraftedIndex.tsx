import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

import ContainerWrapperComponent from "../../../components/library/ContainerWrapper/ContainerWrapperIndex";

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.COLOR_5,
  textAlign: "right",
  lineHeight:'125px'
}));

const HandcraftedContaner = () => {
  return (
    <Box sx={{ padding: "0px 110px" }}>
      <ContainerWrapperComponent>
        <StyledHeading variant="h1">
          Handcrafted for your unique male lifestyle.
        </StyledHeading>
      </ContainerWrapperComponent>
    </Box>
  );
};

export default HandcraftedContaner;
