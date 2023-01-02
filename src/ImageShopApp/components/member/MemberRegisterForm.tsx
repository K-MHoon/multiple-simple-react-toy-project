import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeValue } from '../../App';
import styles from '../../css/imageShop.module.css';
import { fetchJobCodeList } from '../../lib/api';

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
  const [jobCodes, setJobCodes] = useState<CodeValue[]>([]);

  // 아이디 변경
  const handleChangeUserId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserId(e.target.value);
    },
    [],
  );

  // 비밀번호 변경
  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [],
  );

  // 사용자명 변경
  const handleChangeUserName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(e.target.value);
    },
    [],
  );

  // 직업 변경
  const handleChangeJob = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setJob(e.target.value);
    },
    [],
  );

  // 폼 이벤트 처리
  const handleSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      onRegister(userId, userName, password, job);
    },
    [userId, userName, password, job, onRegister],
  );

  // 직업코드 목록 가져오기
  const getJobCodeList = async () => {
    try {
      const response = await fetchJobCodeList();
      setJobCodes(response.data);
    } catch (e) {
      throw e;
    }
  };

  // 마운트될 때 직업코드 목록 가져오기
  useEffect(() => {
    getJobCodeList();
  }, []);

  return (
    <div className={styles.centered}>
      <h2>회원 등록</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input
                  type="text"
                  value={userId}
                  onChange={handleChangeUserId}
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </td>
            </tr>
            <tr>
              <td>사용자명</td>
              <td>
                <input
                  type="text"
                  value={userName}
                  onChange={handleChangeUserName}
                />
              </td>
            </tr>
            <tr>
              <td>직업</td>
              <td>
                <select onChange={handleChangeJob} value={job}>
                  {jobCodes.map((jobCode) => (
                    <option value={jobCode.value} key={jobCode.value}>
                      {jobCode.label}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.align_center}>
          <button type="submit">등록</button>
          <Link to="/member">취소</Link>
        </div>
      </form>
    </div>
  );
};

export default MemberRegisterForm;
