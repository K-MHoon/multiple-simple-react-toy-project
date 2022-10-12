import styles from '../css/Todo.module.css';

const TodoItem = () => {
  return (
    <div className={styles.item}>
      <input type="checkbox" />
      <span>TodoItem</span>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
