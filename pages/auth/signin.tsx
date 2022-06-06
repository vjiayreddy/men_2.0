import React, { useState } from "react";
import Box from "@mui/material/Box";
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import { signIn, useSession, SignInResponse } from "next-auth/react";
// Component
import FormTextField from "../../src/components/library/Form/FormTextField/FormTextField";
import FormButtonComponent from "../../src/components/library/Form/FormButton/FormButton";
import LinkButtonComponent from "../../src/components/library/Form/LinkButton/LinkButton";
import { Theme } from "@mui/material";
import { ROUTES } from "../../src/config/routes/routes";
import { AUTH_STATE } from "../../src/utils/enums";

const StyledLoginBox = styled(Box)(({ theme }) => ({
  minHeight: `100vh`,
}));
const StyledImageWrapper = styled(Box)(({ theme }) => ({
  minHeight: `100vh`,
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
  width: "60%",
  margin: "0px auto",
  overflowX: "auto",
  overflowY: "hidden",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    paddingTop: 50,
  },
}));

const StyledFormGreetings = styled(Typography)(({ theme }) => ({
  ...theme.formGreetings,
  textAlign: "left",
  display: "block",
}));

const StyledFormTitle = styled(Typography)(({ theme }) => ({
  ...theme.formTitle,
}));
const StyledFormSubtite = styled(Typography)(({ theme }) => ({
  ...theme.formSubTitle,
}));
const StyledForgotPassword = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));

const StyledFormControllLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    ...theme.formLinkButton,
  },
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

const LoginPage = (props) => {
  const { router } = props;
  const { status } = useSession();
  const { control, handleSubmit } = useForm();
  const [isSubmit, setIsSumbit] = useState(false);

  const handleFormSignIn = async (data) => {
    setIsSumbit(true);
    const response: SignInResponse = await signIn("credentials", {
      redirect: true,
      callbackUrl: ROUTES.HOME,
      email: data.email,
      password: data.password,
    });
    if (response?.error) {
      setIsSumbit(false);
      alert(response.error);
    }
    setIsSumbit(false);
  };

  if (AUTH_STATE.AUTHENTICATED === status) {
    router.replace(ROUTES.HOME);
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
            <form onSubmit={handleSubmit(handleFormSignIn)}>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <StyledFormGreetings>Welcome !</StyledFormGreetings>
                </Grid>
                <Grid item xs={12}>
                  <StyledFormTitle>Sign in to </StyledFormTitle>
                </Grid>
                <Grid item xs={12}>
                  <FormTextField
                    name="email"
                    placeholder="Enter your email"
                    rules={{ required: "Please enter valid email address" }}
                    control={control}
                    fieldType="text"
                    fullWidth={true}
                    label="Email"
                    id="input-email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormTextField
                    name="password"
                    placeholder="Enter your password"
                    rules={{ required: "Please enter password" }}
                    control={control}
                    fieldType="password"
                    fullWidth={true}
                    label="Password"
                    id="input-password"
                  />
                </Grid>
                <Grid container item xs={12}>
                  <Grid item xs={6}>
                    <StyledFormControllLabel
                      control={
                        <Checkbox
                          inputProps={{ "aria-label": "remember-me" }}
                          defaultChecked
                          size="small"
                        />
                      }
                      label="Remember Me"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <StyledForgotPassword>
                      <Box>
                        <LinkButtonComponent
                          onClick={() => {}}
                          id="btn-forgot-password"
                          label="Forgot Password ?"
                        />
                      </Box>
                    </StyledForgotPassword>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormButtonComponent
                    circularProgressProps={{
                      size: 16,
                      sx: { color: (theme) => theme.palette.common.white },
                    }}
                    type="submit"
                    loading={isSubmit}
                    onClick={handleSubmit(handleFormSignIn)}
                    fullWidth={true}
                    id="btn-login"
                    label="Login"
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledFormFooter>
                    <Box>
                      <StyledInfoLabel>
                        Don &apos;t have an account ?{" "}
                      </StyledInfoLabel>
                    </Box>
                    <Box>
                      <LinkButtonComponent
                        sx={styledSignUpLabel}
                        id="bnt-sign-up"
                        label="Sign up"
                        onClick={() => {
                          router.push(ROUTES.SIGNUP);
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

export default LoginPage;
