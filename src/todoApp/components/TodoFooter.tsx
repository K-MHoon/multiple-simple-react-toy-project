import { useContext } from 'react';
import TodoContext from '../contexts/todo';
import styles from '../css/Todo.module.css';

const TodoFooter = () => {
  const { actions } = useContext(TodoContext);

  return (
    <div className={styles.footer}>
      <button onClick={() => actions.onClearAll()}>전체 삭제</button>
    </div>
  );
};

export default TodoFooter;
