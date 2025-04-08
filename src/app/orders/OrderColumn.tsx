"use client";

import { ProductionOrder } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/_components/ColumnHeader";
import { OrderModal } from "./OrderModal";
export const orderColumns: ColumnDef<ProductionOrder>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Title"} />
    ),
  },
  {
    accessorKey: "resourceId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Resource ID"} />
    ),
  },
  {
    accessorKey: "startTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Start Time"} />
    ),
    cell: (props) => {
      const value = props.getValue() as string | undefined;
      return value ? new Date(value).toLocaleDateString() : "Not Scheduled";
    }, //format date
  },
  {
    accessorKey: "endTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"End Time"} />
    ),
    cell: (props) => {
      const value = props.getValue() as string | undefined;
      return value ? new Date(value).toLocaleDateString() : "Not Scheduled";
    }, //format date
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Status"} />
    ),
    cell: (props) => {
      const status = props.getValue() as string;
      let bgColor = "";

      switch (status) {
        case "Pending":
          bgColor = "bg-zinc-700";
          break;
        case "Scheduled":
          bgColor = "bg-amber-700";
          break;
      }
      return (
        <span className={`px-2 py-1 rounded text-white ${bgColor}`}>
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      return <OrderModal mode="edit" order={order} />;
    },
  },
];
