import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../../components/board/BoardList';
import { RootState } from '../../modules';
import { isMember as hasRoleMember } from '../../modules/selector';
import { fetchList, FETCH_LIST } from '../../modules/board';

const BoardListContainer = () => {
  const dispatch = useDispatch();

  const { boards, isLoading, isMember } = useSelector((state: RootState) => ({
    boards: state.board.boards,
    isLoading: state.loading[FETCH_LIST],
    isMember: hasRoleMember(state),
  }));

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <BoardList boards={boards} isLoading={isLoading} isMember={isMember} />
  );
};

export default BoardListContainer;
