import {
  Box,
  Button,
  Container,
  FilledInput,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { register } from "@src/services/auth-services";
import { useSnackbar } from "notistack";
import { sendConfirmationEmail } from "@src/services/send-email";

const schema = yup
  .object({
    name: yup.string().required("Name is required!").min(3).max(50),
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
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")], "Passwords does not match"),
  })
  .required();
type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const { handleSubmit, control } = useForm<RegisterFormInputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: RegisterFormInputs) => {
    setLoading(true);
    register({
      email: data.email,
      name: data.name,
      password: data.password,
    }).then((res) => {
      switch (res.status) {
        case 200:
          if (typeof res.data !== "string")
            enqueueSnackbar(res.data.message, {
              variant: "success",
            });
          setLoading(false);
          push("/login");
          break;
        case 400:
          enqueueSnackbar(res?.data?.toString(), {
            variant: "error",
          });
          setLoading(false);
          break;
        default:
          console.log(res.data);
          setLoading(false);
          break;
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
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <FormControl error={error ? true : false} variant="filled">
                <InputLabel>Name</InputLabel>
                <FilledInput fullWidth {...field} />
                {error ? (
                  <FormHelperText>{error.message}</FormHelperText>
                ) : null}
              </FormControl>
            );
          }}
        />
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
        <Controller
          name="confirmPassword"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <FormControl error={error ? true : false} variant="filled">
                <InputLabel>Confirm Password</InputLabel>
                <FilledInput type="password" fullWidth {...field} />
                {error ? (
                  <FormHelperText>{error.message}</FormHelperText>
                ) : null}
              </FormControl>
            );
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" type="submit" disabled={loading}>
            Sign Up
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default RegisterForm;
