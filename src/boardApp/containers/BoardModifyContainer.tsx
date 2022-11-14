import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Board } from '../App';
import BoardModifyForm from '../components/BoardModifyForm';
import * as client from '../lib/api';
import { RootState } from '../modules';
import {
  changeContent,
  changeTitle,
  fetchFailure,
  fetchSuccess,
} from '../modules/board';
import { endLoading, startLoading } from '../modules/loading';

// 수정 컨테이너
const BoardModifyContainer = () => {
  const { boardNo } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { board, isLoading } = useSelector(({ board, loading }: RootState) => ({
    board: board.board,
    isLoading: loading.FETCH,
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
