import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CounterPage = () => {
  const [countInput, setCountInput] = useState(0);

  const countSelector = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrementCounter = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const setCounterWithInput = () => {
    dispatch({
      type: "SET_COUNT",
      payload: {
        newCount: countInput,
      },
    });
  };

  return (
    <main className="flex flex-col items-center justify-center max-w-screen-md min-h-[80vh] gap-4 px-4 mx-auto mt-8">
      <p className="text-5xl font-bold">Count: {countSelector.count}</p>

      <div className="flex items-center gap-4">
        <Button size="icon" onClick={decrementCounter}>
          <Minus />
        </Button>

        <Button size="icon" onClick={incrementCounter}>
          <Plus />
        </Button>
      </div>

      <div className="flex gap-2 mt-8">
        <Input
          type="number"
          onChange={(e) => setCountInput(Number(e.target.value))}
        />

        <Button onClick={setCounterWithInput}>Submit</Button>
      </div>
    </main>
  );
};

export default CounterPage;
