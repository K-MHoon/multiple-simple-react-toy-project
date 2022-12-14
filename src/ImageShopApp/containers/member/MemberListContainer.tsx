import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberList from '../../components/member/MemberList';
import { RootState } from '../../modules';
import { fetchList, FETCH_LIST } from '../../modules/member';

const MemberListContainer = () => {
  const dispatch = useDispatch();
  const { members, isLoading } = useSelector(
    ({ member, loading }: RootState) => ({
      members: member.members,
      isLoading: loading[FETCH_LIST],
    }),
  );

  // 마운트될 때 회원 목록을 가져온다.
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return <MemberList members={members} isLoading={isLoading} />;
};

export default MemberListContainer;
