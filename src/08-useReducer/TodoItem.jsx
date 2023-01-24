export const TodoItem = ({ todo }) => {
  const { description } = todo;
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span>{description}</span>
      <button className='btn btn-danger'>Delete</button>
    </li>
  );
};
