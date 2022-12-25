import React from 'react';
import { useNavigate } from 'react-router-dom';
import CodeDetailRegisterForm from '../../components/codedetail/CodeDetailRegisterForm';
import * as api from '../../lib/api';

const CodeDetailRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (
    groupCode: string,
    codeValue: string,
    codeName: string,
  ) => {
    try {
      const response = await api.writeCodeDetail(
        groupCode,
        codeValue,
        codeName,
      );
      alert('등록이 완료되었습니다.');
      navigate(
        `/codedetail/read/${response.data.groupCode}/${response.data.codeValue}`,
      );
    } catch (e: any) {
      if (e.response.status === 400) {
        alert('잘못된 요청입니다.');
      } else if (e.response.status === 401) {
        alert('로그인이 필요합니다.');
        navigate('/signin');
      } else if (e.response.status === 403) {
        alert('접근 권한이 없습니다.');
        navigate(-1);
      } else {
        alert(e.response.data.message);
      }
    }
  };

  return <CodeDetailRegisterForm onRegister={onRegister} />;
};

export default CodeDetailRegisterContainer;
