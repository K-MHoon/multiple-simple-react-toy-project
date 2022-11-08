import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Board } from '../App';
import BoardRead from '../components/BoardRead';
import * as client from '../lib/api';

type BoardParam = {
  boardNo: string;
};

// 상세조회 컨테이너
const BoardReadContainer = () => {
  const { boardNo } = useParams<BoardParam>();
  const [board, setBoard] = useState<Board>();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const onRemove = async () => {
    console.log('boardNo = ' + boardNo);
    try {
      await client.removeBoard(boardNo!);
      alert('삭제되었습니다.');

      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    readBoard(boardNo!);
  }, [boardNo]);

  return (
    <BoardRead
      boardNo={boardNo!}
      board={board}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  );
};

export default BoardReadContainer;
