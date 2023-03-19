import AuthForm from "@components/auth/AuthForm";
import LoginForm from "@components/auth/LoginForm";
import LoginPageLayout from "@src/layouts/LoginPageLayout";
import React from "react";

const Login = () => {
  return (
    <LoginPageLayout>
      <LoginForm />
    </LoginPageLayout>
  );
};

export default Login;
