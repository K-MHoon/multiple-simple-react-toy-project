import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberList from '../../components/member/MemberList';
import { RootState } from '../../modules';

const MemberListContainer = () => {
  const dispatch = useDispatch();
  const { members, isLoading } = useSelector(
    ({ member, loading }: RootState) => ({}),
  );

  // 마운트될 때 회원 목록을 가져온다.
  useEffect(() => {}, [dispatch]);

  return <MemberList members={members} isLoading={isLoading} />;
};

export default MemberListContainer;
