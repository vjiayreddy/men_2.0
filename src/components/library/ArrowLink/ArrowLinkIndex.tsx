import React from "react";
import Box from "@mui/material/Box";
import { StyledArrowLinkWrapper, StyledLabelLink } from "./styled";
import Link from "next/link";
import { SxProps } from "@mui/system";

interface arrowLinkProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  labelSx?: SxProps;
}

const ArrowLinkComponent: React.FC<arrowLinkProps> = ({
  label,
  href,
  icon,
  labelSx,
  ...props
}) => {
  return (
    <Link {...props} href={href}>
      <StyledArrowLinkWrapper>
        <Box>
          <StyledLabelLink sx={labelSx}>{label}</StyledLabelLink>
        </Box>
        <Box sx={{ marginTop: "2px", marginLeft: "5px" }}>
          {icon ? (
            icon
          ) : (
            <img alt="asset-arrow-icon" src="./assets/arrow_icon.svg" />
          )}
        </Box>
      </StyledArrowLinkWrapper>
    </Link>
  );
};

export default ArrowLinkComponent;
