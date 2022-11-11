import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../components/BoardList';
import * as client from '../lib/api';
import {
  BoardState,
  fetchListFailure,
  fetchListStart,
  fetchListSuccess,
} from '../modules/board';

// 목록조회
const BoardListContainer = () => {
  const { boards, isLoading } = useSelector((state: BoardState) => ({
    boards: state.boards,
    isLoading: state.loading.FETCH_LIST,
  }));
  const dispatch = useDispatch();

  const listBoard = useCallback(async () => {
    dispatch(fetchListStart());
    try {
      const response = await client.fetchBoardList();

      dispatch(fetchListSuccess(response.data));
    } catch (e) {
      dispatch(fetchListFailure(e));
      throw e;
    }
  }, [dispatch]);

  // 브라우저상에 컴포넌트가 나타날 때 게시글 목록을 조회한다.
  useEffect(() => {
    listBoard();
  }, [listBoard]);

  return <BoardList boards={boards} isLoading={isLoading} />;
};

export default BoardListContainer;
