import { RegisterEmployeeForm } from "@/components/pages/register-employee/register-employee-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadastrar funcionário",
};

export default function EmployeePage() {
  return <RegisterEmployeeForm />;
}
