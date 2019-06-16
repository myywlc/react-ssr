import { CHANGE_DATA } from './constants';

const defaultState = {
  data: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
