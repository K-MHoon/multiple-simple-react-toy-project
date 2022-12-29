import React, { useEffect, useState } from 'react';
import { Member, CodeValue } from '../../App';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly member: Member | null;
  readonly isLoading: boolean;
  readonly userNo: string;
  readonly onRemove: () => void;
}

const MemberRead = ({ member, isLoading, userNo, onRemove }: Props) => {
  const [jobCodes, setJobCodes] = useState<CodeValue[]>([]);

  // 직업코드 목록 가져오기
  const getJobCodeList = async () => {};

  // 마운트될 때 직업코드 목록 가져오기
  useEffect(() => {}, []);

  return (
    <div className={styles.centered}>
      <h2>회원 상세보기</h2>
    </div>
  );
};

export default MemberRead;
