import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../modules';
import MemberModifyForm from '../../components/member/MemberModifyForm';
import { fetchOne, FETCH_ONE } from '../../modules/member';
import * as api from '../../lib/api';

interface Props {
  readonly userNo: string;
}

const MemberModifyContainer = ({ userNo }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { member, isLoading } = useSelector(
    ({ member, loading }: RootState) => ({
      member: member.member,
      isLoading: loading[FETCH_ONE],
    }),
  );

  const onModify = async (userNo: string, payload: any) => {
    try {
      await api.modifyMember(userNo, payload);
      alert('수정이 완료되었습니다.');
      navigate('/member/read/' + userNo);
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

  // 마운트될 때 회원 상세정보를 가져온다.
  useEffect(() => {
    dispatch(fetchOne(userNo));
  }, [dispatch, userNo]);

  return (
    <MemberModifyForm
      member={member}
      isLoading={isLoading}
      onModify={onModify}
    />
  );
};

export default MemberModifyContainer;
