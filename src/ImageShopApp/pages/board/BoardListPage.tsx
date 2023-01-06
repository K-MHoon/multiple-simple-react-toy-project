import React from 'react';
import BoardListContainer from '../../containers/board/BoardListContainer';
import MainLayout from '../../layout/MainLayout';

const BoardListPage = () => {
  return (
    <MainLayout>
      <BoardListContainer />
    </MainLayout>
  );
};

export default BoardListPage;
