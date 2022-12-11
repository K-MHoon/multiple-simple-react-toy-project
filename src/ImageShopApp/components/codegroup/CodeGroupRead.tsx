import React from 'react';
import styles from '../../css/imageShop.module.css'

interface Props {
  readonly codeGroup;
  readonly isLoading;
  readonly groupCode;
  readonly onRemove;
}

const CodeGroupRead = ({codeGroup, isLoading, groupCode, onRemove}: Props) => {
  return (
    <div className={styles.centered}>
      <h2>코드그룹 상세보기</h2>
      {isLoading && "로딩중..."}
      {!isLoading && codeGroup && ()}
    </div>
  );
};

export default CodeGroupRead;