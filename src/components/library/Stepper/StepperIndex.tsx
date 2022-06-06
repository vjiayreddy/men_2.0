import React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.root}`]: {
    left: `calc(100%-)`,
  },
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 23,
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: theme.palette.divider,
    borderRadius: 1,
  },
  [theme.breakpoints.down("sm")]: {
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 18,
    },
  },
}));

const StyledStepperLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-label": {
    marginTop: 5,
    fontSize: 16,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  [theme.breakpoints.down("sm")]: {
    width: 35,
    height: 35,
  },
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main,
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  const icons: { [index: string]: React.ReactElement } = {
    1: <ShoppingCartIcon />,
    2: <ContactMailIcon />,
    3: <FactCheckIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["Cart", "Shipping Address", "Checkout"];

interface StepperComponentProps {
  stepperIndex: number;
}

const StepperComponent: React.FC<StepperComponentProps> = ({
  stepperIndex,
}) => {
  return (
    <Stepper
      alternativeLabel
      activeStep={stepperIndex}
      connector={<ColorlibConnector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StyledStepperLabel StepIconComponent={ColorlibStepIcon}>
            {label}
          </StyledStepperLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
