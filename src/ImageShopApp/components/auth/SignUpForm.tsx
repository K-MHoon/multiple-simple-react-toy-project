import React, { useCallback, useEffect, useState } from 'react';
import { CodeValue } from '../../App';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly onSignUp: (
    userId: string,
    userName: string,
    password: string,
    job: string,
  ) => void;
}

const SignUpForm = ({ onSignUp }: Props) => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [job, setJob] = useState('');
  const [jobCodes, setJobCodes] = useState<CodeValue[]>([]);

  const handleChangeUserId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  const handleChangeUserName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  const handleChangeJob = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {},
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSignUp(userId, userName, password, job);
    },
    [userId, password, userName, job, onSignUp],
  );

  const getJobCodeList = async () => {};

  useEffect(() => {}, []);

  return (
    <div className={styles.centered}>
      <h2>회원가입</h2>
    </div>
  );
};

export default SignUpForm;
