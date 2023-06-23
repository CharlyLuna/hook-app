export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  const { description, id } = todo;
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(id)}
        aria-label='span'
      >
        {description}
      </span>
      <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};
