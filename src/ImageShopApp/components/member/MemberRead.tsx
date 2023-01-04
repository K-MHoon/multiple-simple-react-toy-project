import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Member, CodeValue } from '../../App';
import styles from '../../css/imageShop.module.css';
import { fetchJobCodeList } from '../../lib/api';

interface Props {
  readonly member: Member | null;
  readonly isLoading: boolean;
  readonly userNo: string;
  readonly onRemove: () => void;
}

const MemberRead = ({ member, isLoading, userNo, onRemove }: Props) => {
  const [jobCodes, setJobCodes] = useState<CodeValue[]>([]);

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
      <h2>회원 상세보기</h2>
      {isLoading && '로딩중...'}
      {!isLoading && member && (
        <>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>
                  <input type="text" value={member.userNo} readOnly />
                </td>
              </tr>
              <tr>
                <td>아이디</td>
                <td>
                  <input type="text" value={member.userId} readOnly />
                </td>
              </tr>
              <tr>
                <td>사용자명</td>
                <td>
                  <input type="text" value={member.userName} readOnly />
                </td>
              </tr>
              <tr>
                <td>직업</td>
                <td>
                  <select value={member.job} disabled>
                    {jobCodes.map((jobCode) => (
                      <option value={jobCode.value} key={jobCode.value}>
                        {jobCode.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>권한 - 1</td>
                <td>
                  <select
                    value={member.authList[0] && member.authList[0].auth}
                    disabled
                  >
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
                  <select
                    value={member.authList[1] && member.authList[1].auth}
                    disabled
                  >
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
                  <select
                    value={member.authList[2] && member.authList[2].auth}
                    disabled
                  >
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
            <Link to={`/member/edit/${userNo}`}>편집</Link>
            <button onClick={onRemove}>삭제</button>
            <Link to="/member">목록</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default MemberRead;
