import React from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { generatePublicUrl } from '../../helpers/imageUrl';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './dropdown.css';

const DropDown = ({ items, link, del, text }) => {
	return (
		<div class="dropdown-menu dropdown-menu-right">
			<div class="dropdown-cart-products">
				{items &&
					items.map((item, i) => (
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
								onClick={() => del(item._id)}
							>
								<i class="icon-close"></i>
							</button>
						</div>
					))}
			</div>

			<div class="dropdown-cart-action">
				{items.length > 0 ? (
					<Link to={link} class="btn btn-primary">
						View {text}
					</Link>
				) : (
					`You Have No ${text} Items Yet`
				)}
			</div>
		</div>
	);
};

export default DropDown;
