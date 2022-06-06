import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
const StyledMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60%",
  margin: "0 auto",
  padding: 10,
  marginBottom: 50,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "90%",
    marginBottom: 30,
  },
}));

const StyledMainBoxRight = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60%",
  margin: "0 auto",
  padding: 10,
  marginBottom: 50,
  [theme.breakpoints.down("sm")]: {
    flexDirection:"column-reverse",
    width: "90%",
    marginBottom: 30,
  },
}));

const StyledImageBox = styled(Box)(() => ({
  flex: 1,
}));

const StyledImageBoxRight = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}));

const StyledContentBox = styled(Box)(() => ({
  flex: 1,
}));

const StyledCategoryTitle = styled(Typography)(() => ({
  fontSize: 32,
  lineHeight: "60px",
  fontWeight: 300,
}));
const StyledCategoryContent = styled(Typography)(() => ({
  fontSize: 18,
  lineHeight: "25px",
  textAlign: "justify",
}));

const StyledImage = styled("img")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "70%",
  borderRadius: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: 20,
  },
}));

interface CategoriesSectionProps {
  align?: "left" | "right";
  image: string;
  content: string;
  title: string;
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  align = "left",
  image,
  content,
  title,
}) => {
  return (
    <>
      {align === "left" ? (
        <StyledMainBox>
          <StyledImageBox>
            <StyledImage src={image} />
          </StyledImageBox>
          <StyledContentBox>
            <StyledCategoryTitle>{title}</StyledCategoryTitle>
            <Box>
              <StyledCategoryContent>{content}</StyledCategoryContent>
            </Box>
          </StyledContentBox>
        </StyledMainBox>
      ) : (
        <StyledMainBoxRight>
          <StyledContentBox>
            <StyledCategoryTitle>Stitching</StyledCategoryTitle>
            <Box>
              <StyledCategoryContent>
                We’re a menswear company like no other. We’ve made every effort
                to make sure you got from point A to the best-fitting clothes
                you’ve ever worn with ease, because finding your fit should
                never be unpleasant.
              </StyledCategoryContent>
            </Box>
          </StyledContentBox>
          <StyledImageBoxRight>
            <StyledImage src="/assets/category.png" />
          </StyledImageBoxRight>
        </StyledMainBoxRight>
      )}
    </>
  );
};

export default CategoriesSection;
