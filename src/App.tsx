import { useState } from 'react'
import './App.css'
import { Input } from './assets/components/input/Input';
import { TodoData } from './types/todo';
import { TodoList } from "./assets/components/todoList/TodoList";

function App() {
  const [todo, setTodo] = useState<TodoData[]>([]);
  console.log(todo)
  return (
    <>
      <Input setTodo={setTodo} />
      <TodoList setTodo={setTodo} todoList={todo} />
    </>
  );
}

export default App;
