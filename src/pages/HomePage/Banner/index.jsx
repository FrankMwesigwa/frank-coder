import React from 'react';

const Banner = () => {
	return (
		<div class="row">
			<div class="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
				<div class="mb-2">
					<div class="intro-slide">
						<figure class="slide-imag">
							<picture>
								<source
									media="(max-width: 480px)"
									srcset="images/banner1.jpg"
								/>
								<img src="images/banner1.jpg" alt="Image Desc" />
							</picture>
						</figure>
						{/* <div class="intro-content">
											<h3 class="intro-subtitle">Hottest Deals</h3>
											<h1 class="intro-title">
												<span>Wherever You Go</span> <br />
												DJI Mavic 2 Pro
											</h1>
											<div class="intro-price">
												<sup>from</sup>
												<span>
													$1,948<sup>.99</sup>
												</span>
											</div>
											<a
												href="html/molla/category.html"
												class="btn btn-primary"
											>
												<span>Discover Here</span>
												<i class="icon-long-arrow-right"></i>
											</a>
										</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
