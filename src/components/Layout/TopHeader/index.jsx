import React from 'react';

const TopHeader = () => {
	return (
		<div class="header-top d-none d-lg-block">
			<div class="container">
				<div class="header-left">
					<a href="tel:#">
						<i class="ri-phone-line icon-phone"></i>Call: +256 779 825 056
					</a>
				</div>

				<div class="header-right">
					<ul class="top-menu">
						<li>
							<a href="#">Links</a>
							<ul class="menus">
								<li>
									<div class="header-dropdown">
										<a href="#">
											Currency
											<i class="ri-arrow-down-s-line arrow-down"></i>
										</a>
										<div class="header-menu">
											<ul>
												<li>
													<a href="#">Eur</a>
												</li>
												<li>
													<a href="#">Usd</a>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
									<div class="header-dropdown">
										<a href="#">
											Language
											<i class="ri-arrow-down-s-line arrow-down"></i>
										</a>
										<div class="header-menu">
											<ul>
												<li>
													<a href="#">English</a>
												</li>
												<li>
													<a href="#">French</a>
												</li>
												<li>
													<a href="#">Spanish</a>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li class="login">
									<a href="#signin-modal" data-toggle="modal">
										Sign in / Sign up
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TopHeader;
