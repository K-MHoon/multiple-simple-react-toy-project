import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../modules';
import MemberModifyForm from '../../components/member/MemberModifyForm';

interface Props {
  readonly userNo: string;
}

const MemberModifyContainer = ({ userNo }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { member, isLoading } = useSelector(
    ({ member, loading }: RootState) => ({}),
  );

  const onModify = async (userNo: string, payload: any) => {};

  // 마운트될 때 회원 상세정보를 가져온다.
  useEffect(() => {}, [dispatch, userNo]);

  return (
    <MemberModifyForm
      member={member}
      isLoading={isLoading}
      onModify={onModify}
    />
  );
};

export default MemberModifyContainer;
