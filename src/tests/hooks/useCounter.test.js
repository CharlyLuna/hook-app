import { renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";
import { act } from "react-dom/test-utils";

describe("Tests in useCounter", () => {
  test("should return the default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(0);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  test("should generate the counter with 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
  test("should increment the counter from 10 to 13", () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(13);
  });
  test("should decrement the counter from 10 to 6", () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;
    act(() => {
      decrement(2);
      decrement(2);
    });

    expect(result.current.counter).toBe(6);
  });
  test("should reset the counter to 0", () => {
    const { result } = renderHook(() => useCounter(0));
    const { increment, reset } = result.current;
    act(() => {
      increment(10);
      reset();
    });

    expect(result.current.counter).toBe(0);
  });
});
