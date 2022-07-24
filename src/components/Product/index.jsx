import React from 'react';

const ProductCard = ({images}) => {
	return (
		<div className="item">
			<div className="media">
				<div className="thumbnail object-cover">
					<a href="">
						<img src={images} alt="" />
					</a>
				</div>
				<div className="hoverable">
					<ul>
						<li className="active">
							<a href="">
								<i className="ri-heart-line"></i>
							</a>
						</li>
						<li>
							<a href="">
								<i className="ri-eye-line"></i>
							</a>
						</li>
						<li>
							<a href="">
								<i className="ri-shuffle-line"></i>
							</a>
						</li>
					</ul>
				</div>
				<div className="discount circle flexcenter">
					<span>31%</span>
				</div>
			</div>
			<div className="content">
				<h3 className="main-links">
					<a href="">Happy Women's Day</a>
				</h3>
				<div className="rating">
					<div className="stars"></div>
					<span className="mini-text">(2,585)</span>
				</div>
				<div className="price">
					<span className="current">UGX 500,000</span>
					<span className="normal mini-text">UGX 300,000</span>
				</div>
				<div className="mini-text">
					<p>2765 Sold</p>
					<p>Free Shipping</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
