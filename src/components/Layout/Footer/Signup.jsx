import React from 'react';

const Signup = () => {
	return (
		<div
			class="cta cta-horizontal cta-horizontal-box bg-dark bg-image"
		>
			<div class="container-fluid">
				<div class="row align-items-center">
					<div class="col-xl-9 offset-xl-2">
						<div class="row align-items-center">
							<div class="col-lg-5 cta-txt">
								<h3 class="cta-title text-primary">Join Our Newsletter</h3>

								<p class="cta-desc text-light">
									Subcribe to get information about products and coupons
								</p>
							</div>

							<div class="col-lg-7">
								<form action="/html/molla/index-14.html#">
									<div class="input-group">
										<input
											type="email"
											class="form-control"
											placeholder="Enter your Email Address"
											aria-label="Email Adress"
											required=""
										/>
										<div class="input-group-append">
											<button class="btn" type="submit">
												Subscribe
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
