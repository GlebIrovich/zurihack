import { combineReducers } from 'redux';
import { emojiReducer } from './emoji/reducer';
import { timeReducer } from './time/reducer';

const testReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  test: testReducer,
  emoji: emojiReducer,
  time: timeReducer,
});
