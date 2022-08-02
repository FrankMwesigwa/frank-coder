import React from 'react';

const DetailsTop = () => {
	return (
		<div class="product-details-top">
			<div class="row">
				<div class="col-md-6">
					<div class="product-gallery product-gallery-vertical">
						<div class="row">
							<figure class="product-main-image">
								<img
									id="product-zoom"
									src="images/015.jpg"
									data-zoom-image="images/015.jpg"
									alt="product image"
								/>

								<a
									href="#"
									id="btn-product-gallery"
									class="btn-product-gallery"
								>
									<i class="icon-arrows"></i>
								</a>
							</figure>

							<div id="product-zoom-gallery" class="product-image-gallery">
								<a
									class="product-gallery-item active"
									href="#"
									data-image="images/013.jpg"
									data-zoom-image="images/013.jpg"
								>
									<img src="images/013.jpg" alt="product side" />
								</a>

								<a
									class="product-gallery-item"
									href="#"
									data-image="images/013.jpg"
									data-zoom-image="images/013.jpg"
								>
									<img src="images/013.jpg" alt="product cross" />
								</a>

								<a
									class="product-gallery-item"
									href="#"
									data-image="images/013.jpg"
									data-zoom-image="images/013.jpg"
								>
									<img src="images/013.jpg" alt="product with model" />
								</a>

								<a
									class="product-gallery-item"
									href="#"
									data-image="images/013.jpg"
									data-zoom-image="images/013.jpg"
								>
									<img src="images/013.jpg" alt="product back" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-6">
					<div class="product-details">
						<h1 class="product-title">Dark yellow lace cut out swing dress</h1>

						<div class="ratings-container">
							<div class="ratings">
								<div class="ratings-val" style={{ width: '80%' }}></div>
							</div>
							<a
								class="ratings-text"
								href="#product-review-link"
								id="review-link"
							>
								( 2 Reviews )
							</a>
						</div>

						<div class="product-price">840,000</div>

						<div class="product-content">
							<p>
								Sed egestas, ante et vulputate volutpat, eros pede semper est,
								vitae luctus metus libero eu augue. Morbi purus libero, faucibus
								adipiscing. Sed lectus.{' '}
							</p>
						</div>

						<div class="details-filter-row details-row-size">
							<label>Color:</label>

							<div class="product-nav product-nav-thumbs">
								<a href="#" class="active">
									<img src="images/013.jpg" alt="product desc" />
								</a>
								<a href="#">
									<img src="images/013.jpg" alt="product desc" />
								</a>
							</div>
						</div>

						<div class="details-filter-row details-row-size">
							<label for="size">Size:</label>
							<div class="select-custom">
								<select name="size" id="size" class="form-control">
									<option value="#" selected="selected">
										Select a size
									</option>
									<option value="s">Small</option>
									<option value="m">Medium</option>
									<option value="l">Large</option>
									<option value="xl">Extra Large</option>
								</select>
							</div>

							<a href="#" class="size-guide">
								<i class="icon-th-list"></i>size guide
							</a>
						</div>

						<div class="details-filter-row details-row-size">
							<label for="qty">Qty:</label>
							<div class="product-details-quantity">
								<input
									type="number"
									id="qty"
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
						</div>

						<div class="product-details-action">
						

							<div class="details-action-wrapper">
                            <a href="#" class="btn-product btn-cart">
								<span>add to cart</span>
							</a>
								<a href="#" class="btn-product btn-wishlist" title="Wishlist">
									<span>Add to Wishlist</span>
								</a>
							</div>
						</div>

						<div class="product-details-footer">
							<div class="product-cat">
								<span>Category:</span>
								<a href="#">Women</a>,<a href="#">Dresses</a>,
								<a href="#">Yellow</a>
							</div>

							<div class="social-icons social-icons-sm">
								<span class="social-label">Share:</span>
								<a
									href="#"
									class="social-icon"
									title="Facebook"
									target="_blank"
								>
									<i class="icon-facebook-f"></i>
								</a>
								<a href="#" class="social-icon" title="Twitter" target="_blank">
									<i class="icon-twitter"></i>
								</a>
								<a
									href="#"
									class="social-icon"
									title="Instagram"
									target="_blank"
								>
									<i class="icon-instagram"></i>
								</a>
								<a
									href="#"
									class="social-icon"
									title="Pinterest"
									target="_blank"
								>
									<i class="icon-pinterest"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsTop;
