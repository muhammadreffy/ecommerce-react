import { AuthPage } from "@/components/guard/AuthPage";
import { HistoryItem } from "@/components/HistoryItem";
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HistoryPage = () => {
  const [transactions, setTransactions] = useState([]);

  const userSelector = useSelector((state) => state.user);

  const getTransactions = async () => {
    try {
      const historyResponse = await axiosInstance.get("/transactions", {
        params: {
          userId: userSelector.id,
        },
      });
      setTransactions(historyResponse.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <AuthPage>
      <main className="max-w-screen-lg min-h-screen px-4 mx-auto mt-24">
        <h1 className="text-3xl font-bold">My Orders</h1>
        <div className="flex flex-col mt-8 gap-y-24">
          {transactions.map((transaction) => (
            <HistoryItem key={transaction.id} {...transaction} />
          ))}
        </div>
      </main>
    </AuthPage>
  );
};

export default HistoryPage;
