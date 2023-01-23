import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((newValue = 1) => {
    setCounter((value) => value + newValue);
  }, []);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <ShowIncrement increment={increment} />
    </>
  );
};
