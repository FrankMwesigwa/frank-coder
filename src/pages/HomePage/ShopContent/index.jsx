import React from 'react';
import Banners from './Banners';
import Brands from './Brands';
import Men from './Products/Men';
import Shipping from './Products/Shipping';
import Women from './Products/Women';
import SideBar from './SideBar';
import ProductsBanner from './Products/Banners';
import Signup from '../../../components/Layout/Footer/Signup';

const ShopContent = () => {
	return (
		<div class="row">
			<div class="col-xl-9 col-xxl-10">
				<div class="row">
					<Banners />
				</div>
				<div class="mb-2"></div>
				<Brands />

				<div class="bg-lighter trending-products">
					<div class="heading heading-flex mb-3">
						<div class="heading-left">
							<h2 class="title">Trending Today</h2>
						</div>

						<div class="heading-right">
							<ul class="nav nav-pills justify-content-center" role="tablist">
								<li class="nav-item">
									<a
										class="nav-link active"
										id="trending-all-link"
										data-toggle="tab"
										href="html/molla/index-14.html#trending-all-tab"
										role="tab"
										aria-controls="trending-all-tab"
										aria-selected="true"
									>
										All
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="trending-elec-link"
										data-toggle="tab"
										href="html/molla/index-14.html#trending-elec-tab"
										role="tab"
										aria-controls="trending-elec-tab"
										aria-selected="false"
									>
										Men
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="trending-furn-link"
										data-toggle="tab"
										href="html/molla/index-14.html#trending-furn-tab"
										role="tab"
										aria-controls="trending-furn-tab"
										aria-selected="false"
									>
										Women
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="trending-cloth-link"
										data-toggle="tab"
										href="html/molla/index-14.html#trending-cloth-tab"
										role="tab"
										aria-controls="trending-cloth-tab"
										aria-selected="false"
									>
										Accessories
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="trending-acc-link"
										data-toggle="tab"
										href="html/molla/index-14.html#trending-acc-tab"
										role="tab"
										aria-controls="trending-acc-tab"
										aria-selected="false"
									>
										Beauty
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<Men />
				<Women />

				<div class="row">
					<ProductsBanner />
				</div>
				<div class="icon-boxes-container">
					<Shipping />
				</div>
			</div>

			<aside class="col-xl-3 col-xxl-2 order-xl-first">
				<SideBar />
			</aside>
		</div>
	);
};

export default ShopContent;
