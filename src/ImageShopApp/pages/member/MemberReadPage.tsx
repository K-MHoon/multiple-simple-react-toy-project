import React from 'react';
import { useParams } from 'react-router-dom';
import MemberReadContainer from '../../containers/member/MemberReadContainer';
import MainLayout from '../../layout/MainLayout';

const MemberReadPage = () => {
  const { userNo } = useParams();

  return (
    <MainLayout>
      <MemberReadContainer userNo={userNo!} />
    </MainLayout>
  );
};

export default MemberReadPage;
