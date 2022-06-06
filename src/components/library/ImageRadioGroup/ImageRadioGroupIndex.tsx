import React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Grid } from "@mui/material";

interface CustomRadioImageProps {
  image: string;
  selected?: boolean;
}
interface CustomRadioControllerProps {
  image: string;
  selected?: boolean;
}

const radioOptions = [
  {
    name: "Slim",
    value: "slim",
    image: "/assets/slim.png",
  },
  {
    name: "Regular",
    value: "Regular",
    image: "/assets/regular.png",
  },
  {
    name: "Loose",
    value: "loose",
    image: "/assets/slim.png",
  },
  {
    name: "Tight",
    value: "tight",
    image: "/assets/regular.png",
  },
];

export const StyledRadioController = styled(Radio)(({ theme }) => ({
  "&.MuiRadio-root": {
    padding: 5,
    width: "100%",
  },
  "&:hover": {
    bgcolor: "transparent",
  },
}));

export const CustomRadioImage = styled("span")<CustomRadioImageProps>(
  ({ theme, image, selected }) => ({
    width: "100%",
    height: 90,
    backgroundImage: `url(${image})`,
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: selected ? `2px solid ${theme.palette.secondary.main}` : "none",
  })
);

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "&.MuiFormControlLabel-root": {
    width: "100%",
  },
  "& .MuiFormControlLabel-label": {
    fontWeight: 600,
  },
  marginLeft: 0,
  marginRight: 0,
}));

const CustomRadioController: React.FC<CustomRadioControllerProps> = ({
  image,
  ...props
}) => {
  return (
    <StyledRadioController
      disableRipple
      color="default"
      icon={<CustomRadioImage image={image} />}
      checkedIcon={<CustomRadioImage image={image} selected={true} />}
      {...props}
    />
  );
};

const ImageRadioGroupComponent = () => {
  return (
    <FormControl fullWidth>
      <RadioGroup
        row={false}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <Grid container spacing={2}>
          {radioOptions.map((item, index) => (
            <Grid item key={index} xs={6}>
              <StyledFormControlLabel
                value={item.value}
                control={<CustomRadioController image={item.image} />}
                label={item.name}
                labelPlacement="bottom"
              />
            </Grid>
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  );
};
export default ImageRadioGroupComponent;
