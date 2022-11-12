import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Board } from '../App';
import BoardModifyForm from '../components/BoardModifyForm';
import * as client from '../lib/api';
import {
  BoardState,
  changeContent,
  changeTitle,
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from '../modules/board';

// 수정 컨테이너
const BoardModifyContainer = () => {
  const { boardNo } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { board, isLoading } = useSelector((state: BoardState) => ({
    board: state.board,
    isLoading: state.loading.FETCH,
  }));

  const onModify = async (boardNo: string, title: string, content: string) => {
    try {
      await client.modifyBoard(boardNo, title, content);

      alert('수정되었습니다.');

      navigate('/read' + boardNo);
    } catch (e) {
      console.log(e);
    }
  };

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

  useEffect(() => {
    readBoard(boardNo!);
  }, [boardNo, readBoard]);

  const onChangeTitle = useCallback(
    (title: string) => {
      return dispatch(changeTitle(title));
    },
    [dispatch],
  );

  const onChangeContent = useCallback(
    (content: string) => {
      return dispatch(changeContent(content));
    },
    [dispatch],
  );

  return (
    <BoardModifyForm
      board={board}
      isLoading={isLoading}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onModify={onModify}
    />
  );
};

export default BoardModifyContainer;
