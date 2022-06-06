import React from "react";
import Container from "@mui/material/Container";
import { Breakpoint } from "@mui/material";

interface containerWrapperProps {
  children: React.ReactNode;
  maxWidth?: Breakpoint;
  [x: string]: any;
}

const ContainerWrapperComponent: React.FC<containerWrapperProps> = ({
  children,
  maxWidth,
  ...props
}) => {
  return (
    <Container
      sx={{ padding: 0 }}
      {...props}
      maxWidth={maxWidth ? maxWidth : "lg"}
    >
      {children}
    </Container>
  );
};

export default ContainerWrapperComponent;
