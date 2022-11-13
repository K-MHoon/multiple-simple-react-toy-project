import { combineReducers } from 'redux';
import { BoardState } from './board';
import { LoadingState } from './loading';
import board from './board';
import loading from './loading';

export interface RootState {
  board: BoardState;
  loading: LoadingState;
}

const rootReducer = combineReducers({
  board,
  loading,
});

export default rootReducer;
