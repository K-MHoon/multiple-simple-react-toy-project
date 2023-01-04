import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeValue, Member, UserObject } from '../../App';
import styles from '../../css/imageShop.module.css';
import { fetchJobCodeList } from '../../lib/api';

interface Props {
  readonly member: Member | null;
  readonly isLoading: boolean;
  readonly onModify: (userNo: string, userObject: UserObject) => void;
}

const MemberModifyForm = ({ member, isLoading, onModify }: Props) => {
  // 컴포넌트 상태 설정
  const [jobCodes, setJobCodes] = useState<CodeValue[]>([]);

  const [userName, setUserName] = useState('');
  const [job, setJob] = useState('');

  const [auth1, setAuth1] = useState('');
  const [auth2, setAuth2] = useState('');
  const [auth3, setAuth3] = useState('');

  // 사용자명 변경
  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  // 직업 변경
  const handleChangeJob = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJob(e.target.value);
  };

  // 권한 변경
  const handleChangeAuth1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuth1(e.target.value);
  };

  const handleChangeAuth2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuth2(e.target.value);
  };

  const handleChangeAuth3 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuth3(e.target.value);
  };

  // 폼 이벤트 처리
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (member) {
      const userNo = member.userNo;

      const userObject: UserObject = {
        userId: member.userId,
        userPw: member.userPw,
        userName: userName,
        job: job,
        authList: [
          {
            userNo: userNo,
            auth: auth1,
          },
          {
            userNo: userNo,
            auth: auth2,
          },
          {
            userNo: userNo,
            auth: auth3,
          },
        ],
      };

      onModify(member.userNo, userObject);
    }
  };

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

  // 마운트될 때 기존 사용자명, 직업코드, 권한 가져오기
  useEffect(() => {
    if (member) {
      setUserName(member.userName);
      setJob(member.job);

      setAuth1(member.authList[0] && member.authList[0].auth);
      setAuth1(member.authList[1] && member.authList[1].auth);
      setAuth1(member.authList[2] && member.authList[2].auth);
    }
  }, [member]);

  return (
    <div className={styles.centered}>
      <h2>회원 수정</h2>
      {isLoading && '로딩중...'}
      {!isLoading && member && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>
                  <input value={member.userNo} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>아이디</td>
                <td>
                  <input value={member.userId} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>사용자명</td>
                <td>
                  <input
                    value={userName}
                    type="text"
                    onChange={handleChangeUserName}
                  />
                </td>
              </tr>
              <tr>
                <td>직업</td>
                <select value={job} onChange={handleChangeJob}>
                  {jobCodes.map((jobCode) => (
                    <option value={jobCode.value} key={jobCode.value}>
                      {jobCode.label}
                    </option>
                  ))}
                </select>
              </tr>
              <tr>
                <td>권한 - 1</td>
                <td>
                  <select value={auth1} onChange={handleChangeAuth1}>
                    <option value="">=== 선택해 주세요 ===</option>
                    <option value="ROLE_USER">사용자</option>
                    <option value="ROLE_MEMBER">회원</option>
                    <option value="ROLE_ADMIN">관리자</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>권한 - 2</td>
                <td>
                  <select value={auth2} onChange={handleChangeAuth2}>
                    <option value="">=== 선택해 주세요 ===</option>
                    <option value="ROLE_USER">사용자</option>
                    <option value="ROLE_MEMBER">회원</option>
                    <option value="ROLE_ADMIN">관리자</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>권한 - 3</td>
                <td>
                  <select value={auth3} onChange={handleChangeAuth3}>
                    <option value="">=== 선택해 주세요 ===</option>
                    <option value="ROLE_USER">사용자</option>
                    <option value="ROLE_MEMBER">회원</option>
                    <option value="ROLE_ADMIN">관리자</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_center}>
            <button type="submit">수정</button>
            <Link to={`/member/read/${member.userNo}`}>취소</Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default MemberModifyForm;
