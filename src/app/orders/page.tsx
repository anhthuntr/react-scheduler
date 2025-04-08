import { MOCK_ORDERS } from "@/lib/mockOrders";
import { ProductionOrder } from "@/types";
import { orderColumns } from "./OrderColumn";
import { OrderTable } from "./OrderTable";
import { MainNav } from "@/_components/Nav";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

async function getData(): Promise<ProductionOrder[]> {
  return MOCK_ORDERS;
}

export default async function OrderPage() {
  const data = await getData();
  return (
    <div className="flex-1 space-y-4 p-8 pt-6 ml-3 font-[family-name:var(--font-geist-sans)]">
      <MainNav />
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="scheduler">Scheduler</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <OrderTable columns={orderColumns} data={data} />
        </TabsContent>
        <TabsContent value="scheduler" className="space-y-4"></TabsContent>
      </Tabs>
    </div>
  );
}
