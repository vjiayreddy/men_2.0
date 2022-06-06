import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: 12,
    fontWeight: 400,
    lineHeight:'20px'
  },
}));

const FormCheckBoxGroup = () => {
  return (
    <FormGroup row={true}>
      <StyledFormControlLabel  label="Show all" control={<Checkbox />} />
      <StyledFormControlLabel label="Business leader" control={<Checkbox />} />
      <StyledFormControlLabel label="Executives" control={<Checkbox />} />
      <StyledFormControlLabel label="Grooms" control={<Checkbox />} />
    </FormGroup>
  );
};

export default FormCheckBoxGroup;
