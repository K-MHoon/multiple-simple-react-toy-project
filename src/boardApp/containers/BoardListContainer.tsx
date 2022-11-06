import React, { useEffect, useState } from 'react';
import { Board } from '../App';
import BoardList from '../components/BoardList';
import * as client from '../lib/api';

// 목록조회
const BoardListContainer = () => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [isLoading, setLoading] = useState(false);

  const listBoard = async () => {
    setLoading(true);
    try {
      const response = await client.fetchBoardList();

      setBoards(response.data);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  useEffect(() => {
    listBoard();
  }, []);

  return <BoardList boards={boards} isLoading={isLoading} />;
};

export default BoardListContainer;
