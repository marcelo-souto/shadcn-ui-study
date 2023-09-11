import type { Metadata } from "next";

import { LoginForm } from "@/components/pages/login/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "página de login do usuário",
};

export default function LoginPage() {
  return <LoginForm />;
}
