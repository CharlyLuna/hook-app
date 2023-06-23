import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../08-useReducer/TodoApp";
import { useTodo } from "../../hooks/useTodo";

jest.mock("../../hooks/useTodo");

describe("Test in TodoApp component", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, description: "Random TODO", done: false },
      { id: 2, description: "Random TODO 2", done: false },
    ],
    todosCount: 2,
    pendingTodosCount: 2,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });

  test("should show the component correctly", () => {
    render(<TodoApp />);
    expect(screen.getByText("Random TODO")).toBeTruthy();
    expect(screen.getByText("Random TODO 2")).toBeTruthy();
    expect(screen.getByText("pendientes: 2")).toBeTruthy();
  });
});
