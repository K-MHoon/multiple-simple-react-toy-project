import React, { useCallback, useEffect, useState } from 'react';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly onRegister: (
    userId: string,
    userName: string,
    userPw: string,
    job: string,
  ) => void;
}

const MemberRegisterForm = ({ onRegister }: Props) => {
  // 컴포넌트 상태 설정
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [job, setJob] = useState('00');

  // 아이디 변경
  const handleChangeUserId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  // 비밀번호 변경
  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  // 사용자명 변경
  const handleChangeUserName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  // 직업 변경
  const handleChangeJob = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {},
    [],
  );

  // 폼 이벤트 처리
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // 직업코드 목록 가져오기
  const getJobCodeList = async () => {};

  // 마운트될 때 직업코드 목록 가져오기
  useEffect(() => {}, []);

  return (
    <div className={styles.centered}>
      <h2>회원 등록</h2>
    </div>
  );
};

export default MemberRegisterForm;
