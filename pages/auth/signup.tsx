import React, { useState } from "react";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";

// Apollo
import { useRegistration } from "../../src/config/apollo/actions/useRegister";

// Component
import FormTextField from "../../src/components/library/Form/FormTextField/FormTextField";
import FormButtonComponent from "../../src/components/library/Form/FormButton/FormButton";
import LinkButtonComponent from "../../src/components/library/Form/LinkButton/LinkButton";
import { Theme } from "@mui/material";
import { ROUTES } from "../../src/config/routes/routes";
import { AUTH_STATE, QUERY_STATUS } from "../../src/utils/enums";

const StyledLoginBox = styled(Box)(({ theme }) => ({
  height: `100vh`,
}));
const StyledImageWrapper = styled(Box)(({ theme }) => ({
  height: `100vh`,
  position: "relative",
}));
const StyledImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
}));
const StyledLoginForm = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  height: "100%",
  flexDirection: "column",
  width: "70%",
  margin: "0px auto",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    paddingTop: 50,
  },
}));

const StyledFormTitle = styled(Typography)(({ theme }) => ({
  ...theme.formTitle,
}));
const StyledFormSubtite = styled(Typography)(({ theme }) => ({
  ...theme.formSubTitle,
}));

const StyledFormFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInfoLabel = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
}));

const styledSignUpLabel = (theme: Theme) => ({
  fontSize: 16,
  lineHeight: "24px",
  color: theme.palette.common.black,
  fontWeight: 800,
});

const SignUpPage = (props) => {
  const { loading, signupStatus, register } = useRegistration();
  const [open, setOpen] = useState(false);
  const { control, handleSubmit } = useForm();
  const { status } = useSession();
  const { router } = props;

  const handleSignUp = async (data) => {
    await register({
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    });
  };

  if (AUTH_STATE.AUTHENTICATED === status) {
    router.push(ROUTES.HOME);
  }

  return (
    <StyledLoginBox>
      <Grid container spacing={2}>
        <Hidden only={["xs", "sm"]}>
          <Grid item xs={false} md={6} lg={6} xl={6}>
            <StyledImageWrapper>
              <StyledImage
                placeholder="blur"
                blurDataURL="/assets/loginBg.png"
                alt="login-bg"
                src="/assets/loginBg.png"
                layout="fill"
              />
            </StyledImageWrapper>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <StyledLoginForm>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <StyledFormTitle>Sign up to </StyledFormTitle>
                </Grid>

                {signupStatus === QUERY_STATUS.ERROR && (
                  <Grid item xs={12}>
                    <Alert severity="error">
                      Email Already Exists please try again
                    </Alert>
                  </Grid>
                )}

                {signupStatus === QUERY_STATUS.SUCCESS && (
                  <Grid item xs={12}>
                    <Alert
                      action={
                        <Button
                          onClick={() => router.push(ROUTES.LOGIN)}
                          color="inherit"
                          size="small"
                        >
                          LOGIN
                        </Button>
                      }
                    >
                      User registered successfully please try to login
                    </Alert>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <FormTextField
                    name="email"
                    control={control}
                    rules={{ required: "Please enter valid email address" }}
                    fieldType="text"
                    fullWidth={true}
                    placeholder="Enter your email"
                    label="Email"
                    id="input-email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormTextField
                    name="fullName"
                    rules={{ required: "Please enter full name" }}
                    control={control}
                    fieldType="text"
                    placeholder="Enter your full name"
                    fullWidth={true}
                    label="Full name"
                    id="input-full-name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormTextField
                    name="password"
                    rules={{ required: "Please enter password" }}
                    control={control}
                    fieldType="password"
                    placeholder="Enter your Password"
                    fullWidth={true}
                    label="Password"
                    id="input-password"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormTextField
                    name="ConfrimPassword"
                    control={control}
                    fieldType="password"
                    placeholder="Confirm your Password"
                    fullWidth={true}
                    label="Confirm Password"
                    id="input-confirm-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormButtonComponent
                    circularProgressProps={{
                      size: 16,
                      sx: { color: (theme) => theme.palette.common.white },
                    }}
                    type="submit"
                    loading={loading}
                    onClick={handleSubmit(handleSignUp)}
                    fullWidth={true}
                    id="btn-signup"
                    label="Sign up"
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledFormFooter>
                    <Box>
                      <StyledInfoLabel>
                        Already have an Account ?{" "}
                      </StyledInfoLabel>
                    </Box>
                    <Box>
                      <LinkButtonComponent
                        sx={styledSignUpLabel}
                        id="bnt-sign-in"
                        label="Sign in"
                        onClick={() => {
                          router.push(ROUTES.LOGIN);
                        }}
                      />
                    </Box>
                  </StyledFormFooter>
                </Grid>
              </Grid>
            </form>
          </StyledLoginForm>
        </Grid>
      </Grid>
    </StyledLoginBox>
  );
};

export default SignUpPage;
