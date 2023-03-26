import {
  Box,
  Button,
  Container,
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSnackbar } from "notistack";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please provide a valid Email!")
      .required("Email is required!"),
    password: yup
      .string()
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/, {
        message:
          "Password must be at least 6 char and include a lower, a upper, a number, a special char!",
      })
      .required("Password is required!"),
  })
  .required();
type LoginFormInputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit, control } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: LoginFormInputs) => {
    signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    }).then((res) => {
      if (res?.ok) {
        enqueueSnackbar("Logged in Successfully, Welcome!", {
          variant: "success",
        });
        push("/");
      } else {
        enqueueSnackbar(res?.error, {
          variant: "error",
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "15px",
          padding: "20px",
          width: "360px",
        }}
      >
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <FormControl error={error ? true : false} variant="filled">
                <InputLabel>Email</InputLabel>
                <FilledInput type="email" fullWidth {...field} />
                {error ? (
                  <FormHelperText>{error.message}</FormHelperText>
                ) : null}
              </FormControl>
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <FormControl error={error ? true : false} variant="filled">
                <InputLabel>Password</InputLabel>
                <FilledInput type="password" fullWidth {...field} />
                {error ? (
                  <FormHelperText>{error.message}</FormHelperText>
                ) : null}
              </FormControl>
            );
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default LoginForm;
