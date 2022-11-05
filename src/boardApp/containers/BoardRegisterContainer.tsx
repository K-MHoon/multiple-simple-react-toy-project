import React from 'react';
import { useNavigate } from 'react-router-dom';
import BoardRegisterForm from '../components/BoardRegisterForm';
import * as client from '../lib/api';

// 등록 컨테이너
const BoardRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (title: string, content: string, writer: string) => {
    try {
      const response = await client.registerBoard(title, content, writer);

      alert('등록되었습니다.');

      navigate('/read' + response.data.boardNo);
    } catch (e) {
      console.log(e);
    }
  };

  return <BoardRegisterForm onRegister={onRegister} />;
};

export default BoardRegisterContainer;
