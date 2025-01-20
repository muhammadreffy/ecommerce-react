import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AuthPage } from "@/components/guard/AuthPage";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const HistoryDetailPage = () => {
  return (
    <AuthPage>
      <main className="min-h-screen max-w-screen-lg mx-auto px-4 mt-24">
        <h1 className="text-3xl font-bold">INV-19299-FYSTORE</h1>
        <h2 className="text-xl font-bold">21 Jan 2025</h2>

        <Card className="bg-gray-50 h-min my-10">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex justify-between pb-4 border-b">
              <span className="text-sm text-muted-foreground">Subtotal</span>

              <span className="text-sm text-muted-foreground">
                Rp{(1999929).toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between py-4">
              <span className="text-sm text-muted-foreground">Taxes (11%)</span>

              <span className="text-sm text-muted-foreground">
                Rp{(1999929).toLocaleString("id-ID")}
              </span>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-6">
            <div className="flex justify-between w-full">
              <span className="text-muted-foreground">Order total</span>

              <strong className="font-semibold">
                Rp{(1999929).toLocaleString("id-ID")}
              </strong>
            </div>
          </CardFooter>
        </Card>

        <Table className="mt-2">
          <TableHeader>
            <TableRow>
              <TableHead colSpan={2}>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Tax</TableHead>
              <TableHead>Total Price</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </main>
    </AuthPage>
  );
};

export default HistoryDetailPage;
