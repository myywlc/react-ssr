import { CHANGE_LIST_Translation } from './constants';

const defaultState = {
	dataB: ''
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_LIST_Translation:
			return {
				...state,
				dataB: action.data
			};
		default:
			return state;
	}
}
