import React from 'react';
import { useParams } from 'react-router-dom';
import BoardReadContainer from '../../containers/board/BoardReadContainer';
import MainLayout from '../../layout/MainLayout';

const BoardReadPage = () => {
  const { boardNo } = useParams();

  return (
    <MainLayout>
      <BoardReadContainer boardNo={boardNo!} />
    </MainLayout>
  );
};

export default BoardReadPage;
