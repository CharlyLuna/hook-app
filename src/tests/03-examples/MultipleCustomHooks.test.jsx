import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Tests in MultipleCustomHooks component", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => jest.clearAllMocks());

  test("should show the default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Breaking bad quotes")).toBeTruthy();
    expect(screen.getByText("Loading...")).toBeTruthy();

    const reRollButton = screen.getByRole("button", {
      name: "Re-roll quote/s",
    });
    const resetButton = screen.getByRole("button", {
      name: "Reset quotes",
    });
    expect(reRollButton.disabled).toBeTruthy();
    expect(resetButton).toBeTruthy();
  });
  test("should show a quote", () => {
    useFetch.mockReturnValue({
      data: [{ quote: "Some random quote", author: "Anonymus" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Some random quote")).toBeTruthy();
    expect(screen.getByText("Anonymus")).toBeTruthy();

    const reRollButton = screen.getByRole("button", {
      name: "Re-roll quote/s",
    });
    expect(reRollButton.disabled).toBeFalsy();
  });
  test("should call the function of increment", () => {
    useFetch.mockReturnValue({
      data: [{ quote: "Some random quote", author: "Anonymus" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const moreQuotesButton = screen.getByRole("button", {
      name: "Get +1 quotes",
    });

    fireEvent.click(moreQuotesButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
