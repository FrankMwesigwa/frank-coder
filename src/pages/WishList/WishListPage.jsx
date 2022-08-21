import React, { useState, useEffect } from 'react';
import API from '../../helpers/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { generatePublicUrl } from '../../helpers/imageUrl';
import { addToCart } from '../../store/actions/cartActions';

const WishListPage = () => {
	const [loading, setLoading] = useState(false);
	const [wishlist, setWishlist] = useState([]);

	const customer = JSON.parse(localStorage.getItem('customer'));

	const dispatch = useDispatch();

	const Msg = () => (
		<div>
			Product Added To Cart Successfully
			<Link to="/cart" className="pl-2">
				<button class="btn btn-sm btn-primary">Go To Cart</button>
			</Link>
		</div>
	);

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

	const deleteWishList = (id) => {
		API.delete(`/wishlist/${id}`)
			.then((res) => {
				if (res.status === 200) {
					// window.location.reload();
					loadWishList();
					toast.success('Product successfuly removed from wishlist');
				} else Promise.reject();
			})
			.catch((err) =>
				toast.error('Product Failed to be removed from wishlist')
			);
	};

	const handleAddToCart = (product) => {
		const cat = {
			id: product._id,
			title: product.title,
			images: product.images,
			price: product.price,
			quantity: 1,
		};

		dispatch(addToCart(cat));
		toast.success(Msg);
	};

	useEffect(() => {
		loadWishList();
	}, []);

	return (
		<div class="page-content">
			<div class="container">
				<table class="table table-wishlist table-mobile">
					<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th></th>
							<th></th>
						</tr>
					</thead>

					<tbody>
						{wishlists &&
							wishlists.map((item) => (
								<tr>
									<td class="product-col">
										<div class="product">
											<figure class="product-media">
												<LazyLoadImage
													src={generatePublicUrl(item.images)}
													width="160"
													alt="Product"
												/>
											</figure>

											<h3 class="product-title">
												<span>{item.title}</span>
											</h3>
										</div>
									</td>
									<td class="price-col">
										<CurrencyFormat
											value={item.price}
											displayType="text"
											thousandSeparator
										/>
									</td>
									<td class="action-col">
										<button
											class="btn btn-block btn-outline-primary-2"
											onClick={() => handleAddToCart(item)}
										>
											<i class="icon-cart-plus"></i>Add to Cart
										</button>
									</td>
									<td class="remove-col">
										<button
											class="btn-remove"
											onClick={() => deleteWishList(item._id)}
										>
											<i class="icon-close"></i>
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
				<div class="wishlist-share">
					<div class="social-icons social-icons-sm mb-2">
						<label class="social-label">Share on:</label>
						<a href="" class="social-icon" title="Facebook">
							<i class="icon-facebook-f"></i>
						</a>
						<a href="" class="social-icon" title="Twitter">
							<i class="icon-twitter"></i>
						</a>
						<a href="" class="social-icon" title="Instagram">
							<i class="icon-instagram"></i>
						</a>
						<a href="" class="social-icon" title="Youtube">
							<i class="icon-youtube"></i>
						</a>
						<a href="" class="social-icon" title="Pinterest">
							<i class="icon-pinterest"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WishListPage;
