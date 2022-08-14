import axios from 'axios';
import {
	CREATE_WISHLIST,
	GET_WISHLIST,
	//   UPDATE_WISHLIST,
	//   DELETE_WISHLIST,
	WISHLIST_ERROR,
} from './types';

export const createWishList = (data) => async (dispatch) => {
	try {
		const res = await axios.post(`${process.env.REACT_APP_API}/wishlist`, data);

		console.log('wishlist data added ====>', res.data);

		dispatch({
			type: CREATE_WISHLIST,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const getWishList = () => async (dispatch) => {
	try {
		const res = await axios.get(`${process.env.REACT_APP_API}/wishlist`);
		console.log('reducer data ==>', res);

		dispatch({
			type: GET_WISHLIST,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: WISHLIST_ERROR,
			payload: err,
		});
	}
};
