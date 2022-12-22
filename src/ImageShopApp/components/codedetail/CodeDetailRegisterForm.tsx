import React, { useCallback, useEffect, useState } from 'react';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly onRegister: (
    groupCode: string,
    codeValue: string,
    codeName: string,
  ) => void;
}

const CodeDetailRegisterForm = ({ onRegister }: Props) => {
  const [groupCode, setGroupCode] = useState('A01');
  const [codeName, setCodeName] = useState('');

  // 그룹코드 값의 변경을 처리한다.
  const handleChangeGroupCode = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {},
    [],
  );

  // 코드 값의 변경을 처리한다.
  const hanldeChangeCodeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  // 코드명 값의 변경을 처리한다.
  const handleChangeCodeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  // 폼 submit 이벤트를 처리한다.
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {},
  []);

  // 그룹코드 목록을 가져온다.
  const getGroupCodeList = async () => {};

  // 마운트될 때 그룹코드 목록을 가져온다.
  useEffect(() => {}, []);

  return (
    <div className={styles.centered}>
      <h2>코드 등록</h2>
    </div>
  );
};

export default CodeDetailRegisterForm;
