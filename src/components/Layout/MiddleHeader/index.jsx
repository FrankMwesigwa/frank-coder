import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import API from '../../../helpers/api';
import DropDown from '../../DropDown';
import { removeFromCart } from '../../../store/actions/cartActions';

import './middle.css';

const MiddleHeader = () => {
	const [loading, setLoading] = useState(false);
	const [wishlist, setWishlist] = useState([]);

	const customer = JSON.parse(localStorage.getItem('customer'));

	const loadWishList = async () => {
		setLoading(true);
		try {
			const res = await API.get('/wishlist');
			setWishlist(res.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
		}
	};

	const wishlists = wishlist.filter(
		(wish) => wish.email === customer.user.email
	);

	console.log('WishList ====>', wishlists);

	const deleteWishList = (id) => {
		API.delete(`/wishlist/${id}`)
			.then((res) => {
				if (res.status === 200) {
					loadWishList();
					toast.success('Product successfuly removed from wishlist');
				} else Promise.reject();
			})
			.catch((err) =>
				toast.error('Product Failed to be removed from wishlist')
			);
	};

	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const getTotal = () => {
		return cartItems.reduce((currentValue, nextValue) => {
			return currentValue + nextValue.quantity * nextValue.price;
		}, 0);
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
		toast.success('Product successfuly removed from cart');
	};

	useEffect(() => {
		loadWishList();
	}, []);

	return (
		<>
			<div className="header-middle">
				<div className="middle-container">
					<div className="middle-list">
						<div className="middle-logo">
							<span className="d-xl-none d-lg-block">
								<i class="icon-bars icon-size"></i>
							</span>
							<Link to="/" class="">
								<img src="images/logo-2.jpg" alt="Molla Logo" width={170} />
							</Link>
						</div>

						<div className="d-none d-lg-block">
							<form action="" className="search-input">
								<input
									type="search"
									class=""
									placeholder="Search fashion products"
								/>
								<button class="search-btn" type="submit">
									<i class="icon-search icon-size"></i>
								</button>
							</form>
						</div>

						<div className="middle-icons">
							{/* <div className="middle-icon">
								<i class="icon-shopping-cart icon-size"></i>
								<span class="count">{cartItems.length}</span> 
								<span class="cart-txt">My Account</span>
							</div> */}
							<div className="dropdown cart-dropdown">
								<i class="icon-heart-o icon-size"></i>
								<span class="count">{wishlists && wishlists.length}</span>
								{/* <span class="cart-txt">WishList</span> */}
								<DropDown
									items={wishlists}
									link="/wishlist"
									del={deleteWishList}
									text="WishList"
								/>
							</div>
							<div className="dropdown cart-dropdown">
								<i class="icon-shopping-cart icon-size"></i>
								<span class="count">{cartItems.length}</span>
								{/* <span class="cart-txt">Cart</span> */}
								<DropDown
									items={cartItems}
									link="/cart"
									del={removeFromCartHandler}
									text="Cart"
								/>
							</div>
						</div>
					</div>

					<div className="d-xl-none d-lg-block">
						<div class="search-box">
							<form action="" className="search-input">
								<input
									type="search"
									class=""
									placeholder="Search fashion products"
								/>
								<button class="search-btn" type="submit">
									<i class="icon-search icon-size"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MiddleHeader;
