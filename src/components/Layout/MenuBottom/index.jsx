import React from 'react';
import './styles.css';

const MenuBottom = () => {
	return (
		<div className="menu-bottom desktop-hide">
			<div className="container">
				<div className="wrapper">
					<nav>
						<ul className="flexitem">
							<li>
								<a href="#">
									<i className="ri-bar-chart-line"></i>
									<span>Trending</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="ri-user-6-line"></i>
									<span>Account</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="ri-heart-line"></i>
									<span>Wishlist</span>
								</a>
							</li>
							<li>
								<a href="#" className="t-search">
									<i className="ri-search-line"></i>
									<span>Search</span>
								</a>
							</li>
							<li>
								<a href="#">
									<i className="ri-shopping-cart-line"></i>
									<span>Cart</span>
									<div className="fly-tem">
										<span className="item-number">0</span>
									</div>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MenuBottom;
