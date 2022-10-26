import { connect, useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import {
  changeTodoInput,
  addTodo,
  toggleTodoStatus,
  removeTodo,
  clearAllTodos,
  changeFilter,
} from '../modules/todos';
import { TodoState } from '../modules/todos';
import { Dispatch } from 'redux';
import { Todo } from '../App';
import { useCallback } from 'react';

const TodosContainer = () => {
  const { input, filter, todos } = useSelector((state: TodoState) => ({
    input: state.input,
    filter: state.filter,
    todos: state.todos,
  }));

  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input: string) => dispatch(changeTodoInput(input)),
    [dispatch],
  );
  const onInsert = useCallback(
    (input: string) => dispatch(addTodo(input)),
    [dispatch],
  );
  const onToggle = useCallback(
    (id: number) => dispatch(toggleTodoStatus(id)),
    [dispatch],
  );
  const onRemove = useCallback(
    (id: number) => dispatch(removeTodo(id)),
    [dispatch],
  );
  const onClearAll = useCallback(() => dispatch(clearAllTodos()), [dispatch]);

  const onChangeFilter = useCallback(
    (filter: string) => dispatch(changeFilter(filter)),
    [dispatch],
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
      onClearAll={onClearAll}
      filter={filter}
      onChangeFilter={onChangeFilter}
    />
  );
};

export default TodosContainer;
