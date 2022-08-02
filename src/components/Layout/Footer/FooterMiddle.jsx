import React from 'react';

const FooterMiddle = () => {
	return (
		<div class="footer-middle border-0">
			<div class="container-fluid">
				<div class="row">
					<div class="col">
						<div class="widget widget-about">
							<p>
								inthing is an African e-commerce company focused on handmade or
								tailored items and craft supplies. These items fall under a wide
								range of categories, including jewelry, bags, clothing, home
								décor and furniture, toys, art, as well as craft supplies and
								tools. We are giving sellers personal storefronts where they
								list their goods.
							</p>
							<div class="widget-about-info">
								<div class="row">
									<div class="col-sm-6 col-md-4">
										<span class="widget-about-title">
											Got Question? Call us 24/7
										</span>
										<a href="tel:123456789">+256 779 825 056</a>
									</div>

									<div class="col-sm-6 col-md-8">
										<span class="widget-about-title">Payment Method</span>
										<figure class="footer-payments">
											<img
												src="images/payments.png"
												alt="Payment methods"
												width="265"
												height="20"
											/>
										</figure>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-3 col-lg-2">
						<div class="widget">
							<h4 class="widget-title">Useful Links</h4>

							<ul class="widget-list">
								<li>
									<a href="/molla/about.html">About inthing</a>
								</li>
								<li>
									<a href="/molla/index-14.html#">How to shop on inthing</a>
								</li>
								<li>
									<a href="/molla/faq.html">FAQ</a>
								</li>
								<li>
									<a href="/molla/contact.html">Contact us</a>
								</li>
								<li>
									<a href="/molla/login.html">Log in</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-sm-3 col-lg-2">
						<div class="widget">
							<h4 class="widget-title">Customer Service</h4>

							<ul class="widget-list">
								<li>
									<a href="/molla/index-14.html#">Payment Methods</a>
								</li>
								<li>
									<a href="/molla/index-14.html#">Returns</a>
								</li>
								<li>
									<a href="/molla/index-14.html#">Shipping</a>
								</li>
								<li>
									<a href="/molla/index-14.html#">Terms and conditions</a>
								</li>
								<li>
									<a href="/molla/index-14.html#">Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-sm-3 col-lg-2">
						<div class="widget">
							<h4 class="widget-title">My Account</h4>

							<ul class="widget-list">
								<li>
									<a href="/molla/index-14.html#">Sign In</a>
								</li>
								<li>
									<a href="/molla/cart.html">View Cart</a>
								</li>
								<li>
									<a href="/molla/index-14.html#">My Wishlist</a>
								</li>
								<li>
									<a href="/molla/index-14.html#">Track My Order</a>
								</li>
								<li>
									<a href="/molla/index-14.html#">Help</a>
								</li>
							</ul>
						</div>
					</div>

					{/* <div class="col-sm-4 col-lg-2">
						<div class="widget widget-newsletter">
							<h4 class="widget-title">Sign Up to Newsletter</h4>

							<p>
								Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.
							</p>
							<form action="/molla/index-14.html#">
								<div class="input-group">
									<input
										type="email"
										class="form-control"
										placeholder="Enter your Email Address"
										aria-label="Email Adress"
										required=""
									/>
									<div class="input-group-append">
										<button class="btn btn-dark" type="submit">
											<i class="icon-long-arrow-right"></i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default FooterMiddle;
