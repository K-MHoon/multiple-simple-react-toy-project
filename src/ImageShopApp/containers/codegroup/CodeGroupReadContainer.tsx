import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CodeGroupRead from '../../components/codegroup/CodeGroupRead';
import { RootState } from '../../modules';
import { fetchOne, FETCH_ONE } from '../../modules/codegroup';
import * as api from '../../lib/api';

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

  useEffect(() => {
    dispatch(fetchOne(groupCode));
  }, [dispatch, groupCode]);

  const onRemove = async () => {
    try {
      await api.removeCodeGroup(groupCode);
      alert('삭제가 완료되었습니다.');
      navigate('/codegroup');
    } catch (e: any) {
      if (e.response.status === 400) {
        alert('잘못된 요청입니다.');
      } else if (e.response.status === 401) {
        alert('로그인이 필요합니다.');
        navigate('/signin');
      } else if (e.response.status === 403) {
        alert('접근 권한이 없습니다.');
        navigate(-1);
      } else {
        alert(e.response.data.message);
      }
    }
  };

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
