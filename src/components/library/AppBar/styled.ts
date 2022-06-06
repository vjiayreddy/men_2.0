import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";

const drawerHeight = 350;

interface StyledTabsProps {
  divider?: string;
}

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: `10px 20px`,
  },
}));

export const StyledNavActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
  flexDirection: "column",
}));

export const StyledActionButton = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  flexDirection: "row",
}));

export const StyledMenuIcon = styled("img")(({ theme }) => ({
  width: 20.77,
  height: 20.37,
  [theme.breakpoints.down("sm")]: {
    width: 20,
  },
}));

export const StyledAnchorLink = styled("a")(({ theme }) => ({
  ...theme.a,
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontWeight: 500,
  padding: "0px 10px",
  ":hover": {
    cursor: "pointer",
  },
}));

export const StyledLinkButton = styled(Button)(({ theme }) => ({
  ...theme.a,
  fontSize: 12,
  textTransform: "none",
  padding: 2,
  minWidth: 20,
}));

export const StyledSignInDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: 0,
  },
}));
export const StyledSignInDialogContainer = styled(DialogContent)(
  ({ theme }) => ({
    padding: 0,
  })
);

export const StyledhumburgBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

// Drawer Menu section
export const StyledTopDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paperAnchorTop": {
    minHeight: drawerHeight,
    width: theme.breakpoints.values.lg,
    position: "relative",
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
      width: "100%",
    },
  },
}));

export const StyledTopDrawerLeftBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  minHeight: drawerHeight,
  padding: "30px 50px",
}));
export const StyledTopDrawerRightBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  minHeight: drawerHeight,
  padding: "30px 80px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    padding: "30px 53px",
    alignItems: "flex-start",
  },
}));

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  "&.MuiTabs-root": {
    borderRight: "none",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));
export const StyledTab = styled(Tab)<StyledTabsProps>(({ theme, divider }) => ({
  "&.MuiTab-root": {
    padding: 0,
    //textAlign: "right",
    fontSize: 16,
    minHeight: 40,
    alignItems: "flex-end",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
    color: theme.palette.common.white,
    lineHeight: "9px",
    borderBottom:
      divider === "true" ? `1px solid ${theme.palette.COLOR_18}` : "none",
  },
  "&.MuiTab-textColorPrimary": {
    textAlign: "right",
    height: 20,
  },
}));

export const StyledTopDrawerMenuCard = styled(Box)(({ theme }) => ({
  width: "85%",
  height: "258px",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100px",
  },
}));

export const StyledMenuImage = styled(Image)(({ theme }) => ({
  borderRadius: 10,
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    objectPosition: `80% 100%`,
  },
}));

export const StyledTabMenuBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "end",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
}));
export const StyledExtraLinksBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  flexDirection: "row",
  width: "100%",
  marginTop: 20,
}));
export const StyledExtraLink = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  color: theme.palette.secondary.main,
}));
export const StyledVerticalDivider = styled(Box)(({ theme }) => ({
  height: 15,
  width: 1,
  backgroundColor: theme.palette.COLOR_18,
  marginLeft: 10,
  marginRight: 10,
}));

export const StyledCloseIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
}));
