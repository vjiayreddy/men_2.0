import { styled } from "@mui/material";
import ContainerWrapperComponent from "../../library/ContainerWrapper/ContainerWrapperIndex";

export const StyledAppMainContainer = styled(ContainerWrapperComponent)(
  ({ theme }) => ({
    ...theme.container,
  })
);
