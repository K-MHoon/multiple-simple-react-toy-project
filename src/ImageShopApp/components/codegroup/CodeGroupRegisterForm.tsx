import React, { useCallback, useEffect, useState } from 'react';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly onRegister;
}

const CodeGroupRegisterForm = ({ onRegister }: Props) => {
  const [groupCode, setGroupCode] = useState('');
  const [groupName, setGroupName] = useState('');

  const handleChangeGroupCode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  const handleChangeGroupName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {},
    [],
  );

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {},
  []);

  return (
    <div className={styles.centered}>
      <h2>코드그룹 등록</h2>
    </div>
  );
};

export default CodeGroupRegisterForm;
