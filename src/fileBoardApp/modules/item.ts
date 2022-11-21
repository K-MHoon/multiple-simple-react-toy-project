import { createAction } from 'redux-actions';
import { createReducer } from 'typesafe-actions';
import { Item } from '../App';
import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { endLoading, startLoading } from './loading';
import { fetchItemApi } from '../lib/api';

export function* itemSaga() {
  yield takeLatest(FETCH_ITEM, fetchItemSaga);
}

export interface ItemState {
  item: Item;
  items: Item[];
  error: any;
}

export const FETCH_ITEM = 'item/FETCH_ITEM';
export const FETCH_SUCCESS = 'item/FETCH_SUCCESS';
export const FETCH_FAILURE = 'item/FETCH_FAILURE';

export const fetchItem = createAction(FETCH_ITEM, (itemId: string) => itemId);
export const fetchSuccess = createAction(FETCH_SUCCESS, (data: string) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (err: any) => err);

function* fetchItemSaga(action: ReturnType<typeof fetchItem>) {
  yield put(startLoading(FETCH_ITEM));
  try {
    const response: AxiosResponse = yield call(fetchItemApi, action.payload);
    yield put(fetchSuccess(response.data));
  } catch (e) {
    yield put(fetchFailure(e));
  }
  yield put(endLoading(FETCH_ITEM));
}

const initialState: ItemState = {
  item: { itemId: '', itemName: '', price: 0, description: '' },
  items: [],
  error: null,
};

const item = createReducer(initialState, {
  [FETCH_SUCCESS]: (state, action) => ({
    ...state,
    item: action.payload,
  }),
  [FETCH_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});

export default item;
