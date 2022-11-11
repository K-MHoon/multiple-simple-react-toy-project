import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Board } from '../App';
import BoardRead from '../components/BoardRead';
import * as client from '../lib/api';
import {
  BoardState,
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from '../modules/board';

type BoardParam = {
  boardNo: string;
};

// 상세조회 컨테이너
const BoardReadContainer = () => {
  const { boardNo } = useParams<BoardParam>();
  const { board, isLoading } = useSelector((state: BoardState) => ({
    board: state.board,
    isLoading: state.loading.FETCH,
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const readBoard = useCallback(
    async (boardNo: string) => {
      dispatch(fetchStart());
      try {
        const response = await client.fetchBoard(boardNo);

        dispatch(fetchSuccess(response.data));
      } catch (e) {
        dispatch(fetchFailure(e));
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
