import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CodeGroupList from '../../components/codegroup/CodeGroupList';
import { RootState } from '../../modules';
import { fetchList, FETCH_LIST } from '../../modules/codegroup';

const CodeGroupListContainer = () => {
  const dispatch = useDispatch();

  // 스토어 상태 조회
  const { codeGroups, isLoading } = useSelector(
    ({ codegroup, loading }: RootState) => ({
      codeGroups: codegroup.codeGroups,
      isLoading: loading[FETCH_LIST],
    }),
  );

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return <CodeGroupList codeGroups={codeGroups} isLoading={isLoading} />;
};

export default CodeGroupListContainer;
