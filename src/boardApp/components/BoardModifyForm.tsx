import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Board } from '../App';
import styles from '../css/Board.module.css';

interface Props {
  readonly board?: Board;
  readonly isLoading: boolean;
  readonly onModify: (boardNo: string, title: string, content: string) => void;
  readonly onChangeTitle: (title: string) => void;
  readonly onChangeContent: (content: string) => void;
}

// 수정 폼
const BoardModifyForm = ({
  board,
  isLoading,
  onModify,
  onChangeTitle,
  onChangeContent,
}: Props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!board) {
      onModify(board.boardNo, title, content);
    }
  };

  useEffect(() => {
    console.log(`useEffect board = ${board}`);

    if (board) {
      console.log(`board.title = ${board.title}`);
      console.log(`board.content = ${board.content}`);

      setTitle(board.title);
      setContent(board.content);
    }
  }, [board]);

  return (
    <div className={styles.centered}>
      <h2>게시판 수정</h2>
      {isLoading && '로딩중...'}
      {!isLoading && board && (
        <>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>번호</td>
                  <td>
                    <input value={board.boardNo} type="text" disabled />
                  </td>
                </tr>
                <tr>
                  <td>등록일시</td>
                  <td>
                    <input value={board.regDate} type="text" disabled />
                  </td>
                </tr>
                <tr>
                  <td>제목</td>
                  <td>
                    <input
                      type="text"
                      value={title}
                      onChange={handleChangeTitle}
                    />
                  </td>
                </tr>
                <tr>
                  <td>작성자</td>
                  <td>
                    <input type="text" value={board.writer} disabled />
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

            <div className={styles.align_centered}>
              <button type="submit">수정</button>
              <Link to={`/read/${board.boardNo}`}>취소</Link>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default BoardModifyForm;
