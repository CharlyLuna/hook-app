import { useEffect, useReducer } from "react";
import { TodoAdd, TodoList, todoReducer } from "./";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "See Fernando God tutorials",
  //   done: false,
  // },
  // {
  //   id: new Date().getTime() * 4,
  //   description: "Coding",
  //   done: false,
  // },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) ?? [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "Remove Todo",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        Todo App (10) <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          {/* Todo list */}
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
        <div className='col-5'>
          <h4>Add TODO</h4>
          <hr />
          {/* TodoAdd */}
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
