"use client";

import { useMemo } from "react";

import { data } from "@/components/basic-table/table.data";
import { columns } from "@/components/basic-table/table.columns";
import { Data } from "@/components/basic-table/table.types";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Container } from "@/components/ui/container";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table/table";

const BasicTable = () => {
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
};

BasicTable.displayName = "BasicTable";

export { BasicTable };
