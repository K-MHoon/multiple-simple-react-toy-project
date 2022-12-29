import { createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';
import * as api from '../lib/api';
import { Member } from '../App';
import { createReducer } from 'typesafe-actions';

export const FETCH_ONE = 'member/FETCH_ONE';
const FETCH_ONE_SUCCESS = 'member/FETCH_ONE_SUCCESS';
const FETCH_ONE_FAILURE = 'member/FETCH_ONE_FAILURE';

export const FETCH_LIST = 'member/FETCH_LIST';
const FETCH_LIST_SUCCESS = 'member/FETCH_LIST_SUCCESS';
const FETCH_LIST_FAILURE = 'member/FETCH_LIST_FAILURE';

export const fetchOne = createAction(FETCH_ONE, (userNo: string) => userNo);
export const fetchList = createAction(FETCH_LIST);

// 비동기 액션 수행 태스크
const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchMember);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchMemberList);

// 코드 사가 함수
export function* memberSaga() {
  yield takeLatest(FETCH_ONE, fetchOneSaga);
  yield takeLatest(FETCH_LIST, fetchListSaga);
}

export interface MemberState {
  member: Member | null;
  members: Member[];
  error: any;
}

const initialState: MemberState = {
  member: null,
  members: [],
  error: null,
};

const codedetails = createReducer(initialState, {
  [FETCH_ONE]: (state) => ({
    ...state,
    member: null,
  }),
  [FETCH_ONE_SUCCESS]: (state, action) => ({
    ...state,
    member: action.payload,
  }),
  [FETCH_ONE_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
  [FETCH_LIST]: (state) => ({
    ...state,
    members: [],
  }),
  [FETCH_LIST_SUCCESS]: (state, action) => ({
    ...state,
    members: action.payload,
  }),
  [FETCH_LIST_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});

export default codedetails;
