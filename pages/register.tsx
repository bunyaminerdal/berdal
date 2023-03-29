import RegisterForm from "@components/auth/RegisterForm";
import RegisterPageLayout from "@src/layouts/RegisterPageLayout";
import React from "react";

const Register = () => {
  return (
    <RegisterPageLayout>
      <RegisterForm />
    </RegisterPageLayout>
  );
};
Register.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default Register;
