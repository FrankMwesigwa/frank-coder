import React from 'react';
import './styles.css';

const Widgets = () => {
	return (
		<div className="widgets">
			<div className="container">
				<div className="wrapper">
					<div className="flexwrap">
						<div className="row">
							<div className="item mini-links">
								<h4>Help & Contacts</h4>
								<ul className="flexcol">
									<li>
										<a href="">Your Account</a>
									</li>
									<li>
										<a href="">Your Orders</a>
									</li>
									<li>
										<a href="">Returns</a>
									</li>
									<li>
										<a href="">Help</a>
									</li>
									<li>
										<a href="">Contact</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="row">
							<div className="item mini-links">
								<h4>Product Categories</h4>
								<ul className="flexcol">
									<li>
										<a href="">Men</a>
									</li>
									<li>
										<a href="">Women</a>
									</li>
									<li>
										<a href="">Sports</a>
									</li>
									<li>
										<a href="">Beauty</a>
									</li>
									<li>
										<a href="">Accessories</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="row">
							<div className="item mini-links">
								<h4>Payment Info</h4>
								<ul className="flexcol">
									<li>
										<a href="">Master Card</a>
									</li>
									<li>
										<a href="">Visa Card</a>
									</li>
									<li>
										<a href="">MTN Mobile Money</a>
									</li>
									<li>
										<a href="">Airtel Money</a>
									</li>
									<li>
										<a href="">Cash Delivery</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="row">
							<div className="item mini-links">
								<h4>About Us</h4>
								<ul className="flexcol">
									<li>
										<a href="">Company Info</a>
									</li>
									<li>
										<a href="">News</a>
									</li>
									<li>
										<a href="">Policies</a>
									</li>
									<li>
										<a href="">Investors</a>
									</li>
									<li>
										<a href="">Customer Reviews</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Widgets;
