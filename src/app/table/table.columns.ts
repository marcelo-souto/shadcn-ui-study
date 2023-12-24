import { ColumnDef } from "@tanstack/react-table";
import { Data } from "./table.types";
import { format } from "date-fns";

export const columns: ColumnDef<Data>[] = [
  {
    accessorFn: (data) => data.id,
    header: "ID",
  },
  {
    accessorFn: (data) => `${data.first_name} ${data.last_name}`,
    header: "Full Name",
  },
  {
    accessorFn: (data) => data.email,
    header: "Email",
  },
  {
    accessorFn: (data) => data.gender,
    header: "Gender",
  },
  {
    accessorFn: (data) => format(new Date(data.birthdate), "MM/dd/yyyy"),
    header: "Birthdate",
  },
];
