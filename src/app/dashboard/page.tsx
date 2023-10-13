import { Dashboard } from "@/components/pages/dashboard";
import { User } from "@/types/types";

const user: User = {
  id: 1,
  email: "fulano@email.com",
  password: "123456",
  name: "Fulano de Tal",
  role: "teacher",
};

export default async function DashboardPage() {
  return <Dashboard role={user.role} />;
}
