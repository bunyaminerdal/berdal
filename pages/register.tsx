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

export default Register;
