import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const productFormSchema = z.object({
  name: z.string().min(3, "Product name has to be 3 characters or more"),
  price: z.coerce.number().min(0, "Price has to be greater than 0"),
  stock: z.coerce.number().min(0, "Stock has to be greater than 0"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
});

export const ProductForm = (props) => {
  const {
    onSubmit,
    cardTitle,
    defaultName,
    defaultPrice,
    defaultStock,
    defaultImageUrl,
  } = props;

  const form = useForm({
    defaultValues: {
      name: defaultName || "",
      price: defaultPrice || 0,
      stock: defaultStock || 0,
      imageUrl: defaultImageUrl || "",
    },

    resolver: zodResolver(productFormSchema),
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl">
        <Card>
          <CardHeader>
            <CardTitle>{cardTitle}</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product name</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormDescription>
                    Product name has to be between 5 characters and 100
                    characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormDescription>
                    Please use a valid image url
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>

          <CardFooter>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
