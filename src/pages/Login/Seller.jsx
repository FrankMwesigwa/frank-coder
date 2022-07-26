import React from 'react';

const Seller = () => {
	return (
		<div class="form-box">
			<div class="form-tab">
				<div class="tab-content">
					<div
						class="tab-pane fade active show"
						id="signin"
						role="tabpanel"
						aria-labelledby="signin-tab"
					>
						<form action="#">
							<div class="form-group">
								<label for="register-email">Your email address *</label>
								<input
									type="email"
									class="form-control"
									id="register-email"
									name="register-email"
									required=""
								/>
							</div>

							<div class="form-group">
								<label for="register-password">Password *</label>
								<input
									type="password"
									class="form-control"
									id="register-password"
									name="register-password"
									required=""
								/>
							</div>

							<div class="form-group">
								<label for="register-password">Full Names *</label>
								<input
									type="text"
									class="form-control"
									id="register-password"
									name="register-password"
									required=""
								/>
							</div>

							<div class="form-group">
								<label for="register-password">Phonenumber *</label>
								<input
									type="text"
									class="form-control"
									id="register-password"
									name="register-password"
									required=""
								/>
							</div>

							<div class="form-footer">
								<button type="submit" class="btn btn-outline-primary-2">
									<span>SIGN UP</span>
									<i class="icon-long-arrow-right"></i>
								</button>

								<div class="custom-control custom-checkbox">
									<input
										type="checkbox"
										class="custom-control-input"
										id="register-policy"
										required=""
									/>
									<label class="custom-control-label" for="register-policy">
										I agree to the <a href="#">privacy policy</a> *
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Seller;
