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
Login.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default Login;
