import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CurrencyFormat from 'react-currency-format';
import LoadSpinner from '../../components/Spinner';
import { generatePublicUrl } from '../../helpers/imageUrl';
import { addToCart } from '../../store/actions/cartActions';
import { createWishList } from '../../store/actions/wishListActions';

const DetailsTop = ({ product }) => {
	console.log('product ====>', product);
	const [related, setRelated] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentImage, setCurrentImage] = useState('');
	const [color, setColor] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [modalIsOpen, setIsOpen] = useState(false);

	const dispatch = useDispatch();

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const Wish = () => (
		<div>
			Product Added To WishList Successfully
			<Link to="/wishList" className="pl-2">
				<button class="btn btn-sm btn-primary">Go To My WishList</button>
			</Link>
		</div>
	);

	const token = localStorage.getItem('token');
	const phonenumber = localStorage.getItem('phonenumber');

	const checkWishList = (e) => {
		e.preventDefault();
		if (token) {
			wishListHandler();
		} else {
			openModal();
		}
	};

	const wishListHandler = () => {
		setLoading(true);
		const data = {
			id: product._id,
			title: product.title,
			image: product.images[0].url,
			price: product.price,
			phonenumber: phonenumber,
			description: product.description,
		};

		dispatch(createWishList(data))
			.then((res) => {
				toast.success(Wish);
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const decQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	useEffect(() => {
		console.clear();
		console.log(product);
	}, []);

	const Msg = () => (
		<div>
			Product Added To Cart Successfully
			<Link to="/cart" className="pl-2">
				<button class="btn btn-sm btn-primary">Go To Cart</button>
			</Link>
		</div>
	);

	const handleAddToCart = () => {
		const cat = {
			id: product._id,
			title: product.title,
			images: product.images[0].url,
			price: product.price,
			discount: product.discount,
			discountprice: product.discountprice,
			quantity: quantity,
			color,
		};

		dispatch(addToCart(cat));
		toast.success(Msg);
	};

	const renderImage = () => {
		return (
			<div class="product-gallery-preview-item active">
				<LazyLoadImage
					class="image-zoom"
					src={
						currentImage
							? currentImage
							: product.images && product.images.length
							? generatePublicUrl(product.images[0].filename)
							: ''
					}
				/>
				<div class="image-zoom-pane"></div>
			</div>
		);
	};

	const increaseQt = () => {
		setQuantity(quantity + 1);
	};
	const decreaseQt = () => {
		if (quantity == 1) {
			setQuantity(quantity == 1);
		} else {
			setQuantity(quantity - 1);
		}
	};

	return (
		<div class="product-details-top">
			<div class="row">
				<div class="col-md-6">
					<div class="product-gallery product-gallery-vertical">
						<div class="row">
							<figure class="product-main-image">
								{renderImage()}

								<a
									href="#"
									id="btn-product-gallery"
									class="btn-product-gallery"
								>
									<i class="icon-arrows"></i>
								</a>
							</figure>

							<div id="product-zoom-gallery" class="product-image-gallery">
								{product.images && product.images.length
									? product.images.map((thumb, index) => (
											<Link
												to="#"
												key={thumb.id}
												onClick={() =>
													setCurrentImage(
														index === 0
															? generatePublicUrl(thumb.filename)
															: generatePublicUrl(thumb.filename)
													)
												}
											>
												<div class="product-gallery-thumblist-item">
													<LazyLoadImage
														class=""
														src={
															index === 0
																? generatePublicUrl(product.images[0].filename)
																: generatePublicUrl(thumb.filename)
														}
														alt="thumbnail"
													/>
												</div>
											</Link>
									  ))
									: ''}
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="product-details">
						<h1 class="product-title">{product.title}</h1>

						<div class="ratings-container">
							<div class="ratings">
								<div class="ratings-val" style={{ width: '80%' }}></div>
							</div>
							<a
								class="ratings-text"
								href="#product-review-link"
								id="review-link"
							>
								( 2 Reviews )
							</a>
						</div>

						<div class="product-price">{product.price}</div>

						<div class="product-content">
							<p>{product.description}</p>
						</div>

						<div class="details-filter-row details-row-size">
							<label>Color:</label>

							<div class="product-nav product-nav-thumbs"></div>
						</div>

						<div class="details-filter-row details-row-size">
							<label for="size">Size:</label>
							<div class="select-custom">
								<select name="size" id="size" class="form-control">
									<option value="#" selected="selected">
										Select a size
									</option>
									<option value="s">Small</option>
									<option value="m">Medium</option>
									<option value="l">Large</option>
									<option value="xl">Extra Large</option>
								</select>
							</div>
						</div>

						<div class="details-filter-row details-row-size">
							<label for="qty">Qty:</label>
							<div class="product-details-quantity">
								<input
									type="number"
									id="qty"
									class="form-control"
									value="1"
									min="1"
									max="10"
									step="1"
									data-decimals="0"
									required=""
									style={{ display: 'none' }}
								/>
								<div class="input-group  input-spinner">
									<div class="input-group-prepend">
										<button
											style={{ minWidth: '26px' }}
											class="btn btn-decrement btn-spinner"
											type="button"
										>
											<i class="icon-minus"></i>
										</button>
									</div>
									<input
										type="text"
										style={{ textAlign: 'center' }}
										class="form-control "
										required=""
										placeholder=""
									/>
									<div class="input-group-append">
										<button
											style={{ minWidth: '26px' }}
											class="btn btn-increment btn-spinner"
											type="button"
										>
											<i class="icon-plus"></i>
										</button>
									</div>
								</div>
							</div>
						</div>

						<div class="product-details-action">
							<div class="details-action-wrapper">
								<button class="btn-product btn-cart" onClick={handleAddToCart}>
									<span>add to cart</span>
								</button>
								<button
									class="btn-product btn-wishlist"
									title="Wishlist"
									onClick={wishListHandler}
								>
									<span>Add to Wishlist</span>
								</button>
							</div>
						</div>

						<div class="product-details-footer">
							<div class="product-cat">
								<span>Category:</span>
								{product.category && product.category.category}
								{/* <a href="#">Yellow</a> */}
							</div>

							<div class="social-icons social-icons-sm">
								<span class="social-label">Share:</span>
								<a
									href="#"
									class="social-icon"
									title="Facebook"
									target="_blank"
								>
									<i class="icon-facebook-f"></i>
								</a>
								<a href="#" class="social-icon" title="Twitter" target="_blank">
									<i class="icon-twitter"></i>
								</a>
								<a
									href="#"
									class="social-icon"
									title="Instagram"
									target="_blank"
								>
									<i class="icon-instagram"></i>
								</a>
								<a
									href="#"
									class="social-icon"
									title="Pinterest"
									target="_blank"
								>
									<i class="icon-pinterest"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsTop;
