import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";

interface InfoMessageComponentProps {
  iconUrl: string;
  iconWidth: number;
  iconHeight: number;
  infoMessage: string;
  [x: string]: any;
}

const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const InfoMessageComponent: React.FC<InfoMessageComponentProps> = ({
  iconUrl,
  iconHeight,
  iconWidth,
  infoMessage,
  ...props
}) => {
  return (
    <StyledBoxWrapper {...props}>
      <Box>
        <Image
          alt={iconUrl}
          layout="fixed"
          width={iconWidth}
          height={iconHeight}
          src={iconUrl}
        />
      </Box>
      <Box>
        <Typography>{infoMessage}</Typography>
      </Box>
    </StyledBoxWrapper>
  );
};

export default InfoMessageComponent;
