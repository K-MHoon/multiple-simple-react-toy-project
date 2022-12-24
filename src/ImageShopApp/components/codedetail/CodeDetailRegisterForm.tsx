import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeValue } from '../../App';
import styles from '../../css/imageShop.module.css';
import { fetchCodeGroupList } from '../../lib/api';

interface Props {
  readonly onRegister: (
    groupCode: string,
    codeValue: string,
    codeName: string,
  ) => void;
}

const CodeDetailRegisterForm = ({ onRegister }: Props) => {
  const [groupCode, setGroupCode] = useState('A01');
  const [groupCodes, setGroupCodes] = useState<CodeValue[]>([]);
  const [codeValue, setCodeValue] = useState('');
  const [codeName, setCodeName] = useState('');

  // 그룹코드 값의 변경을 처리한다.
  const handleChangeGroupCode = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setGroupCode(e.target.value);
    },
    [],
  );

  // 코드 값의 변경을 처리한다.
  const hanldeChangeCodeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCodeValue(e.target.value);
    },
    [],
  );

  // 코드명 값의 변경을 처리한다.
  const handleChangeCodeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCodeName(e.target.value);
    },
    [],
  );

  // 폼 submit 이벤트를 처리한다.
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onRegister(groupCode, codeValue, codeName);
    },
    [groupCode, codeValue, codeName, onRegister],
  );

  // 그룹코드 목록을 가져온다.
  const getGroupCodeList = async () => {
    try {
      const response = await fetchCodeGroupList();
      setGroupCodes(response.data);
    } catch (e) {
      throw e;
    }
  };

  // 마운트될 때 그룹코드 목록을 가져온다.
  useEffect(() => {
    getGroupCodeList();
  }, []);

  return (
    <div className={styles.centered}>
      <h2>코드 등록</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>그룹코드</td>
              <td>
                <select onChange={handleChangeGroupCode} value={groupCode}>
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
                <input
                  type="text"
                  value={codeValue}
                  onChange={hanldeChangeCodeValue}
                />
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
          <button type="submit">등록</button>
          <Link to="/codedetail">취소</Link>
        </div>
      </form>
    </div>
  );
};

export default CodeDetailRegisterForm;
