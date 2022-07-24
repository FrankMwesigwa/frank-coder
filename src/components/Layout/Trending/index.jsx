import React from 'react';
import ProductCard from '../../Product';
import './styles.css'

const Trending = () => {
	return (
		<div className="trending">
			<div className="container">
				<div className="wrapper">
					<div className="sectop flexitem">
						<h2>
							<span className="circle"></span>
							<span>Trending Products</span>
						</h2>
					</div>
					<div className="column">
						<div className="flexwrap">
							<div className="row products big">
								<div className="item">
									<div className="offer">
										<p>Offer ends at</p>
										<ul className="flexcenter">
											<li>1</li>
											<li>15</li>
											<li>27</li>
											<li>60</li>
										</ul>
									</div>
									<div className="media">
										<div className="image">
											<a href="">
												<img src="images/woman.jpeg" alt="" />
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
										<div className="rating">
											<div className="stars"></div>
											<span className="mini-text">(2,585)</span>
										</div>
										<h3 className="main-links">
											<a href="">Happy Women's Day</a>
										</h3>
										<div className="price">
											<span className="current">UGX 500,000</span>
											<span className="normal mini-text">UGX 300,000</span>
										</div>
										<div className="stock mini-text">
											<div className="qty">
												<span>
													Stock: <strong className="qty-avaliable">107</strong>
												</span>
												<span>
													Sold: <strong className="qty-sold">3,456</strong>
												</span>
											</div>
											<div className="bar">
												<div className="available"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row products mini">
								<ProductCard images={'images/20.jpg'} />
							</div>
							<div className="row products mini">
								<ProductCard images={'images/21.jpg'} />
							</div>
							{/* <div className="row products mini">
								<ProductCard images={'images/22.jpg'} />
							</div>
							<div className="row products mini">
								<ProductCard images={'images/20.jpg'} />
							</div>
							<div className="row products mini">
								<ProductCard images={'images/21.jpg'} />
							</div>
							<div className="row products mini">
								<ProductCard images={'images/22.jpg'} />
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trending;
