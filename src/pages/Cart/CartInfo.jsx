import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoginPage from '../../pages/Login';
import Modal from '../../components/ModalBox';
import { removeFromCart } from '../../store/actions/cartActions';
import { generatePublicUrl } from '../../helpers/imageUrl';

const CartInfo = () => {
	const [signIn, setSignIn] = useState(false);
	
	const signInModal = () => setSignIn(!signIn);
	const history = useHistory();

	const token = localStorage.getItem('customer');

	const Checkout = (e) => {
		e.preventDefault();
		if (token) {
			history.push('/checkout');
		} else {
			signInModal();
		}
	};

	const { cartItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	console.log('Cart Items ===>', cartItems);

	const getTotal = () => {
		return cartItems.reduce((currentValue, nextValue) => {
			return currentValue + nextValue.quantity * nextValue.price;
		}, 0);
	};

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
		toast.success('Product successfuly removed from cart');
	};

	return (
		<div class="row">
			<Modal open={signInModal} modal={signIn} title="Customer Login">
				<LoginPage close={signInModal} />
			</Modal>
			<div class="col-lg-9">
				<table class="table table-cart table-mobile">
					<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							{/* <th>Total</th> */}
							<th></th>
						</tr>
					</thead>

					<tbody>
						{cartItems.map((item, i) => (
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
											<a href="#">{item.title}</a>
										</h3>
									</div>
								</td>
								<td class="price-col">
									{' '}
									<CurrencyFormat
										value={item.price}
										displayType="text"
										thousandSeparator
									/>
								</td>
								<td class="quantity-col">
									<div class="cart-product-quantity">
										<input
											type="number"
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
								</td>
								{/* <td class="total-col">84,000</td> */}
								<td class="remove-col">
									<button
										class="btn-remove"
										onClick={() => removeFromCartHandler(item.id)}
									>
										<i class="icon-close"></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<aside class="col-lg-3">
				<div class="summary summary-cart">
					<h3 class="summary-title">Cart Total</h3>

					<table class="table table-summary">
						<tbody>
							<tr class="summary-subtotal">
								<td>Subtotal:</td>
								<td>
									<CurrencyFormat
										value={getTotal()}
										displayType="text"
										thousandSeparator
									/>
								</td>
							</tr>
							<tr class="summary-shipping">
								<td>Delivery Cost: </td>
								<td>10,000</td>
							</tr>

							<tr class="summary-total">
								<td>Total:</td>
								<td>
									<CurrencyFormat
										value={getTotal()}
										displayType="text"
										thousandSeparator
									/>
								</td>
							</tr>
						</tbody>
					</table>

					<button
						onClick={Checkout}
						class="btn btn-outline-primary-2 btn-order btn-block"
					>
						Checkout
					</button>
				</div>
			</aside>
		</div>
	);
};

export default CartInfo;
