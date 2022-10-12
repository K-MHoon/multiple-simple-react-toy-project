import TodoItem from './TodoItem';
import styles from '../css/Todo.module.css';

const TodoList = () => {
  return (
    <div className={styles.list}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
