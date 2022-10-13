import styles from '../css/Todo.module.css';
import { useState } from 'react';

const TodoInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.input}>
      <form>
        <input placeholder="할 일을 입력하세요" value={value} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoInput;
