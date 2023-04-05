import AuthTopWrapper from "@/components/Auth/AuthTopWrapper";
import ForgotForm from "@/components/Forms/ForgotForm";
import AppLayout from "@/components/Shared/AppLayout";
import React from "react";

const Forgot = () => {
  return (
    <AppLayout>
      <AuthTopWrapper title="Recover your account">
        <ForgotForm />
      </AuthTopWrapper>
    </AppLayout>
  );
};

export default Forgot;
