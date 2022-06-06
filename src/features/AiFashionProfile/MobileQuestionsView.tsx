import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Slider from "react-slick";
import { Controller, Control, useForm } from "react-hook-form";
import { StyledMobileSliderWrapper } from "./styled";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ImageCheckBoxComponent from "../../components/library/Form/ImageCheckBox/ImageCheckBox";
import { useTheme } from "@mui/material/styles";

interface MobileQuestionsViewProps {
  questions: any;
  handleChange: (ids: string[]) => void;
}

var settings = {
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  rows: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        rows: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        autoPlay: true,
      },
    },
  ],
};

const MobileQuestionsView: React.FC<MobileQuestionsViewProps> = ({
  questions,
  handleChange,
}) => {
  const theme = useTheme();
  const { control, getValues } = useForm();
  const handleMultiCheck = (checkedId, getValues) => {
    const { imageIds: ids } = getValues();
    const newIds = ids?.includes(checkedId)
      ? ids?.filter((id) => id !== checkedId)
      : [...(ids ?? []), checkedId];
    console.log(newIds);
    handleChange(newIds);
    return newIds;
  };

  return (
    <StyledMobileSliderWrapper>
      <Box sx={{ padding: "20px" }}>
        <Typography sx={{ fontSize: 18 }} variant="h3" textAlign="center">
          {questions.input}
        </Typography>
      </Box>
      <Controller
        defaultValue={null}
        name="imageIds"
        control={control}
        render={(props) => (
          <Slider {...settings}>
            {questions.options.map((item, index) => (
              <div key={index}>
                <FormControlLabel
                  sx={{ width: "100%" }}
                  label=""
                  onChange={(e) => {
                    props.field.onChange(
                      handleMultiCheck(item.imageId, getValues)
                    );
                  }}
                  control={
                    <Checkbox
                      sx={{ width: "100%" }}
                      value={item.imageId}
                      icon={
                        <ImageCheckBoxComponent
                          url={item.image.imageUrl}
                          key={index}
                          backgroundSize="cover"
                        />
                      }
                      checkedIcon={
                        <ImageCheckBoxComponent
                          url={item.image.imageUrl}
                          key={index}
                          backgroundSize="cover"
                          sx={{
                            border: () =>
                              `3px solid ${theme.palette.secondary.main}`,
                          }}
                        />
                      }
                    />
                  }
                ></FormControlLabel>
              </div>
            ))}
          </Slider>
        )}
      ></Controller>
    </StyledMobileSliderWrapper>
  );
};

export default MobileQuestionsView;
