import React from 'react';
import { useParams } from 'react-router-dom';
import CodeDetailReadContainer from '../../containers/codedetail/CodeDetailReadContainer';
import MainLayout from '../../layout/MainLayout';

const CodeGroupReadPage = () => {
  const { groupCode, codeValue } = useParams();

  return (
    <MainLayout>
      <CodeDetailReadContainer groupCode={groupCode!} codeValue={codeValue!} />
    </MainLayout>
  );
};

export default CodeGroupReadPage;
