import { useState, useRef } from 'react';
import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Todo } from '../App';

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const nextId = useRef(1);
  const onInsert = (text: string) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  return (
    <div>
      <TodoHeader />
      <TodoInput onInsert={onInsert} />
      <TodoList todos={todos} />
      <TodoFooter />
    </div>
  );
};

export default Todos;
