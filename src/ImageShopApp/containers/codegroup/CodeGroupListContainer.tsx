import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CodeGroupList from '../../components/codegroup/CodeGroupList';

const CodeGroupListContainer = () => {
  const dispatch = useDispatch();

  // 스토어 상태 조회
  const { codeGroups, isLoading } = useSelector(
    ({ codegroup, loading }: RootState) => ({}),
  );

  useEffect(() => {}, [dispatch]);

  return <CodeGroupList codeGroups={codeGroups} isLoading={isLoading} />;
};

export default CodeGroupListContainer;
