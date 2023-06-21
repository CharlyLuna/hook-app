import { renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";
import { act } from "react-dom/test-utils";

describe("Test in useForm", () => {
  const initialForm = {
    name: "chLuna",
    email: "test@test.com",
  };
  test("should return the default values", () => {});
  const { result } = renderHook(() => useForm(initialForm));
  expect(result.current).toEqual({
    name: initialForm.name,
    email: initialForm.email,
    formState: initialForm,
    onInputChange: expect.any(Function),
    onResetForm: expect.any(Function),
  });
  test("should change the name of the form", () => {
    const newValue = "chluna@gmail.com";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    act(() => onInputChange({ target: { name: "email", value: newValue } }));

    expect(result.current.email).toBe(newValue);
    expect(result.current.formState.email).toBe(newValue);
  });
  test("should reset the values of the form", () => {
    const newValue = "chluna@gmail.com";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange({ target: { name: "email", value: newValue } });
      onResetForm();
    });

    expect(result.current.email).toBe(initialForm.email);
    expect(result.current.formState.email).toBe(initialForm.email);
  });
});
