export const TodoItem = ({ todo, onDeleteTodo }) => {
  const { description, id } = todo;
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span>{description}</span>
      <button className='btn btn-danger' onClick={() => onDeleteTodo(id)}>
        Delete
      </button>
    </li>
  );
};
