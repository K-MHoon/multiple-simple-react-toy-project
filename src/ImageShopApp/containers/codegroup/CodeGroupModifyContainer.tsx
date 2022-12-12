import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CodeGroupModifyForm from '../../components/codegroup/CodeGroupModifyForm';

interface Props {
  readonly groupCode;
}

const CodeGroupModifyContainer = ({groupCode}: Props} => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 스토어 상태 조회
  const { codeGroup, isLoading } = useSelector(({codegroup, loading}: RootState) => ({

  }));

  const onModify = async (groupCode: string, groupName: string) => {

  };

  useEffect(() => {

  }, [dispatch, groupCode]);

  return <CodeGroupModifyForm codeGroup={codeGroup} isLoading={isLoading} onModify={onModify}/>;
};

export default CodeGroupModifyContainer;