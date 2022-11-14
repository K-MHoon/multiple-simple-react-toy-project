import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import BoardRead from '../components/BoardRead';
import * as client from '../lib/api';
import { RootState } from '../modules';
import { fetchFailure, fetchSuccess } from '../modules/board';
import { endLoading, startLoading } from '../modules/loading';

type BoardParam = {
  boardNo: string;
};

// 상세조회 컨테이너
const BoardReadContainer = () => {
  const { boardNo } = useParams<BoardParam>();
  const { board, isLoading } = useSelector(({ board, loading }: RootState) => ({
    board: board.board,
    isLoading: loading.FETCH,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const readBoard = useCallback(
    async (boardNo: string) => {
      // dispatch(fetchStart());
      dispatch(startLoading('FETCH'));
      try {
        const response = await client.fetchBoard(boardNo);

        dispatch(fetchSuccess(response.data));
        dispatch(endLoading('FETCH'));
      } catch (e) {
        dispatch(fetchFailure(e));
        dispatch(endLoading('FETCH'));
        throw e;
      }
    },
    [dispatch],
  );

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
  }, [boardNo, readBoard]);

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
