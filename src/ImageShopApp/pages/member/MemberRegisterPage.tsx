import React from 'react';
import { useParams } from 'react-router-dom';
import MemberReadContainer from '../../containers/member/MemberReadContainer';
import MemberRegisterContainer from '../../containers/member/MemberRegisterContainer';
import MainLayout from '../../layout/MainLayout';

const MemberRegisterPage = () => {
  return (
    <MainLayout>
      <MemberRegisterContainer />
    </MainLayout>
  );
};

export default MemberRegisterPage;
