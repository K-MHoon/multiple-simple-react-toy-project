import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MemberList from '../../components/member/MemberList';
import MemberRead from '../../components/member/MemberRead';
import { RootState } from '../../modules';

interface Props {
  readonly userNo: string;
}

const MemberReadContainer = ({ userNo }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { member, isLoading } = useSelector(
    ({ member, loading }: RootState) => ({}),
  );

  // 마운트될 때 회원 상세정보를 가져온다.
  useEffect(() => {}, [dispatch, userNo]);

  const onRemove = async () => {};

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
