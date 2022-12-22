import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CodeDetailRead from '../../components/codedetail/CodeDetailRead';
import { RootState } from '../../modules';

interface Props {
  readonly groupCode: string;
  readonly codeValue: string;
}

const CodeDetailReadContainer = ({ groupCode, codeValue }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { codeDetail, isLoading } = useSelector(
    ({ codedetail, loading }: RootState) => ({}),
  );

  // 마운트될 때 코드 상세정보를 가져온다.
  useEffect(() => {}, [dispatch, groupCode, codeValue]);

  const onRemove = async () => {};

  return (
    <CodeDetailRead
      codeDetail={codeDetail}
      isLoading={isLoading}
      groupCode={groupCode}
      codeValue={codeValue}
      onRemove={onRemove}
    />
  );
};

export default CodeDetailReadContainer;
