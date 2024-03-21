// TodoList.tsx
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { Todo } from '../components/Todo';
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../actions/todoActions';

interface TodoListProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, addTodo, deleteTodo, editTodo, toggleTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => editTodo(todo.id, prompt('Enter new text') || todo.text)}>
              Edit
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  todos: state.todo.todos,
});

export default connect(mapStateToProps, { addTodo, deleteTodo, editTodo, toggleTodo })(TodoList);
