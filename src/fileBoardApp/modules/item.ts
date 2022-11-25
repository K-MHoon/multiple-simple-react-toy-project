import { createAction } from 'redux-actions';
import { createReducer } from 'typesafe-actions';
import { Item } from '../App';
import { takeLatest, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { endLoading, startLoading } from './loading';
import { fetchItemApi, fetchItemListApi } from '../lib/api';

export function* itemSaga() {
  yield takeLatest(FETCH_ITEM, fetchItemSaga);
  yield takeLatest(FETCH_ITEM_LIST, fetchItemListSaga);
}

export interface ItemState {
  item: Item;
  items: Item[];
  error: any;
}

export const FETCH_ITEM = 'item/FETCH_ITEM';
export const FETCH_SUCCESS = 'item/FETCH_SUCCESS';
export const FETCH_FAILURE = 'item/FETCH_FAILURE';

export const FETCH_LIST_SUCCESS = 'item/FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILURE = 'item/FETCH_LIST_FAILURE';
export const FETCH_ITEM_LIST = 'item/FETCH_ITEM_LIST';

export const fetchItem = createAction(FETCH_ITEM, (itemId: string) => itemId);
export const fetchSuccess = createAction(FETCH_SUCCESS, (data: string) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (err: any) => err);

export const fetchListSuccess = createAction(
  FETCH_LIST_SUCCESS,
  (data: string) => data,
);
export const fetchListFailure = createAction(
  FETCH_LIST_FAILURE,
  (err: any) => err,
);
export const fetchItemList = createAction(FETCH_ITEM_LIST);

function* fetchItemListSaga() {
  yield put(startLoading(FETCH_ITEM_LIST));
  try {
    const response: AxiosResponse = yield call(fetchItemListApi);
    yield put(fetchListSuccess(response.data));
  } catch (e) {
    yield put(fetchListFailure(e));
  }
  yield put(endLoading(FETCH_ITEM_LIST));
}

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
  [FETCH_LIST_SUCCESS]: (state, action) => ({
    ...state,
    items: action.payload,
  }),
  [FETCH_LIST_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});

export default item;
