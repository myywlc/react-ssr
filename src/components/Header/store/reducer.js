import { CHANGE_LOGIN } from './constants';

const defaultState = {}

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_LOGIN:
			return {
				...state,
			}
		default:
			return state;
	}
}
