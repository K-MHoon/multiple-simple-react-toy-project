import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CodeDetailModifyForm from '../../components/codedetail/CodeDetailModifyForm';
import { RootState } from '../../modules';

interface Props {
  readonly groupCode: string;
  readonly codeValue: string;
}

const CodeDetailModifyContainer = ({ groupCode, codeValue }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { codeDetail, isLoading } = useSelector(
    ({ codedetail, loading }: RootState) => ({}),
  );

  const onModify = async (
    groupCode: string,
    codeValue: string,
    codeName: string,
  ) => {};

  useEffect(() => {}, [dispatch, groupCode, codeValue]);

  return (
    <CodeDetailModifyForm
      codeDetail={codeDetail}
      isLoading={isLoading}
      onModify={onModify}
    />
  );
};

export default CodeDetailModifyContainer;
