import { axiosInstance } from "@/lib/axios";
import { globalStore } from "@/store/reducers";

export const getCart = async (userId) => {
  try {
    const cartResponse = await axiosInstance.get("/carts", {
      params: {
        userId,
        _embed: "product",
      },
    });

    globalStore.dispatch({
      type: "CART_GET",
      payload: cartResponse.data,
    });
  } catch (error) {
    console.error(error);
  }
};
