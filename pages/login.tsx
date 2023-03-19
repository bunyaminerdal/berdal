import AuthForm from "@components/auth/AuthForm";
import React from "react";

const Login = () => {
  return (
    <div>
      <div>Sign In</div>
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
