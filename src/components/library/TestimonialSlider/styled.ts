import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const TestimonialMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: 50,
  marginBottom: 20,
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export const TestimonialCardBox = styled(Box)(({ theme }) => ({
  height: 550,
  width: 350,
  borderRadius: 15,
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down('sm')]:{
    width: 'auto',
    margin:10,
    height: 450,
  }
}));

export const TestimonialCoverImage = styled(Image)(({ theme }) => ({
  borderRadius: 15,
  objectPosition: "25% 10%",
}));

export const TestimonialImageOverly = styled(Box)(({ theme }) => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0, 48, 60, 1))`,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  padding: 30,
}));

export const TestimonialReviewContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: "justify",
}));

export const TestimonialAuthor = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: "justify",
  fontSize: 20,
  fontWeight: 500,
  marginTop: 10,
  marginBottom: 5,
}));
export const TestimonialCaption = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textAlign: "justify",
  fontSize: 12,
  fontWeight: 300,
}));
