import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly onRegister: (title: string, contnet: string) => void;
}

const BoardRegisterForm = ({ onRegister }: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [],
  );

  const handleChangeContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      onRegister(title, content);
    },
    [title, content, onRegister],
  );

  return (
    <div className={styles.centered}>
      <h2>게시판 등록</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                <input type="text" onChange={handleChangeTitle} value={title} />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea
                  rows={5}
                  value={content}
                  onChange={handleChangeContent}
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.align_center}>
          <button type="submit">등록</button>
          <Link to="/board">취소</Link>
        </div>
      </form>
    </div>
  );
};

export default BoardRegisterForm;
