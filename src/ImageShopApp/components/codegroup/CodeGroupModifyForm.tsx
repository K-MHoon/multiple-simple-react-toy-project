import React, { useEffect, useState } from 'react';
import styles from '../../css/imageShop.module.css'

interface Props {
  readonly codeGroup;
  readonly isLoading;
  readonly onModify;
}

const CodeGroupModifyForm = ({codeGroup, isLoading, onModify}: Props) => {
  const [groupName, setGroupName] = useState("");
  const handleChangeGroupName = (e: React.ChangeEvent<HTMLInputElement>) => {

  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

  };
  useEffect(() => {

  }, [codeGroup]);

  return (
    <div className={styles.centered}>
      <h2>코드그룹 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && codeGroup && ()}
    </div>
  );
};

export default CodeGroupModifyForm;