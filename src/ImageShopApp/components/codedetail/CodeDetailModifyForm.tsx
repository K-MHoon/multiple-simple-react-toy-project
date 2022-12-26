import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeDetail, CodeValue } from '../../App';
import styles from '../../css/imageShop.module.css';
import { fetchCodeGroupList } from '../../lib/api';

interface Props {
  readonly codeDetail: CodeDetail | null;
  readonly isLoading: boolean;
  readonly onModify: (
    groupCode: string,
    codeValue: string,
    codeName: string,
  ) => void;
}

const CodeDetailModifyForm = ({ codeDetail, isLoading, onModify }: Props) => {
  const [groupCodes, setGroupCodes] = useState<CodeValue[]>([]);
  const [codeName, setCodeName] = useState('');
  const [codeValue, setCodeValue] = useState('');

  // 코드명 값의 변경을 처리
  const handleChangeCodeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeName(e.target.value);
  };

  // 폼 submit 이벤트 처리
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (codeDetail) {
      onModify(codeDetail.groupCode, codeValue, codeName);
    }
  };

  // 그룹 코드 목록 가져오기
  const getGroupCodeList = async () => {
    try {
      const response = await fetchCodeGroupList();
      setGroupCodes(response.data);
    } catch (e) {
      throw e;
    }
  };

  // 마운트될 때 그룹코드 목록 가져오기
  useEffect(() => {
    getGroupCodeList();
  }, []);

  // 마운트될 때 기존의 코드값과 코드명을 가져옴
  useEffect(() => {
    if (codeDetail) {
      setCodeName(codeDetail.codeName);
      setCodeValue(codeDetail.codeValue);
    }
  }, [codeDetail]);

  return (
    <div className={styles.centered}>
      <h2>코드 수정</h2>
      {isLoading && '로딩중...'}
      {!isLoading && codeDetail && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>그룹코드</td>
                <td>
                  <select value={codeDetail.groupCode} disabled>
                    {groupCodes.map((groupCode) => (
                      <option value={groupCode.value} key={groupCode.value}>
                        {groupCode.label}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>코드값</td>
                <td>
                  <input type="text" value={codeValue} disabled />
                </td>
              </tr>
              <tr>
                <td>코드명</td>
                <td>
                  <input
                    type="text"
                    value={codeName}
                    onChange={handleChangeCodeName}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_center}>
            <button type="submit">수정</button>
            <Link
              to={`/codedetail/read/${codeDetail.groupCode}/${codeDetail.codeValue}`}
            >
              취소
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default CodeDetailModifyForm;
