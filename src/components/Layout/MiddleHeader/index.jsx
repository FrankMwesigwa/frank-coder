import React from 'react';
import MegaNav from '../MegaNav';
import './middle.css';

const MiddleTop = () => {
	return (
		<div className="header-nav">
			<div className="container">
				<div className="wrapper flexitem">
					<a href="#" className="trigger desktop-hide">
						<span className="i ri-menu-2-line"></span>
					</a>
					<div className="left flexitem">
						<div className="logo">
							<a href="/">
								<span className="circle">.inThing</span>
							</a>
						</div>
						<nav className="mobile-hide">
							<ul className="flexitem second-links">
								<li>
									<a href="">Home</a>
								</li>
								<li>
									<a href="">Shop</a>
								</li>
								<li className='has-child'>
									<a href="">
										Women
										<div className="icon-small">
											<i className="ri-arrow-down-s-line" />
										</div>
									</a>
									<MegaNav />
								</li>
								<li>
									<a href="">Men</a>
								</li>
								<li>
									<a href="">
										Sports
										<div className="fly-item">
											<span>New !</span>
										</div>
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="right">
						<ul className="flexitem second-links">
							<li className="mobile-hide">
								<a href="#">
									<div className="icon-large">
										<i className="ri-heart-line"></i>
									</div>
									<div className="fly-item">
										<span className="item-number">0</span>
									</div>
								</a>
							</li>
							<li>
								<a href="#" className="iscart">
									<div className="icon-large">
										<i className="ri-shopping-cart-line"></i>
										<div className="fly-item">
											<span className="item-number">0</span>
										</div>
									</div>
									<div className="icon-text">
										<div className="min-text">Total</div>
										<div className="cart-total">UGX 0</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MiddleTop;