import { Fragment } from "react";
import AuthForm from "../components/Layouts/AuthMembers";
import FormLogin from "../components/Fragments/FormLogin";

function LoginPage() {
  return (
    <AuthForm title="Login">
      <FormLogin />
    </AuthForm>
  );
}

export default LoginPage;
