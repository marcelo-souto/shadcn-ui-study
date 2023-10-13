import type { User } from "@/types/types";
import { Fragment } from "react";

type DashboardProps = {
  role: User["role"];
};

const DashboardAdmin = async () => {
  return <div>Admin</div>;
};

const DashboardStudent = async () => {
  return <div>Student</div>;
};

const DashboardTeacher = async () => {
  return <div>Teacher</div>;
};

const Dashboard = async ({ role }: DashboardProps) => {
  
  const currentDashboard = {
    admin: <DashboardAdmin />,
    student: <DashboardStudent />,
    teacher: <DashboardTeacher />,
  }[role];

  return <Fragment>{currentDashboard}</Fragment>;
};

Dashboard.displayName = "Dashboard";

export { Dashboard };
