import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  return <BoardRead boardNo={boardNo!} board={board} isLoading={isLoading} />;
};

export default BoardReadContainer;
