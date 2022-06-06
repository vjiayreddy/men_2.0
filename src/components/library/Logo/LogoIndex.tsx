import React from "react";
import { styled } from "@mui/material";
import { useRouter } from "next/router";
import { ROUTES } from "../../../config/routes/routes";

interface logoComponentProps {
  id: string;
  width?: string | number;
  height?: string | number;
}

const StyledLogo = styled("img")<logoComponentProps>(
  ({ theme, height, width }) => ({
    width: width ? width : "150px",
    "&:hover": {
      cursor: "pointer",
    },
    height: height,
    [theme.breakpoints.down("sm")]: {
      width: width ? width : "120px",
      height: height,
    },
  })
);

const LogoComponent: React.FC<logoComponentProps> = ({ id, width, height }) => {
  const router = useRouter();
  return (
    <StyledLogo
      onClick={() => {
        router.push(ROUTES.HOME);
      }}
      id={id}
      width={width}
      height={height}
      src="/assets/logo.svg"
    />
  );
};

export default LogoComponent;
