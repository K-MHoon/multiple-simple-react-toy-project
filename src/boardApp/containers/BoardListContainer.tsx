import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../components/BoardList';
import * as client from '../lib/api';
import { RootState } from '../modules';
import { fetchListFailure, fetchListSuccess } from '../modules/board';
import { endLoading, startLoading } from '../modules/loading';

// 목록조회
const BoardListContainer = () => {
  const { boards, isLoading } = useSelector(
    ({ board, loading }: RootState) => ({
      boards: board.boards,
      isLoading: loading.FETCH_LIST,
    }),
  );
  const dispatch = useDispatch();

  const listBoard = useCallback(async () => {
    // dispatch(fetchListStart());
    dispatch(startLoading('FETCH_LIST'));
    try {
      const response = await client.fetchBoardList();

      dispatch(fetchListSuccess(response.data));
      dispatch(endLoading('FETCH_LIST'));
    } catch (e) {
      dispatch(fetchListFailure(e));
      dispatch(endLoading('FETCH_LIST'));
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
