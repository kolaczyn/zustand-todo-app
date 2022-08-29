import React from "react";
import { useBearStore } from "../src/store/counter";

const HomePage = () => {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  const removeNBears = useBearStore((state) => state.removeNBears);

  return (
    <div>
      <div>bears: {bears}</div>
      <button onClick={increasePopulation}>Increase population</button>
      <button onClick={removeAllBears}>Remove all</button>
      <button onClick={() => removeNBears(5)}>remove 5 bears</button>
      <button onClick={() => removeNBears(-9)}>add 9 bears</button>
    </div>
  );
};

export default HomePage;
