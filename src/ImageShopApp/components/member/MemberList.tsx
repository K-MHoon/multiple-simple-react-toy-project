import React from 'react';
import { Member } from '../../App';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly members: Member[];
  readonly isLoading: boolean;
}

const MemberList = ({ members, isLoading }: Props) => {
  return (
    <div className={styles.centered}>
      <h2>회원 목록</h2>
    </div>
  );
};

export default MemberList;
