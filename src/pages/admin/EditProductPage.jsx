import { ProductForm } from "@/components/forms/ProductForm";
import { AdminLayout } from "@/components/layouts/AdminLayout";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProductPage = () => {
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    stock: 0,
    imageUrl: "",
  });

  const params = useParams();

  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await axiosInstance.get(`/products/${params.productId}`);

      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleEditProduct = async (values) => {
    try {
      await axiosInstance.patch(`/products/${params.productId}`, {
        name: values.name,
        price: values.price,
        stock: values.stock,
        imageUrl: values.imageUrl,
      });

      alert("Product Edited");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AdminLayout title="Edit Product">
      {product.id ? (
        <ProductForm
          onSubmit={handleEditProduct}
          cardTitle={`Editing ${product.name}`}
          defaultName={product.name}
          defaultPrice={product.price}
          defaultStock={product.stock}
          defaultImageUrl={product.imageUrl}
        />
      ) : null}
    </AdminLayout>
  );
};

export default EditProductPage;
