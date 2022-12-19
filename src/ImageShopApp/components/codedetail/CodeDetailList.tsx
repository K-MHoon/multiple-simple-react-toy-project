import React from 'react';
import { CodeDetail } from '../../App';
import styles from '../../css/imageShop.module.css'

interface Props {
  readonly codeDetails: CodeDetail[];
  readonly isLoading: boolean;
}

const CodeDetailList = ({ codeDetails, isLoading }: Props) => {
  return (
    <div className={styles.centered}>
      <h2>코드 목록</h2>
      {isLoading && "로딩중..."}
      {!isLoading && codeDetails && (
        
      )}
    </div>
  );
};

export default CodeDetailList;