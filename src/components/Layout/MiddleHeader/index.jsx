import React from 'react';

const MiddleHeader = () => {
	return (
		<div class="header-middle">
			<div class="container-fluid">
				<div class="row">
					<div class="col-auto col-lg-3 col-xl-3 col-xxl-2">
						<button class="mobile-menu-toggler">
							<span class="sr-only">Toggle mobile menu</span>
							<i class="icon-bars"></i>
						</button>
						<a href="#" class="logo">
							<img
								src="images/logo-2.jpg"
								alt="Molla Logo"
								width="105"
								height="25"
							/>
						</a>
					</div>

					<div class="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
						<div class="row">
							<div class="col-lg-8 col-xxl-4-5col d-none d-lg-block">
								<div class="header-search header-search-extended header-search-visible header-search-no-radius">
									<a href="#" class="search-toggle" role="button">
										<i class="icon-search"></i>
									</a>
									<form action="#" method="get">
										<div class="header-search-wrapper search-wrapper-wide">
											<label for="q" class="sr-only">
												Search
											</label>
											<input
												type="search"
												class="form-control"
												name="q"
												id="q"
												placeholder="Search product ..."
												required=""
											/>
											<button class="btn btn-primary btn-search" type="submit">
												<i class="icon-search"></i>
											</button>
										</div>
									</form>
								</div>
							</div>

							<div class="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
								<div class="header-dropdown-link">
									<div class="dropdown compare-dropdown">
										<a
											href="/html/molla/index-14.html#"
											class="dropdown-toggle"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											data-display="static"
											title="Compare Products"
											aria-label="Compare Products"
										>
											<i class="icon-random"></i>
											<span class="compare-txt">Compare</span>
										</a>
										<div class="dropdown-menu dropdown-menu-right">
											<ul class="compare-products">
												<li class="compare-product">
													<a
														href="/html/molla/index-14.html#"
														class="btn-remove"
														title="Remove Product"
													>
														<i class="icon-close"></i>
													</a>
													<h4 class="compare-product-title">
														<a href="/html/molla/product.html">
															Blue Night Dress
														</a>
													</h4>
												</li>
												<li class="compare-product">
													<a
														href="/html/molla/index-14.html#"
														class="btn-remove"
														title="Remove Product"
													>
														<i class="icon-close"></i>
													</a>
													<h4 class="compare-product-title">
														<a href="#">White Long Skirt</a>
													</h4>
												</li>
											</ul>
											<div class="compare-actions">
												<a href="#" class="action-link">
													Clear All
												</a>
												<a href="#" class="btn btn-outline-primary-2">
													<span>Compare</span>
													<i class="icon-long-arrow-right"></i>
												</a>
											</div>
										</div>
									</div>

									<a href="" class="wishlist-link">
										<i class="icon-heart-o"></i>
										<span class="wishlist-count">3</span>
										<span class="wishlist-txt">Wishlist</span>
									</a>
									<div class="dropdown cart-dropdown">
										<a
											href="#"
											class="dropdown-toggle"
											role="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
											data-display="static"
										>
											<i class="icon-shopping-cart"></i>
											<span class="cart-count">2</span>
											<span class="cart-txt">Cart</span>
										</a>
										<div class="dropdown-menu dropdown-menu-right">
											<div class="dropdown-cart-products">
												<div class="product">
													<div class="product-cart-details">
														<h4 class="product-title">
															<a href="#">Beige knitted elastic runner shoes</a>
														</h4>
														<span class="cart-product-info">
															<span class="cart-product-qty">1</span>x $84.00
														</span>
													</div>

													<figure class="product-image-container">
														<a href="#" class="product-image">
															<img
																src="./Molla - Bootstrap eCommerce Template-7_files/product-1.jpg"
																alt="product"
															/>
														</a>
													</figure>
													<a href="#" class="btn-remove" title="Remove Product">
														<i class="icon-close"></i>
													</a>
												</div>

												<div class="product">
													<div class="product-cart-details">
														<h4 class="product-title">
															<a href="#">Blue utility pinafore denim dress</a>
														</h4>
														<span class="cart-product-info">
															<span class="cart-product-qty">1</span>x $76.00
														</span>
													</div>

													<figure class="product-image-container">
														<a href="#" class="product-image">
															<img
																src="./Molla - Bootstrap eCommerce Template-7_files/product-2.jpg"
																alt="product"
															/>
														</a>
													</figure>
													<a href="#" class="btn-remove" title="Remove Product">
														<i class="icon-close"></i>
													</a>
												</div>
											</div>

											<div class="dropdown-cart-total">
												<span>Total</span>
												<span class="cart-total-price">$160.00</span>
											</div>

											<div class="dropdown-cart-action">
												<a href="#" class="btn btn-primary">
													View Cart
												</a>
												<a href="#" class="btn btn-outline-primary-2">
													<span>Checkout</span>
													<i class="icon-long-arrow-right"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row d-xl-none d-lg-block">
				<div className="col-lg-2">
					<div>
						<form
							action="/html/molla/index-14.html#"
							method="get"
							class="mobile-search"
						>
							<label for="mobile-search" class="sr-only">
								Search
							</label>
							<input
								type="search"
								class="form-control"
								name="mobile-search"
								id="mobile-search"
								placeholder="Search in..."
								required=""
							/>
							<button class="btn btn-primary btn-search" type="submit">
								<i class="icon-search"></i>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MiddleHeader;
