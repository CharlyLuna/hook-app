import { useRef, useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onNewTodo = (event) => {
    event.preventDefault();
    if (description.length < 4) return;
    const todo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    handleNewTodo(todo);
    onResetForm();
  };

  return (
    <form onSubmit={onNewTodo}>
      <input
        type='text'
        name='description'
        value={description}
        placeholder='What do you have to do?'
        className='form-control'
        onChange={onInputChange}
      />
      <button type='submit' className='btn btn-dark mt-2'>
        Add
      </button>
    </form>
  );
};
