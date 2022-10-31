import styles from '../css/Todo.module.css';
import { Todo } from '../App';
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetEditingId, TodoState, setEditingId } from '../modules/todos';

interface Props {
  readonly todo: Todo;
  readonly onRemove: (id: number) => void;
  readonly onToggle: (id: number) => void;
  readonly onEdit: (id: number, input: string) => void;
}

const TodoItem = ({ todo, onRemove, onToggle, onEdit }: Props) => {
  const dispatch = useDispatch();
  const { id, text, done } = todo;
  const [inputText, setInputText] = useState('');
  const { editingId } = useSelector((state: TodoState) => ({
    editingId: state.editingId,
  }));

  const showInput = id === editingId;
  const onSetEditingId = useCallback(
    (id: number) => dispatch(setEditingId(id)),
    [dispatch],
  );
  const onResetEditingId = useCallback(
    () => dispatch(resetEditingId()),
    [dispatch],
  );

  const onDoubleClick = () => {
    console.log('onDoubleClick');

    onSetEditingId(id);

    setInputText(text);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('onChange ' + e.target.value);
    setInputText(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('handleKeyPress Enter inputText : ' + inputText);

      onEdit(id, inputText);

      onResetEditingId();
    }
  };

  // 입력 요소 포커스가 사라지면 실행된다.
  const handleBlur = () => {
    console.log('handleBlur inputText : ' + inputText);

    onResetEditingId();
  };

  const editInput: React.RefObject<HTMLInputElement> = React.createRef();

  // 마운트될 때 편집 입력 요소 설정
  useEffect(() => {
    console.log('useEffect todo = ' + todo);

    if (todo) {
      console.log('todo.text = ' + todo.text);

      setInputText(todo.text);
    }
  }, [todo]);

  // 마운트될 때 편집 입력 요소 포커스 처리
  useEffect(() => {
    if (editInput.current) {
      editInput.current.focus();
    }
  }, [editInput]);

  return (
    <div className={styles.item}>
      <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
      {showInput && (
        <input
          value={inputText}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          onBlur={handleBlur}
          ref={editInput}
        />
      )}
      {!showInput && <span onDoubleClick={onDoubleClick}>{text}</span>}
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
