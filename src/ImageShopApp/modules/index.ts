import { combineReducers } from 'redux';
import { AuthState } from './auth';
import auth, { authSaga } from './auth';
import { all } from 'redux-saga/effects';
import codegroup, { codeGroupSaga, CodeGroupState } from './codegroup';
import loading, { LoadingState } from './loading';
import codedetails, { codeDetailSaga, CodeDetailState } from './codedetails';
import member, { memberSaga, MemberState } from './member';
import board, { boardSaga, BoardState } from './board';

export interface RootState {
  auth: AuthState;
  codedetail: CodeDetailState;
  codegroup: CodeGroupState;
  member: MemberState;
  loading: LoadingState;
  board: BoardState;
}

const rootReducer = combineReducers({
  auth,
  loading,
  codegroup,
  codedetails,
  member,
  board,
});

export function* rootSaga() {
  yield all([
    authSaga(),
    codeGroupSaga(),
    codeDetailSaga(),
    memberSaga(),
    boardSaga(),
  ]);
}

export default rootReducer;
