import { AdminLayout } from "@/components/layouts/AdminLayout";
import { axiosInstance } from "@/lib/axios";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "@/components/forms/ProductForm";

const CreateProductPage = () => {
  const navigate = useNavigate();

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
      <ProductForm
        onSubmit={handleCreateProduct}
        cardTitle="Add a new product"
      />
    </AdminLayout>
  );
};

export default CreateProductPage;
