import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

interface StyledButtonProps {
  edge?: "rounded" | "normal";
}

interface FormButtonComponentProps {
  id: string;
  label: string;
  edge?: "rounded" | "normal";
  loading?: boolean;
  circularProgressProps?: CircularProgressProps;
  variant?: "text" | "outlined" | "contained";
  onClick: () => void;
  [x: string]: any;
}

const StyledButton = styled(Button)<StyledButtonProps>(({ theme, edge }) => ({
  borderRadius: edge === "rounded" ? 5 : 0,
}));

const FormButtonComponent: React.FC<FormButtonComponentProps> = ({
  label,
  id,
  onClick,
  loading,
  edge = "rounded",
  variant = "contained",
  circularProgressProps,
  ...props
}) => {
  return (
    <StyledButton
      edge={edge}
      startIcon={
        loading ? <CircularProgress {...circularProgressProps} /> : <div></div>
      }
      variant={variant}
      {...props}
      id={id}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default FormButtonComponent;
