import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { SxProps } from "@mui/system";

interface LoadingComponentProps {
  component?: React.ReactNode;
  label?: string;
  labelSx?: SxProps;
  loaderSx?: SxProps;
  loaderSize?: string | number;
  [x: string]: any;
}

const StyledMainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "absolute",
  height: "100%",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledLoaderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledStatusLabel = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 20,
  textAlign: "center",
}));

const LoadingComponent: React.FunctionComponent<LoadingComponentProps> = ({
  component,
  label,
  labelSx,
  loaderSize,
  loaderSx,
  ...props
}) => {
  return (
    <StyledMainBox {...props}>
      <Box>
        {component ? (
          { component }
        ) : (
          <StyledLoaderBox sx={{}}>
            <CircularProgress sx={loaderSx} size={loaderSize} />
            {label && <StyledStatusLabel>{label}</StyledStatusLabel>}
          </StyledLoaderBox>
        )}
      </Box>
    </StyledMainBox>
  );
};

export default LoadingComponent;
