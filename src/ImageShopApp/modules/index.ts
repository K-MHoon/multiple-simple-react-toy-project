import { combineReducers } from 'redux';
import { AuthState } from './auth';
import auth, { authSaga } from './auth';
import { all } from 'redux-saga/effects';
import codegroup, { codeGroupSaga, CodeGroupState } from './codegroup';
import loading, { LoadingState } from './loading';
import { CodeDetailState } from './codedetails';

export interface RootState {
  auth: AuthState;
  codedetail: CodeDetailState;
  codegroup: CodeGroupState;
  loading: LoadingState;
}

const rootReducer = combineReducers({
  auth,
  loading,
  codegroup,
});

export function* rootSaga() {
  yield all([authSaga(), codeGroupSaga()]);
}

export default rootReducer;
