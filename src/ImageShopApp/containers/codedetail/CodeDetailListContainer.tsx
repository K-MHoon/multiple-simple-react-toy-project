import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CodeDetailList from '../../components/codedetail/CodeDetailList';
import { RootState } from '../../modules';

const CodeDetailListContainer = () => {
  const dispatch = useDispatch();

  const { codeDetails, isLoading } = useSelector(
    ({ codedetail, loading }: RootState) => ({}),
  );

  useEffect(() => {}, [dispatch]);

  return <CodeDetailList codeDetails={codeDetails} isLoading={isLoading} />;
};

export default CodeDetailListContainer;
