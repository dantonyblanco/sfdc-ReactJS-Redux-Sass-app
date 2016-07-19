import { MY_ACTION } from '../actions/index';

const initialState = ['First item'];

export default function(state = initialState, action) {
  switch (action.type) {
    case MY_ACTION:
      return [...state, action.payload.text];
  }
  return state;
}
