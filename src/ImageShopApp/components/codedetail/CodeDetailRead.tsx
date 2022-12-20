import React, { useEffect, useState } from 'react';
import { CodeDetail } from '../../App';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly codeDetail: CodeDetail | null;
  readonly isLoading: boolean;
  readonly groupCode: String;
  readonly codeValue: CodeValue | null;
  readonly onRemove: () => void; // TODO
}

const CodeDetailRead = ({codeDetail, isLoading, groupCode, codeValue, onRemove}:Props) => {
  // 컴포넌트 상태 설정
  const [groupCodes, setGroupCodes] = useState<CodeValue[]>([]);
  
  // 그룹코드 목록 가져옴
  const getGroupCodeList = async () => {
    
  };

  // 마운트될 때 그룹코드 목록 가져옴
  useEffect(() => {

  }, []);

  return (
    <div className={styles.centered}>
      <h2>코드 상세보기</h2>
      {isLoading && "로딩중..."}
      {!isLoading && codeDetail && ()}
    </div>
  );
};

export default CodeDetailRead;