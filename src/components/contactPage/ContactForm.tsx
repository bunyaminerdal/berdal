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
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { contactEmail } from "@src/services/contact-email";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please provide a valid Email!")
      .required("Email is required!"),
    name: yup.string().min(3).max(50).required("Name is required!"),
    subject: yup.string().min(3).max(50).required("Subject is required!"),
    context: yup.string().min(10).max(500).required("Context is required!"),
  })
  .required();
export type ContactFormInputs = {
  name: string;
  email: string;
  subject: string;
  context: string;
};

const ContactForm = () => {
  const { data, status } = useSession();
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isSending, setIsSending] = useState(false);

  const { handleSubmit, control } = useForm<ContactFormInputs>({
    defaultValues: {
      name: data?.user.name ?? "",
      email: data?.user.email ?? "",
      subject: "",
      context: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: ContactFormInputs) => {
    setIsSending(true);
    contactEmail(data).then(({ data, status }) => {
      if (status === 200) {
        enqueueSnackbar(data, {
          variant: "success",
        });
        push("/contact?message=success");
        setIsSending(false);
      } else {
        enqueueSnackbar(data, {
          variant: "error",
        });
        setIsSending(false);
      }
    });
  };
  if (status === "loading") return <div>Loading...</div>;
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
              <FormControl
                error={error ? true : false}
                variant="filled"
                disabled={!!data?.user}
              >
                <InputLabel>Name</InputLabel>
                <FilledInput type="text" fullWidth {...field} />
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
              <FormControl
                error={error ? true : false}
                variant="filled"
                disabled={!!data?.user}
              >
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
          name="subject"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <FormControl error={error ? true : false} variant="filled">
                <InputLabel>Subject</InputLabel>
                <FilledInput type="text" fullWidth {...field} />
                {error ? (
                  <FormHelperText>{error.message}</FormHelperText>
                ) : null}
              </FormControl>
            );
          }}
        />
        <Controller
          name="context"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <FormControl error={error ? true : false} variant="filled">
                <InputLabel>Context</InputLabel>
                <FilledInput
                  type="textarea"
                  fullWidth
                  {...field}
                  multiline
                  minRows={3}
                  maxRows={10}
                />
                {error ? (
                  <FormHelperText>{error.message}</FormHelperText>
                ) : null}
              </FormControl>
            );
          }}
        />

        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send"}
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default ContactForm;
