import React, { useEffect, useState } from "react";
import InputBase from "@mui/material/InputBase";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import { FormControlLabel, styled } from "@mui/material";
import { FONTS } from "../../../../config/theme/fonts";
import { appColors } from "../../../../config/theme/colors";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Control, FieldValues, useController } from "react-hook-form";

type elmHeight = number | string;

export interface FormTextFieldProps {
  label: string;
  id: string;
  name: string;
  hintMessage?: string;
  control: Control<FieldValues, object>;
  placeholder?: string;
  fieldType?: string;
  defaultValue?: any;
  rules?: any;
  [x: string]: any;
}

export interface FormInputBaseProps {
  inputHeight?: elmHeight;
}

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontFamily: FONTS.POPPINS,
  color: theme.palette.common.black,
  fontWeight: 400,
  height: "22.87px",
  fontStyle: "normal",
  fontSize: 16,
  marginBottom: 8,
}));

const StyledInputBase = styled(InputBase)<FormInputBaseProps>(
  ({ inputHeight, theme }) => ({
    border: `1px solid ${appColors.COLOR_14}`,
    borderRadius: 5,
    fontFamily: FONTS.POPPINS,
    fontWeight: 400,
    height: 50,
    padding: `10px 10px 10px 10px`,
    fontSize: 14,
    width: "100%",
    backgroundColor: theme.palette.common.white,
  })
);
const StyledFieldError = styled(FormHelperText)<FormInputBaseProps>(
  ({ theme }) => ({
    color: theme.palette.error.main,
  })
);

const FormInputBaseField: React.FC<FormTextFieldProps> = ({
  id,
  label,
  inputHeight,
  name,
  control,
  hintMessage,
  defaultValue = "",
  rules = {},
  placeholder,
  fieldType = "text",
  ...props
}) => {
  const [showSecret, setShowSecret] = useState<boolean>(
    () => fieldType !== "password"
  );
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const handleOnClear = () => field.onChange("");
  const handleToggleIcon = () => {};

  return (
    <>
      <Box>
        <StyledInputLabel>{label}</StyledInputLabel>
      </Box>
      <StyledInputBase
        id={id}
        placeholder={placeholder}
        error={fieldState.invalid}
        type={showSecret ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            {fieldType === "password" && (
              <IconButton
                onClick={() => {
                  setShowSecret(!showSecret);
                }}
              >
                {showSecret ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )}
          </InputAdornment>
        }
        {...field}
        {...props}
      />
      {!fieldState.error && hintMessage ? (
        <FormHelperText>{hintMessage}</FormHelperText>
      ) : null}
      {fieldState.error && (
        <StyledFieldError>{fieldState.error?.message}</StyledFieldError>
      )}
    </>
  );
};

export default FormInputBaseField;
