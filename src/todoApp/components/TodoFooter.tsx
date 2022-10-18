import { TodoConsumer } from '../contexts/todo';
import styles from '../css/Todo.module.css';

const TodoFooter = () => {
  return (
    <TodoConsumer>
      {({ actions }) => (
        <div className={styles.footer}>
          <button onClick={() => actions.onClearAll()}>전체 삭제</button>
        </div>
      )}
    </TodoConsumer>
  );
};

export default TodoFooter;
