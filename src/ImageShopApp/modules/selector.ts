import { createSelector } from 'reselect';
import { RootState } from './index';

// 액세스 토큰 선택자 함수
const getAccessToken = (state: RootState) => state.auth.accessToken;

// 사용자정보 선택자 함수
const getMyInfo = (state: RootState) => state.auth.myInfo;

// 로그인여부 선택자 함수
export const getAuthorized = createSelector(
  [getAccessToken, getMyInfo],
  (accessToken, myInfo) => accessToken.length > 0 && !!myInfo,
);

// 관리자여부 선택자 함수
export const isAdmin = createSelector(
  [getAuthorized, getMyInfo],
  (isAuthorized, myInfo) =>
    isAuthorized && !!myInfo && myInfo.authList[0].auth === 'ROLE_ADMIN',
);

// 회원여부 선택자 함수
export const isMember = createSelector(
  [getAuthorized, getMyInfo],
  (isAuthorized, myInfo) =>
    isAuthorized && !!myInfo && myInfo.authList[0].auth === 'ROLE_MEMBER',
);
