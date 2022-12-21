import { combineReducers } from 'redux';
import { AuthState } from './auth';
import auth, { authSaga } from './auth';
import { all } from 'redux-saga/effects';
import codegroup, { codeGroupSaga, CodeGroupState } from './codegroup';
import loading, { LoadingState } from './loading';
import { CodeDetail } from '../App';

export interface RootState {
  auth: AuthState;
  codedetail: CodeDetail;
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
