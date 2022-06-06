import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

interface ImageCheckBoxComponentProps {
  url?: string;
  backgroundSize?: string;
  [x: string]: any;
}

const StyledImageBox = styled(Box)<ImageCheckBoxComponentProps>(
  ({ theme, url, backgroundSize }) => ({
    backgroundImage: `url(${url})`,
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    position: "relative",
    backgroundSize: backgroundSize ? backgroundSize : "cover",
    height: "200px",
    width: "100%",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "120px",
    },
  })
);

const StyledImageOverlyGradent = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  zIndex: 2,
  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) , rgba(0, 48, 60, 1))`,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-start",
}));

const StyledImageLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  padding: 10,
  fontSize: 12,
}));

const StyledImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  borderRadius: "10px",
}));

const ImageCheckBoxComponent: React.FC<ImageCheckBoxComponentProps> = ({
  url,
  backgroundSize,
  ...props
}) => {
  return (
    <StyledImageBox backgroundSize={backgroundSize} {...props}>
      <StyledImage
        src={url}
        alt={url}
        layout="fill"
        placeholder="blur"
        blurDataURL={url}
      />
      {/* <StyledImageOverlyGradent>
        <StyledImageLabel variant="caption">Formal Look</StyledImageLabel>
      </StyledImageOverlyGradent> */}
    </StyledImageBox>
  );
};

export default ImageCheckBoxComponent;
