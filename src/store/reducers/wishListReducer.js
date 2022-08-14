import {
	CREATE_WISHLIST,
	GET_WISHLIST,
	UPDATE_WISHLIST,
	DELETE_WISHLIST,
	WISHLIST_ERROR,
} from '../actions/types';

const initialState = [];

const tutorialReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case CREATE_WISHLIST:
			return [...state, payload];

		case GET_WISHLIST:
			return payload;

		case UPDATE_WISHLIST:
			return state.map((wishlist) => {
				if (wishlist.id === payload.id) {
					return {
						...wishlist,
						...payload,
					};
				} else {
					return wishlist;
				}
			});

		case DELETE_WISHLIST:
			return state.filter(({ id }) => id !== payload.id);

		default:
			return state;
	}
};

export default tutorialReducer;
