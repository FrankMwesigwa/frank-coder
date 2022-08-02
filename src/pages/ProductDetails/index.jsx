import React from 'react';
import BreadCrumb from '../../components/Breadcrumb';
import TopHeader from '../../components/Layout/TopHeader';
import MiddleHeader from '../../components/Layout/MiddleHeader';
import HeaderMain from '../../components/Layout/HeaderMain';
import FooterMiddle from '../../components/Layout/Footer/FooterMiddle';
import FooterBottom from '../../components/Layout/Footer/FooterBottom';
import DetailsTop from './DetailsTop';
import DetailsTab from './DetailsTab';
import RelatedProducts from './RelatedProducts';

const ProductDetails = () => {
	return (
		<div className="page-wrapper">
			<header class="header header-14">
				<TopHeader />
				<MiddleHeader />
				{/* <HeaderMain /> */}
			</header>
			<main className="main">
				<div class="mb-lg-2"></div>
				<BreadCrumb />
				<div class="page-content">
					<div class="container">
						<DetailsTop />
						<DetailsTab />
						<h2 class="title text-center mb-4">You May Also Like</h2>
						<RelatedProducts />
					</div>
				</div>
			</main>
			<footer className="footer">
				<FooterMiddle />
				<FooterBottom />
			</footer>
			{/* <MenuBottom /> */}
		</div>
	);
};

export default ProductDetails;
