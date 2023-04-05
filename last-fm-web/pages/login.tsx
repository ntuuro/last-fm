import AuthTopWrapper from "@/components/Auth/AuthTopWrapper";
import LoginForm from "@/components/Forms/LoginForm";
import AppLayout from "@/components/Shared/AppLayout";
import React from "react";

const Login = () => {
  return (
    <AppLayout>
      <AuthTopWrapper title="Login">
        <LoginForm />
      </AuthTopWrapper>
    </AppLayout>
  );
};

export default Login;
