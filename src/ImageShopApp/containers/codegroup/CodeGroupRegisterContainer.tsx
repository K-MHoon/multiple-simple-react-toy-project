import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CodeGroupRegisterForm from '../../components/codegroup/CodeGroupRegisterForm';
import * as api from '../../lib/api';

const CodeGroupRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (groupCode: string, groupName: string) => {
    try {
      const response = await api.writeCodeGroup(groupCode, groupName);
      alert('등록이 완료되었습니다.');
      navigate('/codegroup/read/' + response.data.groupCode);
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

  return <CodeGroupRegisterForm onRegister={onRegister} />;
};

export default CodeGroupRegisterContainer;
