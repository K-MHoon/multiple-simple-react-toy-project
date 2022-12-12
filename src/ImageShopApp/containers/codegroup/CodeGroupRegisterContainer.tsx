import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CodeGroupRegisterForm from '../../components/codegroup/CodeGroupRegisterForm';

const CodeGroupRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (groupCode: string, groupName: string) => {};

  return <CodeGroupRegisterForm onRegister={onRegister} />;
};

export default CodeGroupRegisterContainer;
