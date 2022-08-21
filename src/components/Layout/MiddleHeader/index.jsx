import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useSelector, useDispatch } from 'react-redux';
import API from '../../../helpers/api';
import { generatePublicUrl } from '../../../helpers/imageUrl';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { removeFromCart } from '../../../store/actions/cartActions';

const MiddleHeader = () => {
	const [loading, setLoading] = useState(false);
	const [wishlist, setWishlist] = useState([]);

	const customer = JSON.parse(localStorage.getItem('customer'))

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
		(wish) => wish.email === customer ? customer.user.email : ""
	);

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
		<div class="header-middle">
			<div class="container-fluid">
				<div class="row">
					<div class="col-auto col-lg-3 col-xl-3 col-xxl-2">
						<button class="mobile-menu-toggler">
							<span class="sr-only">Toggle mobile menu</span>
							<i class="icon-bars"></i>
						</button>
						<Link to="/" class="logo">
							<img
								src="images/logo-2.jpg"
								alt="Molla Logo"
								width="105"
								height="25"
							/>
						</Link>
					</div>

					<div class="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
						<div class="row">
							<div class="col-lg-8 col-xxl-4-5col d-none d-lg-block">
								<div class="header-search header-search-extended header-search-visible header-search-no-radius">
									<a href="#" class="search-toggle" role="button">
										<i class="icon-search"></i>
									</a>
									<form action="#" method="get">
										<div class="header-search-wrapper search-wrapper-wide">
											<label for="q" class="sr-only">
												Search
											</label>
											<input
												type="search"
												class="form-control"
												name="q"
												id="q"
												placeholder="Search product ..."
												required=""
											/>
											<button class="btn btn-primary btn-search" type="submit">
												<i class="icon-search"></i>
											</button>
										</div>
									</form>
								</div>
							</div>

							<div class="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
								<div class="header-dropdown-link">
									<div class="dropdown compare-dropdown">
										<a
											href="#"
											class="dropdown-toggle"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											data-display="static"
											title="Compare Products"
											aria-label="Compare Products"
										>
											<i class="icon-random"></i>
											<span class="compare-txt">My Account</span>
										</a>
										<div class="dropdown-menu dropdown-menu-right">
											<ul class="compare-products">
												<li class="compare-product">
													<h4 class="compare-product-title">
														Do you have products to sell on inthing, kindly
														click on the register button to be added to our
														seller database
													</h4>
												</li>
											</ul>
											<div class="compare-actions">
												<a href="#" class="btn btn-outline-primary-2">
													<span>Register</span>
												</a>
											</div>
										</div>
									</div>

									<div class="dropdown cart-dropdown">
										<a
											href="#"
											class="dropdown-toggle"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											data-display="static"
										>
											<i class="icon-heart-o"></i>
											<span class="cart-count">
												{wishlists && wishlists.length}
											</span>
											<span class="cart-txt">WishList</span>
										</a>
										<div class="dropdown-menu dropdown-menu-right">
											<div class="dropdown-cart-products">
												{wishlists &&
													wishlists.map((item, i) => (
														<div class="product">
															<div class="product-cart-details">
																<h4 class="product-title">{item.title}</h4>
																<span class="cart-product-info">
																	<span class="cart-product-qty">
																		<CurrencyFormat
																			value={item.price}
																			displayType="text"
																			thousandSeparator
																		/>
																	</span>
																</span>
															</div>

															<figure class="product-image-container">
																<LazyLoadImage
																	src={generatePublicUrl(item.images)}
																	width="160"
																	alt="Product"
																/>
															</figure>
															<button
																href="#"
																class="btn-remove"
																title="Remove Product"
																onClick={() => deleteWishList(item._id)}
															>
																<i class="icon-close"></i>
															</button>
														</div>
													))}
											</div>

											<div class="dropdown-cart-action">
												<Link to="/wishlist" class="btn btn-primary">
													View WishList
												</Link>
											</div>
										</div>
									</div>
									<div class="dropdown cart-dropdown">
										<a
											href="#"
											class="dropdown-toggle"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											data-display="static"
										>
											<i class="icon-shopping-cart"></i>
											<span class="cart-count">{cartItems.length}</span>
											<span class="cart-txt">Cart</span>
										</a>
										<div class="dropdown-menu dropdown-menu-right">
											<div class="dropdown-cart-products">
												{cartItems.map((item, i) => (
													<div class="product">
														<div class="product-cart-details">
															<h4 class="product-title">{item.title}</h4>
															<span class="cart-product-info">
																<span class="cart-product-qty">
																	<CurrencyFormat
																		value={item.price}
																		displayType="text"
																		thousandSeparator
																	/>
																</span>
															</span>
														</div>

														<figure class="product-image-container">
															<LazyLoadImage
																src={generatePublicUrl(item.images)}
																width="160"
																alt="Product"
															/>
														</figure>
														<button
															href="#"
															class="btn-remove"
															title="Remove Product"
															onClick={() => removeFromCartHandler(item.id)}
														>
															<i class="icon-close"></i>
														</button>
													</div>
												))}
											</div>

											<div class="dropdown-cart-total">
												<span>Total</span>
												<span class="cart-total-price">
													<CurrencyFormat
														value={getTotal()}
														displayType="text"
														thousandSeparator
													/>
												</span>
											</div>

											<div class="dropdown-cart-action">
												<Link to="/cart" class="btn btn-primary">
													View Cart
												</Link>
												<Link to="/" class="btn btn-outline-primary-2">
													<span>Checkout</span>
													<i class="icon-long-arrow-right"></i>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row d-xl-none d-lg-block">
				<div className="col-lg-2">
					<div>
						<form action="#" method="get" class="mobile-search">
							<label for="mobile-search" class="sr-only">
								Search
							</label>
							<input
								type="search"
								class="form-control"
								name="mobile-search"
								id="mobile-search"
								placeholder="Search in..."
								required=""
							/>
							<button class="btn btn-primary btn-search" type="submit">
								<i class="icon-search"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MiddleHeader;
