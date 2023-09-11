import { Metadata } from "next";
import { RegisterForm } from "@/components/pages/register/register-form";

export const metadata: Metadata = {
  title: "Cadastre-se",
  description: "página de cadastro do usuário",
};

export default function RegisterFormPage() {
  return <RegisterForm />;
}
