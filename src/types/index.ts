export type ResourceStatus = "Available" | "Busy";

export type Resource = {
  id: string;
  name: string;
  status: ResourceStatus;
};

export type OrderStatus = "Pending" | "Scheduled";

export type ProductionOrder = {
  id: string;
  title: string;
  resourceId?: string;
  startTime?: Date;
  endTime?: Date;
  status: OrderStatus;
};
