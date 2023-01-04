import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MemberList from '../../components/member/MemberList';
import MemberRead from '../../components/member/MemberRead';
import { RootState } from '../../modules';
import { fetchOne, FETCH_ONE } from '../../modules/member';
import * as api from '../../lib/api';

interface Props {
  readonly userNo: string;
}

const MemberReadContainer = ({ userNo }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { member, isLoading } = useSelector(
    ({ member, loading }: RootState) => ({
      member: member.member,
      isLoading: loading[FETCH_ONE],
    }),
  );

  // 마운트될 때 회원 상세정보를 가져온다.
  useEffect(() => {
    dispatch(fetchOne(userNo));
  }, [dispatch, userNo]);

  const onRemove = async () => {
    try {
      await api.removeMember(userNo);
      alert('삭제가 완료되었습니다.');
      navigate('/member');
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
    <MemberRead
      member={member}
      isLoading={isLoading}
      userNo={userNo}
      onRemove={onRemove}
    />
  );
};

export default MemberReadContainer;
