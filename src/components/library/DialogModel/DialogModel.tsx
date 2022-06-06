import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

interface DialogModelComponentProps {
  title: string;
  open: boolean;
  actions?: React.ReactNode;
  component?: React.ReactNode;
  content: string | React.ReactNode;
  onClose: () => void;
  [x: string]: any;
}

const DialogModelComponent: React.FC<DialogModelComponentProps> = ({
  title,
  actions,
  open,
  component,
  content,
  onClose,
  ...props
}) => {
  return (
    <Dialog {...props} onClose={onClose} open={open}>
      {component ? (
        <DialogContent>{component}</DialogContent>
      ) : (
        <>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>{content}</DialogContent>
          <DialogActions>{actions}</DialogActions>
        </>
      )}
    </Dialog>
  );
};

export default DialogModelComponent;
