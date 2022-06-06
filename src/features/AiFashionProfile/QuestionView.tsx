import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import ImageCheckBoxComponent from "../../components/library/Form/ImageCheckBox/ImageCheckBox";
import {
  StyledOptionsView,
  StyledSliderBoxWrapper,
  StyledSliderHeader,
  StyledSliderTitle,
} from "./styled";

interface QuestionViewProps {
  questions: any;
  handleChange: (ids: string[]) => void;
}

const QuestionViewComponent: React.FC<QuestionViewProps> = ({
  questions,
  handleChange,
}) => {
  const { control, getValues } = useForm();
  const theme = useTheme();

  // Handle Options Selections
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
    <StyledOptionsView>
      <StyledSliderHeader>
        <StyledSliderTitle variant="body1">{questions.input}</StyledSliderTitle>
      </StyledSliderHeader>
      <StyledSliderBoxWrapper>
        <Controller
          name="imageIds"
          defaultValue={null}
          render={(props) => (
            <Grid container>
              {questions.options.map((item, index) => (
                <Grid key={index} item md={3} lg={3} xs={4} sm={3}>
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
                </Grid>
              ))}
            </Grid>
          )}
          control={control}
        />
      </StyledSliderBoxWrapper>
    </StyledOptionsView>
  );
};

export default QuestionViewComponent;
