import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Pencil, Plus } from "lucide-react";
import { useState } from "react";
import OrderForm from "./OrderForm";
import { orderSchema } from "@/utils/orderSchema";
import { z } from "zod";

type ModalProps = {
  mode: "create" | "edit";
  order?: Partial<z.infer<typeof orderSchema>>;
};
export const OrderModal = ({ mode, order }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {mode === "create" ? (
        <Button onClick={() => setOpen(true)} size="icon" className="ml-3">
          <Plus />
        </Button>
      ) : (
        <Button
          onClick={() => setOpen(true)}
          variant="ghost"
          className="h-8 w-8 p-0"
        >
          <Pencil className="h-4 w-4" />{" "}
        </Button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {mode === "create" ? "Create Order" : "Edit Order"}
            </DialogTitle>
          </DialogHeader>
          <OrderForm
            mode={mode}
            defaultValues={mode === "edit" ? order : undefined}
            onClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
