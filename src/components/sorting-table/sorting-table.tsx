"use client";

import { useMemo, useState } from "react";

import { data } from "@/components/sorting-table/table.data";
import { columns } from "@/components/sorting-table/table.columns";
import { Data } from "@/components/sorting-table/table.types";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
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

import { ArrowDown, ArrowUp } from "lucide-react";

const SortingTable = () => {
  const tableColumns = useMemo(() => columns, []);
  const tableData = useMemo(() => data, []);

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<Data>({
    columns: tableColumns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  const getSortedColumn = (columnId: string) => {
    const column = sorting.find((sort) => sort.id === columnId);

    return {
      isSorted: !!column,
      isSortedDesc: !!column && column?.desc,
    };
  };

  return (
    <Container as="main" className="py-8">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((column) => {
                const sortedColumn = getSortedColumn(column.id);

                return (
                  <TableHead
                    key={column.id}
                    onClick={column.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      column.column.columnDef.header,
                      column.getContext()
                    )}
                    {sortedColumn.isSorted && sortedColumn.isSortedDesc && (
                      <ArrowDown size={16} className="inline-block" />
                    )}
                    {sortedColumn.isSorted && !sortedColumn.isSortedDesc && (
                      <ArrowUp size={16} className="inline-block" />
                    )}
                  </TableHead>
                );
              })}
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

SortingTable.displayName = "SortingTable";

export { SortingTable };
