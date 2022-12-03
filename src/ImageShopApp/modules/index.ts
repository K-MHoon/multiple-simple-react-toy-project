import { combineReducers } from "redux";
import { AuthState } from "./auth";
import auth, { authSaga } from "./auth";
import { all } from "redux-saga/effects";

export interface RootState {
  auth: AuthState;
}

const rootReducer = combineReducers({
  auth
});

export function* rootSaga() {
  yield all([
    authSaga()
  ]);
}

export default rootReducer;