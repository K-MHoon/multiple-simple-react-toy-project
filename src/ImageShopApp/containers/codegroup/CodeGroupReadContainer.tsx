import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Props {
  readonly groupCode;
}

const CodeGroupReadContainer = ({groupCode}: Props} => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 스토어 상태 조회
  const { codeGroup, isLoading } = useSelector(({codegroup, loading}: RootState) => ({

  }));

  const onModify = async (groupCode: string, groupName: string) => {

  };

  useEffect(() => {

  }, [dispatch, groupCode]);

  const onRemove = async () => {

  };

  return <CodeGroupRead codeGroup={codeGroup} isLoading={isLoading} groupCode={groupCode} onRemove={onRemove}/>;
};

export default CodeGroupReadContainer;