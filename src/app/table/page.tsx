"use client";

import { useMemo } from "react";

import { data } from "@/app/table/table.data";
import { columns } from "@/app/table/table.columns";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Container } from "@/components/ui/container";

import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table/table";
import { Data } from "./table.types";

export default function TablePage() {
  const tableColumns = useMemo(() => columns, []);
  const tableData = useMemo(() => data, []);

  const table = useReactTable<Data>({
    columns: tableColumns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container as="main" className="py-8">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <TableHead key={column.id}>
                  {flexRender(
                    column.column.columnDef.header,
                    column.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
