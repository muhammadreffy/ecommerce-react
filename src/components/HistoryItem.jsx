import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const HistoryItem = (props) => {
  const { id, dateTime, name, imageUrl, price, quantity, totalPrice, items } =
    props;
  return (
    <div className="p-4 border rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-sm text-muted-foreground">{dateTime}</span>

          <span className="font-semibold text-muted-foreground">INV-{id}</span>
        </div>

        <div className="flex flex-col items-end justify-center">
          <span className="text-2xl font-bold">
            Rp{price.toLocaleString("id-ID")}
          </span>
        </div>
      </div>

      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead colSpan={2}>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total Price</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {items.map((item) => {
            <TableRow className="font-semibold text-muted-foreground">
              <TableCell colSpan={2}>
                <div className="flex items-center gap-6">
                  <div className="aspect-square w-[100px] overflow-hidden rounded-md">
                    <img src={item.product.imageUrl} alt={item.product.name} />
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
                Rp{(item.product.price * item.quantity).toLocaleString("id-ID")}
              </TableCell>
            </TableRow>;
          })}
        </TableBody>
      </Table>
    </div>
  );
};
