import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CodeGroupRead from '../../components/codegroup/CodeGroupRead';
import { RootState } from '../../modules';
import { fetchOne, FETCH_ONE } from '../../modules/codegroup';

interface Props {
  readonly groupCode: string;
}

const CodeGroupReadContainer = ({ groupCode }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 스토어 상태 조회
  const { codeGroup, isLoading } = useSelector(
    ({ codegroup, loading }: RootState) => ({
      codeGroup: codegroup.codeGroup,
      isLoading: loading[FETCH_ONE],
    }),
  );

  const onModify = async (groupCode: string, groupName: string) => {};

  useEffect(() => {
    dispatch(fetchOne(groupCode));
  }, [dispatch, groupCode]);

  const onRemove = async () => {};

  return (
    <CodeGroupRead
      codeGroup={codeGroup}
      isLoading={isLoading}
      groupCode={groupCode}
      onRemove={onRemove}
    />
  );
};

export default CodeGroupReadContainer;
