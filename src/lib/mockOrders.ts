import { ProductionOrder } from "@/types";

export const MOCK_ORDERS: ProductionOrder[] = [
  {
    id: "order-1",
    title: "Order Alpha",
    resourceId: "res1",
    startTime: new Date("2025-04-07T08:00:00Z"),
    endTime: new Date("2025-04-07T10:00:00Z"),
    status: "Scheduled",
  },
  {
    id: "order-2",
    title: "Order Beta",
    resourceId: "res2",
    startTime: new Date("2025-04-07T11:00:00Z"),
    endTime: new Date("2025-04-07T14:00:00Z"),
    status: "Scheduled",
  },
  {
    id: "order-3",
    title: "Order Gamma",
    resourceId: undefined,
    startTime: undefined,
    endTime: undefined,
    status: "Pending",
  },
  {
    id: "order-4",
    title: "Order Delta",
    resourceId: undefined,
    startTime: undefined,
    endTime: undefined,
    status: "Pending",
  },
  {
    id: "order-5",
    title: "Order Epsilon",
    resourceId: "res2",
    startTime: new Date("2025-04-09T08:30:00Z"),
    endTime: new Date("2025-04-09T09:45:00Z"),
    status: "Scheduled",
  },
];
