import styles from '../css/Todo.module.css';

interface Porps {
  readonly onClearAll: () => void;
}

const TodoFooter = ({ onClearAll }: Porps) => {
  return (
    <div className={styles.footer}>
      <button onClick={() => onClearAll()}>전체 삭제</button>
    </div>
  );
};

export default TodoFooter;
