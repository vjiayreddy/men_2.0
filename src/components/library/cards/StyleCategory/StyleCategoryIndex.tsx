import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

interface styleCategoryCardComponentProps {
  image?: string;
  title: string;
  content: string;
  onClickbtn: () => void;
}

const StyledCardWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "100px",
  background: `linear-gradient(to bottom, ${theme.palette.COLOR_2}, ${theme.palette.COLOR_2})`,
  boxShadow: `10px 10px 18px rgba(0,0,0,0.07)`,
  borderRadius: 10,
  padding: "30px",
  display: "flex",
  flexDirection: "column",
}));

const StyledCardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: 10,
}));

const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: 30,
  lineHeight: "36px",
}));

const StyleCategoryCardComponent: React.FC<styleCategoryCardComponentProps> = ({
  image,
  title,
  content,
  onClickbtn,
}) => {
  return (
    <StyledCardWrapper>
      <StyledCardHeader>
        <Box>
          <img alt={`card-img-${title}`} src={image} />
        </Box>
        <Box sx={{ flexGrow: 1, paddingLeft: "20px" }}>
          <StyledCardTitle variant="subtitle2">{title}</StyledCardTitle>
        </Box>
      </StyledCardHeader>
      <Box sx={{ marginBottom: "50px" }}>
        <Typography sx={{width:"90%"}} variant="body1">{content}</Typography>
      </Box>
      <Box>
        <Button variant="contained">Get your style</Button>
      </Box>
    </StyledCardWrapper>
  );
};

export default StyleCategoryCardComponent;
