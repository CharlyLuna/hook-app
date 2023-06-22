import { todoReducer } from "../../08-useReducer/todoReducer";

describe("Tests in todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Random TODO",
      done: false,
    },
  ];

  test("should return the initial state", () => {
    const newState = todoReducer(initialState, {});
    // It can be used toBe cause is the same object (is potinting to the same memory space)
    expect(newState).toBe(initialState);
  });

  test("should add a new TODO", () => {
    const newTodo = {
      type: "Add Todo",
      payload: {
        id: 4,
        description: "Another TODO",
        done: false,
      },
    };
    const newState = todoReducer(initialState, newTodo);
    expect(newState.length).toBe(2);
    // Evaluate that the new state have the TODO that we added
    expect(newState).toContain(newTodo.payload);
  });

  test("should eliminate a TODO", () => {
    const eliminateTodoAction = {
      type: "Remove Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, eliminateTodoAction);
    expect(newState.length).toBe(0);
  });

  test("should toggle the 'done' state of the TODO", () => {
    const toggleTodoAction = {
      type: "Toggle Todo",
      payload: 1,
    };
    const newState = todoReducer(initialState, toggleTodoAction);
    expect(newState[0].done).toBeTruthy();
  });
});
