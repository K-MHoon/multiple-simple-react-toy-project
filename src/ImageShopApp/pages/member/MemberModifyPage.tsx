import React from 'react';
import { useParams } from 'react-router-dom';
import MemberListContainer from '../../containers/member/MemberListContainer';
import MemberModifyContainer from '../../containers/member/MemberModifyContainer';
import MainLayout from '../../layout/MainLayout';

const MemberModifyPage = () => {
  const { userNo } = useParams();

  return (
    <MainLayout>
      <MemberModifyContainer userNo={userNo!} />
    </MainLayout>
  );
};

export default MemberModifyPage;
