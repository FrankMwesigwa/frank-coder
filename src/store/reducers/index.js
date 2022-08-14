import { combineReducers } from 'redux';
import authReducer from "./authReducer";
import { searchReducer } from "./searchReducer";
import cartReducer from "./cartReducer";
import wishListReducer from './wishListReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    search: searchReducer,
    cart: cartReducer,
    wishlist: wishListReducer
});

export default rootReducer;