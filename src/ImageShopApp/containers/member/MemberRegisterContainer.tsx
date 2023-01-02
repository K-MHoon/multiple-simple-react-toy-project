import React from 'react';
import { useNavigate } from 'react-router-dom';
import MemberRegisterForm from '../../components/member/MemberRegisterForm';
import * as api from '../../lib/api';

const MemberRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (
    userId: string,
    userName: string,
    userPw: string,
    job: string,
  ) => {
    try {
      const response = await api.writeMember(userId, userName, userPw, job);
      alert('등록이 완료됐습니다.');
      navigate(`/member/read/${response.data.userNo}`);
    } catch (e: any) {
      const status = e.response.status;
      if (status === 400) {
        alert('잘못된 요청입니다.');
      } else if (status === 401) {
        alert('로그인이 필요합니다.');
        navigate('/signin');
      } else if (status === 403) {
        alert('접근 권한이 없습니다.');
        navigate(-1);
      } else {
        alert(e.response.data.message);
      }
    }
  };

  return <MemberRegisterForm onRegister={onRegister} />;
};

export default MemberRegisterContainer;
