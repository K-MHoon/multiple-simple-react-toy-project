import React from 'react';
import styles from '../../css/imageShop.module.css'

interface Props {
  readonly codeGroups;
  readonly isLoading;
}

const CodeGroupList = ({codeGroups, isLoading}: Props) => {
  return (
    <div className={styles.centered}>
      <h2>코드그룹 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && codeGroups && ()}
    </div>
  );
};

export default CodeGroupList;