import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";

interface LinkButtonComponentProps {
  id: string;
  label: string;
  onClick: () => void;
  sx?: SxProps;
  [x: string]: any;
}

const StyledLinkButton = styled(Button)(({ theme }) => ({
  ...theme.formLinkButton,
  color: theme.palette.grey[500],
  textDecoration: "underline",
  textTransform: "none",
}));

const LinkButtonComponent: React.FC<LinkButtonComponentProps> = ({
  label,
  id,
  onClick,
  ...props
}) => {
  return (
    <StyledLinkButton
      disableElevation
      disableRipple
      disableTouchRipple
      id={id}
      onClick={onClick}
      {...props}
      variant="text"
    >
      {label}
    </StyledLinkButton>
  );
};

export default LinkButtonComponent;
