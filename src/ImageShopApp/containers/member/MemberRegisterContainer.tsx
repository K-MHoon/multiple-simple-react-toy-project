import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MemberList from '../../components/member/MemberList';
import MemberRead from '../../components/member/MemberRead';
import MemberRegisterForm from '../../components/member/MemberRegisterForm';
import { RootState } from '../../modules';

const MemberRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (
    userId: string,
    userName: string,
    userPw: string,
    job: string,
  ) => {};

  return <MemberRegisterForm onRegister={onRegister} />;
};

export default MemberRegisterContainer;
