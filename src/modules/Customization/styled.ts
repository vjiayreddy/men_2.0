import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const StyledMainBox = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const StyledHeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  minHeight: 80,
  width: "100%",
  display: "flex",
  alignItems: "center",
  paddingLeft: 25,
  paddingRight: 45,
  position: "relative",
}));

export const StyledHeaderTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontSize: 18,
  fontWeight: 600,
}));
export const StyledHeaderPrice = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,
}));

export const StyledCloseIconBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
}));

export const StyledContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  flexGrow: 1,
  backgroundColor: theme.palette.grey[200],
  display: "flex",
}));

export const StyledVerticalTabs = styled(Box)(({ theme }) => ({
  height: "100%",
  minWidth: 155,
  maxWidth: 170,
  backgroundColor: theme.palette.common.white,
  overflow: "auto",
}));
export const StyledRadiogroup = styled(Box)(({ theme }) => ({
  height: "100%",
  flexGrow: 1,
  position: "relative",
  padding:10
}));

export const StyledFooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  minHeight: 80,
  width: "100%",
  borderTop: `1px solid ${theme.palette.divider}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledActionButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
    margin: 10,
  },
}));

export const StyledTabIcon = styled("img")(({ theme }) => ({
  width: 16,
  paddingLeft: 10,
}));
