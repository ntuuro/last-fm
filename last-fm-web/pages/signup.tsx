import AuthTopWrapper from "@/components/Auth/AuthTopWrapper";
import SignupForm from "@/components/Forms/SignupForm";
import AppLayout from "@/components/Shared/AppLayout";
import React from "react";

const Signup = () => {
  return (
    <AppLayout>
      <AuthTopWrapper title="Create your account">
        <SignupForm />
      </AuthTopWrapper>
    </AppLayout>
  );
};

export default Signup;
