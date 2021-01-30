import { ADD_TODO } from '../app/actions';
import { State } from '../index';
const initialState = State;

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return { ...state, id: action.id, text: action.text, isComplete: false };
    }
    default:
      return state;
  }
}
