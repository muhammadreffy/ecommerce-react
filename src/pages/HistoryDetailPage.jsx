import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AuthPage } from "@/components/guard/AuthPage";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { useSelector } from "react-redux";

const HistoryDetailPage = () => {
  const params = useParams();

  const userSelector = useSelector((state) => state.user);

  const [historyDetail, setHistoryDetail] = useState({
    id: "",
    userId: "",
    tax: 0,
    totalPrice: 0,
    dateTime: null,
    items: [],
  });

  const getHistoryDetail = async () => {
    try {
      const historyDetailResponse = await axiosInstance.get(
        `/transactions/${params.transactionId}`
      );

      setHistoryDetail(historyDetailResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHistoryDetail();
  }, []);

  if (userSelector.id !== historyDetail.userId && historyDetail.userId) {
    return <Navigate to="/" />;
  }

  return (
    <AuthPage>
      <main className="max-w-screen-lg min-h-screen px-4 mx-auto mt-24">
        <h1 className="text-3xl font-bold">INV-{historyDetail.id}-FYSTORE</h1>
        <h2 className="text-xl font-bold">
          {new Date(historyDetail.dateTime).toLocaleString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </h2>

        <Card className="my-10 bg-gray-50 h-min">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex justify-between pb-4 border-b">
              <span className="text-sm text-muted-foreground">Subtotal</span>

              <span className="text-sm text-muted-foreground">
                Rp
                {historyDetail.items
                  .reduce(
                    (subtotal, item) =>
                      subtotal + item.product.price * item.quantity,
                    0
                  )
                  .toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between py-4">
              <span className="text-sm text-muted-foreground">Taxes (11%)</span>

              <span className="text-sm text-muted-foreground">
                Rp{historyDetail.tax.toLocaleString("id-ID")}
              </span>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-6">
            <div className="flex justify-between w-full">
              <span className="text-muted-foreground">Order total</span>

              <strong className="font-semibold">
                Rp{historyDetail.totalPrice.toLocaleString("id-ID")}
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
              <TableHead>Total Price</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {historyDetail.items.map((item) => (
              <TableRow
                key={item.id}
                className="font-semibold text-muted-foreground"
              >
                <TableCell colSpan={2}>
                  <div className="flex items-center gap-6">
                    <div className="aspect-square w-[100px] overflow-hidden rounded-md">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                      />
                    </div>
                    <p className="font-semibold text-primary">
                      {item.product.name}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  Rp{item.product.price.toLocaleString("id-ID")}
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  Rp
                  {(item.product.price * item.quantity).toLocaleString("id-ID")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </AuthPage>
  );
};

export default HistoryDetailPage;
