const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../08-useReducer/TodoItem");

describe("Tests in todoItem component", () => {
  const TODO = {
    id: 1,
    description: "Be a pro in react",
    done: false,
  };

  const deleteTodoMock = jest.fn();
  const toggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show the pending TODO", () => {
    render(
      <TodoItem
        todo={TODO}
        onDeleteTodo={deleteTodoMock}
        onToggleTodo={toggleTodoMock}
      />
    );

    expect(screen.getByText("Be a pro in react")).toBeTruthy();
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("should show the TODO completed", () => {
    TODO.done = true;

    render(
      <TodoItem
        todo={TODO}
        onDeleteTodo={deleteTodoMock}
        onToggleTodo={toggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("should execute the toggleTodo when the span is clicked", () => {
    render(
      <TodoItem
        todo={TODO}
        onDeleteTodo={deleteTodoMock}
        onToggleTodo={toggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(toggleTodoMock).toBeCalledWith(TODO.id);
  });

  test("should execute the deleteTodo when the button is clicked", () => {
    render(
      <TodoItem
        todo={TODO}
        onDeleteTodo={deleteTodoMock}
        onToggleTodo={toggleTodoMock}
      />
    );

    const deleteButton = screen.getByRole("button", { name: "Delete" });
    fireEvent.click(deleteButton);
    expect(deleteTodoMock).toBeCalledWith(TODO.id);
  });
});
