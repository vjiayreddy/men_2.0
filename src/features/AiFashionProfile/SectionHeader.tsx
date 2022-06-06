import React, { FC, Fragment } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {
  StyledAIFashionTitle,
  StyledCaptionTitle,
  StyledQuestionsHeader,
} from "./styled";

interface SectionHeaderProps {
  title: string;
  content: string;
}

const SectionHeaderComponent: FC<SectionHeaderProps> = ({ title, content }) => {
  return (
    <StyledQuestionsHeader>
      <StyledAIFashionTitle variant="body1">{title}</StyledAIFashionTitle>
      <StyledCaptionTitle variant="caption">{content}</StyledCaptionTitle>
      <Box sx={{ marginTop: "15px" }}>
        <Divider />
      </Box>
    </StyledQuestionsHeader>
  );
};

export default SectionHeaderComponent;
