import React, { useState } from 'react';
import API from '../../helpers/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { generatePublicUrl } from '../../helpers/imageUrl';
import { removeCart } from '../../store/actions/cartActions';

const CheckoutPage = () => {
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const customer = JSON.parse(localStorage.getItem('customer'));

	const dispatch = useDispatch();
	const { cartItems, totalQuantities } = useSelector((state) => state.cart);

	const getTotal = () => {
		return cartItems.reduce((currentValue, nextValue) => {
			return currentValue + nextValue.quantity * nextValue.price;
		}, 0);
	};

	const placeOrder = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const orderData = {
				orderItems: cartItems,
				fullnames: customer.user.fullnames,
				orderedBy: customer.user.email,
				email: customer.user.email,
				address: customer.user.address,
				totalPrice: getTotal(),
				totalquantity: totalQuantities,
			};

			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${customer.accessToken}`,
				},
			};

			const res = await API.post('/orders', orderData, config);

			console.log('Ordered Items ====>', res.data);

			setLoading(false);
			localStorage.removeItem('cartItems');
			dispatch(removeCart(cartItems));
			toast.success('Order Successfully Placed !');
			history.push('/');

			// history.push('/receipt', {
			// 	state: res.data,
			// });
		} catch {
			setLoading(false);
			toast.error('Order Creation Failed !');
		}
	};

	return (
		<div class="page-content">
			<div class="checkout">
				<div class="container">
					<form action="#">
						<div class="row">
							<div class="col-lg-9">
								<h2 class="checkout-title">Billing Details</h2>

								<label>Full Names</label>
								<input
									type="text"
									class="form-control"
									value={customer.user.fullnames}
									disabled
								/>

								<label>Phone Number *</label>
								<input
									type="text"
									class="form-control"
									value={customer.user.phonenumber}
									disabled
								/>

								<label>Delivery Address *</label>
								<input
									type="text"
									class="form-control"
									value={customer.user.address}
									disabled
								/>

								<label>Email address *</label>
								<input
									type="email"
									class="form-control"
									value={customer.user.email}
									disabled
								/>

								<label>Order notes (optional)</label>
								<textarea
									class="form-control"
									cols="30"
									rows="4"
									placeholder="Notes about your order, e.g. special notes for delivery"
								></textarea>
							</div>
							<aside class="col-lg-3">
								<div class="summary">
									<h3 class="summary-title">Your Order</h3>

									<table class="table table-summary">
										<thead>
											<tr>
												<th>Product</th>
												<>Title</>
												<th>Price</th>
											</tr>
										</thead>

										<tbody>
											{cartItems.map((item, index) => (
												<tr class>
													<td class="d-block flex-shrink-0">
														<LazyLoadImage
															src={generatePublicUrl(item.images)}
															width="64"
															alt="Product"
														/>
													</td>
													<td class="ps-2">
														<h6 class="">
															<span>{item.title}</span>
														</h6>
													</td>
													<td class="">
														<span class="">
															<CurrencyFormat
																value={item.price}
																displayType="text"
																thousandSeparator
															/>
														</span>
														{/* <span class="text-muted">x {item.quantity}</span> */}
													</td>
												</tr>
											))}

											<tr class="summary-subtotal">
												<td colSpan={2}>Sub Total:</td>
												<td>
													<CurrencyFormat
														value={getTotal()}
														displayType="text"
														thousandSeparator
													/>
												</td>
											</tr>
											<tr class="summary-total">
												<td colSpan={2}>Grand Total:</td>
												
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
										type="submit"
										class="btn btn-outline-primary-2 btn-order btn-block"
										onClick={placeOrder}
									>
										<span class="btn-text">Place Order</span>
									</button>
								</div>
							</aside>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CheckoutPage;
