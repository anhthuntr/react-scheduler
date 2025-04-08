import { z } from "zod";

export const orderSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    resourceId: z.string().optional(),
    startTime: z.date().optional(),
    endTime: z.date().optional(),
    status: z.enum(["Pending", "Scheduled"]),
  })
  .refine(
    (data) => {
      if (data.status === "Scheduled") {
        return (
          !!data.resourceId &&
          !!data.startTime &&
          !!data.endTime &&
          data.endTime > data.startTime
        );
      }
      return true;
    },
    {
      message:
        "Scheduled orders must include resource, start and end time (end time must be after start)",
      path: ["status"], // associate error with status
    }
  )
  .refine(
    (data) => {
      if (data.endTime && data.startTime) return data.endTime > data.startTime;
      return true;
    },
    {
      message: "End time must be after start time",
      path: ["endTime"],
    }
  );

export const assignOrderSchema = z
  .object({
    title: z.string(),
    resourceId: z.string().min(1, "Resource is required"),
    startTime: z.date({ required_error: "Start time is required" }),
    endTime: z.date({ required_error: "End time is required" }),
    status: z.enum(["Pending", "Scheduled"]),
  })
  .refine((data) => data.endTime > data.startTime, {
    message: "End time must be after start time",
    path: ["endTime"],
  });
