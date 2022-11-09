import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Board } from '../App';
import BoardModifyForm from '../components/BoardModifyForm';
import * as client from '../lib/api';

// 수정 컨테이너
const BoardModifyContainer = () => {
  const { boardNo } = useParams();
  const navigate = useNavigate();

  const [board, setBoard] = useState<Board>();
  const [isLoading, setLoading] = useState(false);

  const onModify = async (boardNo: string, title: string, content: string) => {
    try {
      await client.modifyBoard(boardNo, title, content);

      alert('수정되었습니다.');

      navigate('/read' + boardNo);
    } catch (e) {
      console.log(e);
    }
  };

  const readBoard = async (boardNo: string) => {
    setLoading(true);
    try {
      const response = await client.fetchBoard(boardNo);

      setBoard(response.data);

      setLoading(false);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    readBoard(boardNo!);
  }, [boardNo]);

  return (
    <BoardModifyForm board={board} isLoading={isLoading} onModify={onModify} />
  );
};

export default BoardModifyContainer;
