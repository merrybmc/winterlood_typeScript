import { useEffect, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    setTodos([
      ...todos,
      {
        id: idRef.current++,
        content: text,
      },
    ]);
  };

  const onClickDelete = (id: number) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className='App'>
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} onClickDelete={onClickDelete} {...todo} />
      ))}
    </div>
  );
}

export default App;
