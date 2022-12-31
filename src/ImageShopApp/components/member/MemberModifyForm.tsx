import React, { useEffect, useState } from 'react';
import { CodeValue, Member } from '../../App';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly member: Member | null;
  readonly isLoading: boolean;
  readonly onModify: (userNo: string, payload: any) => void;
}

const MemberModifyForm = ({ member, isLoading, onModify }: Props) => {
  // 컴포넌트 상태 설정
  const [jobCodes, setJobCodes] = useState<CodeValue[]>([]);
  const [userName, setUserName] = useState('');
  const [job, setJob] = useState('00');
  const [auth1, setAuth1] = useState('');
  const [auth2, setAuth2] = useState('');
  const [auth3, setAuth3] = useState('');

  // 사용자명 변경
  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {};

  // 직업 변경
  const handleChangeJob = (e: React.ChangeEvent<HTMLSelectElement>) => {};

  // 권한 변경
  const handleChangeAuth1 = (e: React.ChangeEvent<HTMLSelectElement>) => {};

  // 폼 이벤트 처리
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // 직업코드 목록 가져오기
  const getJobCodeList = async () => {};

  // 마운트될 때 직업코드 목록 가져오기
  useEffect(() => {}, []);

  // 마운트될 때 기존 사용자명, 직업코드, 권한 가져오기
  useEffect(() => {}, [member]);

  return (
    <div className={styles.centered}>
      <h2>회원 수정</h2>
    </div>
  );
};

export default MemberModifyForm;
