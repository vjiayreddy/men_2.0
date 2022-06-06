import React from "react";
import Grid from "@mui/material/Grid";
import { useForm } from "react-hook-form";

// Component
import FormTextField from "../../components/library/Form/FormTextField/FormTextField";
import { StyledBoxWrapper, StyledCartButtonWrapper } from "./styled";
import FormButtonComponent from "../../components/library/Form/FormButton/FormButton";
import { UserAddressType } from "../../apollo/actions/useSaveAddress";

interface AddressProps {
  onContinue: (data: any) => void;
  loading?: boolean;
}

const Address: React.FC<AddressProps> = ({ onContinue, loading }) => {
  const { control, handleSubmit } = useForm();

  const handleSubmitForm = (data: UserAddressType) => {
    onContinue(data);
  };

  return (
    <StyledBoxWrapper>
      <Grid spacing={6} container>
        <Grid item xs={6} md={6} lg={6} xl={6}>
          <FormTextField
            name="firstName"
            placeholder="Enter your first Name"
            rules={{ required: "Please enter firstName" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="First Name"
            id="input-firstName"
          />
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6}>
          <FormTextField
            name="lastName"
            placeholder="Enter your last name"
            rules={{ required: "Please enter valid email address" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="Last Name"
            id="input-lastName"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <FormTextField
            name="email"
            placeholder="Enter your email"
            //rules={{ required: "Please enter valid email address" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="Email Address"
            id="input-email"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <FormTextField
            name="phone"
            placeholder="Enter your mobile"
            rules={{ required: "Please enter valid mobile number" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="Mobile"
            id="input-mobile"
          />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={4}>
          <FormTextField
            name="city"
            placeholder="Enter your city"
            // rules={{ required: "Please enter valid city name" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="City"
            id="input-city"
          />
        </Grid>
        <Grid item xs={6} md={4} lg={4} xl={4}>
          <FormTextField
            name="state"
            placeholder="Enter your state"
            //rules={{ required: "Please enter valid state name" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="State"
            id="input-state"
          />
        </Grid>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <FormTextField
            name="postalCode"
            placeholder="Enter your postal code"
            //rules={{ required: "Please enter valid postal code" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="Postal Code"
            id="input-postalCode"
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            name="address1"
            placeholder="Enter your  address"
            //rules={{ required: "Please enter valid postal code" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="Street Address"
            id="input-street-address"
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            name="landmark"
            placeholder="Enter your land mark"
            //rules={{ required: "Please enter land mark" }}
            control={control}
            fieldType="text"
            fullWidth={true}
            label="Land Mark"
            id="input-land-mark"
          />
        </Grid>
      </Grid>
      <StyledCartButtonWrapper>
        <FormButtonComponent
          sx={{ borderRadius: 0, width: 350 }}
          circularProgressProps={{
            size: 16,
            sx: { color: (theme) => theme.palette.common.white },
          }}
          id="btn-continue"
          label="Continue"
          loading={loading}
          onClick={handleSubmit(handleSubmitForm)}
        />
      </StyledCartButtonWrapper>
    </StyledBoxWrapper>
  );
};

export default Address;
