import React from 'react';
import { useNavigate } from 'react-router-dom';
import CodeDetailRegisterForm from '../../components/codedetail/CodeDetailRegisterForm';

const CodeDetailRegisterContainer = () => {
  const navgiate = useNavigate();

  const onRegister = async (
    groupCode: string,
    codeValue: string,
    codeName: string,
  ) => {};

  return <CodeDetailRegisterForm onRegister={onRegister} />;
};

export default CodeDetailRegisterContainer;
