import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BoardRead from '../../components/board/BoardRead';
import { RootState } from '../../modules';
import { fetchOne, FETCH_ONE } from '../../modules/board';
import * as api from '../../lib/api';

interface Props {
  readonly boardNo: string;
}

const BoardReadContainer = ({ boardNo }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { board, isLoading, myInfo } = useSelector(
    ({ board, loading, auth }: RootState) => ({
      board: board.board,
      isLoading: loading[FETCH_ONE],
      myInfo: auth.myInfo,
    }),
  );

  const onRemove = async () => {
    try {
      await api.removeBoard(boardNo, board!.writer);
      alert('삭제가 완료되었습니다.');
      navigate('/board');
    } catch (e: any) {
      if (e.response.status === 400) {
        alert('잘못된 요청입니다.');
      } else if (e.response.status === 401) {
        alert('로그인이 필요합니다.');
        navigate('/signin');
      } else if (e.response.status === 403) {
        alert('접근 권한이 없습니다.');
        navigate(-1);
      } else {
        alert(e.response.data.message);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchOne(boardNo));
  }, [dispatch, boardNo]);

  return (
    <BoardRead
      board={board}
      isLoading={isLoading}
      boardNo={boardNo}
      onRemove={onRemove}
      myInfo={myInfo}
    />
  );
};

export default BoardReadContainer;
