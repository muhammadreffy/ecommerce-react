import { AuthPage } from "@/components/guard/AuthPage";
import { HistoryItem } from "@/components/HistoryItem";

const HistoryPage = () => {
  return (
    <AuthPage>
      <main className="max-w-screen-lg min-h-screen px-4 mx-auto mt-24">
        <h1 className="text-3xl font-bold">My Orders</h1>

        <div className="flex flex-col mt-8 gap-y-24">
          <HistoryItem />
        </div>
      </main>
    </AuthPage>
  );
};

export default HistoryPage;
