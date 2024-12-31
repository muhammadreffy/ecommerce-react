import { AdminLayout } from "@/components/layouts/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const createProductFormSchema = z.object({
  name: z.string().min(3, "Product name has to be 3 characters or more"),
  price: z.coerce.number().min(0, "Price has to be greater than 0"),
  stock: z.coerce.number().min(0, "Stock has to be greater than 0"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
});

const CreateProductPage = () => {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      imageUrl: "",
    },
    resolver: zodResolver(createProductFormSchema),
  });

  const handleCreateProduct = async (values) => {
    try {
      await axiosInstance.post("/products", {
        name: values.name,
        price: values.price,
        stock: values.stock,
        imageUrl: values.imageUrl,
      });

      alert("product created");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout title="Create Products">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateProduct)}
          className="max-w-xl"
        >
          <Card>
            <CardHeader>
              <CardTitle>Add a new products</CardTitle>
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
                Create new product
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </AdminLayout>
  );
};

export default CreateProductPage;
