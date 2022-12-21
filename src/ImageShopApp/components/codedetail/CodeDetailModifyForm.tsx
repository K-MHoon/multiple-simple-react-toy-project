import React, { useEffect, useState } from 'react';
import { CodeDetail } from '../../App';
import styles from '../../css/imageShop.module.css';

interface Props {
  readonly codeDetail: CodeDetail | null;
  readonly isLoading: boolean;
  readonly onModify: (groupCode: string, codeValue: string, codeName: string) => void; // TODO
}

const CodeDetailModifyForm = ({codeDetail, isLoading, onModify}: Props) => {
  const [groupCodes, setGroupCodes] = useState<CodeValue[]>([]);
  const [codeName, setCodeName] = useState("");

  // 코드명 값의 변경을 처리
  const handleChangeCodeName = (e: React.ChangeEvent<HTMLInputElement>) => {

  };

  // 폼 submit 이벤트 처리
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

  };

  // 그룹 코드 목록 가져오기
  const getGroupCodeList = async () => {

  };

  // 마운트될 때 그룹코드 목록 가져오기
  useEffect(() => {

  }, []);

  // 마운트될 때 기존의 코드값과 코드명을 가져옴
  useEffect(() => {

  }, [codeDetail]);
  
  return (
    <div className={styles.centered}>
      <h2>코드 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && codeDetail && ()}
    </div>
  );
};

export default CodeDetailModifyForm;