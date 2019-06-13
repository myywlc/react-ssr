import { CHANGE_LIST_Translation } from './constants';

const defaultState = {
	data: ''
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_LIST_Translation:
			return {
				...state,
				data: action.data
			};
		default:
			return state;
	}
}
