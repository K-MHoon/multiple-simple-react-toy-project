import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeDetail, CodeValue } from '../../App';
import styles from '../../css/imageShop.module.css';
import { fetchCodeGroupList } from '../../lib/api';

interface Props {
  readonly codeDetail: CodeDetail | null;
  readonly isLoading: boolean;
  readonly groupCode: string;
  readonly codeValue: string;
  readonly onRemove: () => void;
}

const CodeDetailRead = ({
  codeDetail,
  isLoading,
  groupCode,
  codeValue,
  onRemove,
}: Props) => {
  // 컴포넌트 상태 설정
  const [groupCodes, setGroupCodes] = useState<CodeValue[]>([]);

  // 그룹코드 목록 가져옴
  const getGroupCodeList = async () => {
    try {
      const response = await fetchCodeGroupList();
      setGroupCodes(response.data);
    } catch (e) {
      throw e;
    }
  };

  // 마운트될 때 그룹코드 목록 가져옴
  useEffect(() => {
    getGroupCodeList();
  }, []);

  return (
    <div className={styles.centered}>
      <h2>코드 상세보기</h2>
      {isLoading && '로딩중...'}
      {!isLoading && codeDetail && (
        <>
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
                  <input type="text" value={codeDetail.codeValue} readOnly />
                </td>
              </tr>
              <tr>
                <td>코드명</td>
                <td>
                  <input type="text" value={codeDetail.codeName} readOnly />
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_center}>
            <Link to={`/codedetail/edit/${groupCode}/${codeValue}`}>편집</Link>
            <button onClick={onRemove}>삭제</button>
            <Link to="/codedetail">목록</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CodeDetailRead;
