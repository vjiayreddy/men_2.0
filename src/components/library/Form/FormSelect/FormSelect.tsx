import React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface FormSelectComponentProps {
  value: number;
  handleChange: (event: SelectChangeEvent) => void;
}

export const StyledSelectInput = styled(Select)(({ theme }) => ({
  "&.MuiInputBase-root": {
    borderRadius: 0,
    padding: 0,
    backgroundColor: theme.palette.grey[300],
    paddingTop: 0,
    fontWeight: 600,
    height: 25,
  },
  "& .MuiSelect-icon": {},
  "& .MuiSelect-select": {},
}));

const FormSelectComponent: React.FC<FormSelectComponentProps> = ({
  handleChange,
  value,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl>
      <StyledSelectInput
        id="form-select-input"
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        value={value}
        IconComponent={KeyboardArrowDownIcon}
        onChange={handleChange}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </StyledSelectInput>
    </FormControl>
  );
};

export default FormSelectComponent;
