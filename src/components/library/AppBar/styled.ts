import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";

export const StyledNavActions = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
  flexDirection: "column",
}));

export const StyledActionButton = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  flexDirection: "row",
}));

export const StyledMenuIcon = styled("img")(({ theme }) => ({
  width: 32.77,
  height: 33.37,
}));

export const StyledAnchorLink = styled("a")(({ theme }) => ({
  ...theme.a,
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
