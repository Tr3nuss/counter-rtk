import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/counterSlice";

export default function Counter() {
  let count = useSelector((state) => state.counter.value);
  let counterDispatching = useDispatch();

  return (
    <>
      <button onClick={() => counterDispatching(increment())}>+</button>
      <div>{count}</div>
      <button onClick={() => counterDispatching(decrement())}>-</button>
      <button onClick={() => counterDispatching(incrementByAmount())}>!</button>
    </>
  );
}
