import {
  Box,
  Button,
  Input,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Link from "next/link";
import userSignUp from "../services/user/userServices";

const schema = yup
  .object({
    fullName: yup.string().min(3).required("Please Enter your Name!"),
    email: yup
      .string()
      .email("Email is not valid!")
      .required("Please Enter your Email"),
    password: yup
      .string()
      .required("Please Enter your Password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required!")
      .oneOf([yup.ref("password")], "Passwords does not match"),
  })
  .required();
export type UserSignUpFormDataType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const SignUpForm = () => {
  const theme = useTheme();

  const { control, handleSubmit } = useForm<UserSignUpFormDataType>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: UserSignUpFormDataType) => {
    try {
      const { data: createdUserData, error } = await userSignUp(data);
      console.log("🚀 ~ file: SignUpForm.tsx:58 ~ onSubmit ~ error:", error);
      console.log(
        "🚀 ~ file: SignUpForm.tsx:58 ~ onSubmit ~ data:",
        createdUserData
      );
    } catch (error) {}
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexGrow: "1",
        marginTop: { xs: "0", sm: "50px" },
      }}
    >
      <Box
        color={`${theme.palette.primary.main}`}
        width="100%"
        height="100%"
        gap="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h4">
          <Box sx={{ textAlign: "center" }}>Sign Up</Box>
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "400px",
            maxWidth: "400px",
            gap: "20px",
            padding: "20px",
          }}
        >
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Full Name"
                variant="outlined"
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error, invalid } }) => (
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                error={invalid}
                helperText={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                key={field.name}
                label="Confirm Password"
                variant="outlined"
                type="password"
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
          />
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
          <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
            <Typography variant="body2">
              If you already have an account, go to
            </Typography>
            <Link href="/sign-in">
              <Typography variant="body2">Sign In</Typography>
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm;
