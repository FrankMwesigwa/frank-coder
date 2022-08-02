import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = () => {
	return (
		<div class="products">
			<div class="row justify-content-center">
				<div class="col-6 col-md-4 col-lg-3">
					<Link to="/product">
						<div class="product text-center">
							<figure class="product-media">
								<span class="product-label label-sale">Sale</span>
								<a href="#">
									<img
										src="images/013.jpg"
										alt="Product image"
										class="product-image"
									/>
								</a>
								<div class="product-action-vertical">
									<a
										href="#"
										class="btn-product-icon btn-wishlist"
										title="Add to wishlist"
									>
										<span>add to wishlist</span>
									</a>
									<a
										href="#"
										class="btn-product-icon btn-quickview"
										title="Quick view"
									>
										<span>Quick view</span>
									</a>
									<a
										href="#"
										class="btn-product-icon btn-compare"
										title="Compare"
									>
										<span>Compare</span>
									</a>
								</div>

								<div class="product-action">
									<a href="#" class="btn-product btn-cart" title="Add to cart">
										<span>add to cart</span>
									</a>
								</div>
							</figure>

							<div class="product-body">
								<div class="product-cat">
									<a href="#">Men Fashion</a>
								</div>

								<h3 class="product-title">
									<a href="#">African Print</a>
								</h3>

								<div class="product-price">
									<span class="new-price">251,990</span>
									<span class="old-price">Was 290,000</span>
								</div>

								<div class="ratings-container">
									<div class="ratings">
										<div class="ratings-val" style={{ width: '100%' }}></div>
									</div>

									<span class="ratings-text">( 2 Reviews )</span>
								</div>
							</div>
						</div>
					</Link>
				</div>

				<div class="col-6 col-md-4 col-lg-3">
					<div class="product text-center">
						<figure class="product-media">
							<span class="product-label label-sale">Sale</span>
							<a href="#">
								<img
									src="images/015.jpg"
									alt="Product image"
									class="product-image"
								/>
							</a>
							<div
								class="product-countdown is-countdown"
								data-until="+55h"
								data-relative="true"
								data-labels-short="true"
							>
								<span class="countdown-row countdown-show4">
									<span class="countdown-section">
										<span class="countdown-amount">02</span>
										<span class="countdown-period">Days</span>
									</span>
									<span class="countdown-section">
										<span class="countdown-amount">03</span>
										<span class="countdown-period">Hours</span>
									</span>
									<span class="countdown-section">
										<span class="countdown-amount">57</span>
										<span class="countdown-period">Mins</span>
									</span>
									<span class="countdown-section">
										<span class="countdown-amount">14</span>
										<span class="countdown-period">Secs</span>
									</span>
								</span>
							</div>

							<div class="product-action-vertical">
								<a
									href="#"
									class="btn-product-icon btn-wishlist"
									title="Add to wishlist"
								>
									<span>add to wishlist</span>
								</a>
								<a
									href="#"
									class="btn-product-icon btn-quickview"
									title="Quick view"
								>
									<span>Quick view</span>
								</a>
								<a
									href="#"
									class="btn-product-icon btn-compare"
									title="Compare"
								>
									<span>Compare</span>
								</a>
							</div>

							<div class="product-action">
								<a href="#" class="btn-product btn-cart" title="Add to cart">
									<span>add to cart</span>
								</a>
							</div>
						</figure>

						<div class="product-body">
							<div class="product-cat">
								<a href="#">Men Fashion</a>
							</div>

							<h3 class="product-title">
								<a href="#">African Print Shirt</a>
							</h3>

							<div class="product-price">
								<span class="new-price">179,990</span>
								<span class="old-price">Was 199,000</span>
							</div>

							<div class="ratings-container">
								<div class="ratings">
									<div class="ratings-val" style={{ width: '100%' }}></div>
								</div>

								<span class="ratings-text">( 4 Reviews )</span>
							</div>

							{/* <div class="product-nav product-nav-dots">
                                                   <a href="#" class="active" style="background: #69b4ff;"><span class="sr-only">Color name</span></a>
                                                   <a href="#" style="background: #ff887f;"><span class="sr-only">Color name</span></a>
                                                   <a href="#" style="background: #333333;"><span class="sr-only">Color name</span></a>
                                                </div> */}
						</div>
					</div>
				</div>
				<div class="col-6 col-md-4 col-lg-3">
					<div class="product text-center">
						<figure class="product-media">
							<a href="#">
								<img
									src="images/008.jpg"
									alt="Product image"
									class="product-image"
								/>
							</a>
							<div class="product-action-vertical">
								<a
									href="#"
									class="btn-product-icon btn-wishlist"
									title="Add to wishlist"
								>
									<span>add to wishlist</span>
								</a>
								<a
									href="#"
									class="btn-product-icon btn-quickview"
									title="Quick view"
								>
									<span>Quick view</span>
								</a>
								<a
									href="#"
									class="btn-product-icon btn-compare"
									title="Compare"
								>
									<span>Compare</span>
								</a>
							</div>

							<div class="product-action">
								<a href="#" class="btn-product btn-cart" title="Add to cart">
									<span>add to cart</span>
								</a>
							</div>
						</figure>

						<div class="product-body">
							<div class="product-cat">
								<a href="#">Men Fashion</a>
							</div>

							<h3 class="product-title">
								<a href="#">Killler TShirt</a>
							</h3>

							<div class="product-price">3,050</div>

							<div class="ratings-container">
								<div class="ratings">
									<div class="ratings-val" style={{ width: '60%' }}></div>
								</div>

								<span class="ratings-text">( 8 Reviews )</span>
							</div>

							{/* <div class="product-nav product-nav-dots">
                                                   <a href="#" class="active" style="background: #b58555;"><span class="sr-only">Color name</span></a>
                                                   <a href="#" style="background: #93a6b0;"><span class="sr-only">Color name</span></a>
                                                </div> */}
						</div>
					</div>
				</div>
				<div class="col-6 col-md-4 col-lg-3">
					<div class="product text-center">
						<figure class="product-media">
							<a href="#">
								<img
									src="images/011.jpg"
									alt="Product image"
									class="product-image"
								/>
							</a>
							<div class="product-action-vertical">
								<a
									href="#"
									class="btn-product-icon btn-wishlist"
									title="Add to wishlist"
								>
									<span>add to wishlist</span>
								</a>
								<a
									href="#"
									class="btn-product-icon btn-quickview"
									title="Quick view"
								>
									<span>Quick view</span>
								</a>
								<a
									href="#"
									class="btn-product-icon btn-compare"
									title="Compare"
								>
									<span>Compare</span>
								</a>
							</div>

							<div class="product-action">
								<a href="#" class="btn-product btn-cart" title="Add to cart">
									<span>add to cart</span>
								</a>
							</div>
						</figure>

						<div class="product-body">
							<div class="product-cat">
								<a href="#">Clothes</a>
							</div>

							<h3 class="product-title">
								<a href="#">Tan suede biker jacket</a>
							</h3>

							<div class="product-price">240,000</div>

							<div class="ratings-container">
								<div class="ratings">
									<div class="ratings-val" style={{ width: '80%' }}></div>
								</div>

								<span class="ratings-text">( 4 Reviews )</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RelatedProducts;
