import { useTodo } from "../hooks/";
import { TodoAdd, TodoList } from "./";

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleDeleteTodo,
		handleToggleTodo,
		handleNewTodo,
	} = useTodo();

	return (
		<>
			<h1>
				Todo App: {todosCount},<small>pendientes: {pendingTodosCount}</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				</div>
				<div className='col-5'>
					<h4>Add TODO</h4>
					<hr />
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
