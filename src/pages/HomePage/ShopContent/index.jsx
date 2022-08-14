import React, { useState } from 'react';
import Banners from './Banners';
import Brands from './Brands';
import Men from './Products/Men';
import All from './Products/All';
import Shipping from './Products/Shipping';
import Women from './Products/Women';
import Beauty from './Products/Beauty';
import Accessories from './Products/Accessories';
import SideBar from './SideBar';
import ProductsBanner from './Products/Banners';
import LoadSpinner from '../../../components/Spinner';
import Signup from '../../../components/Layout/Footer/Signup';

const ShopContent = ({ products }) => {
	const [currentTab, setCurrentTab] = useState('all');

	const renderView = () => {
		if (currentTab === 'all') {
			return <All products={products} />;
		}
		if (currentTab === 'men') {
			return <Men products={products} />;
		}
		if (currentTab === 'women') {
			return <Women products={products} />;
		}
		if (currentTab === 'accessories') {
			return <Accessories products={products} />;
		}
		if (currentTab === 'beauty') {
			return <Beauty products={products} />;
		}
	};

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
										style={{ pointer: 'cursor' }}
										id="trending-all-link"
										data-toggle="tab"
										role="tab"
										aria-controls="trending-all-tab"
										aria-selected="true"
										onClick={() => setCurrentTab('all')}
									>
										All
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="trending-elec-link"
										data-toggle="tab"
										role="tab"
										aria-controls="trending-elec-tab"
										aria-selected="false"
										onClick={() => setCurrentTab('men')}
									>
										Men
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="trending-furn-link"
										data-toggle="tab"
										role="tab"
										aria-controls="trending-furn-tab"
										aria-selected="false"
										onClick={() => setCurrentTab('women')}
									>
										Women
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="trending-cloth-link"
										data-toggle="tab"
										role="tab"
										aria-controls="trending-cloth-tab"
										aria-selected="false"
										onClick={() => setCurrentTab('accessories')}
									>
										Accessories
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="trending-acc-link"
										data-toggle="tab"
										role="tab"
										aria-controls="trending-acc-tab"
										aria-selected="false"
										onClick={() => setCurrentTab('beauty')}
									>
										Beauty
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{products && products.length > 0 ? renderView() : <LoadSpinner />}
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
