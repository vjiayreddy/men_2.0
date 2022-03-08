import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

export const StyledFooterWrapper = styled(Box)(({ theme }) => ({
  minHeight: 180,
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export const StyledLocationWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
}));

export const StyledContentTypography = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyItems: "center",
  color: theme.palette.common.white,
  fontSize: 18,
  lineHeight: "26px",
}));

export const StyledCopywriteContent = styled(Typography)(({ theme }) => ({
    marginTop:"20px",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    color: theme.palette.common.white,
    fontSize: 16,
    lineHeight: "26px",
  }));
  
