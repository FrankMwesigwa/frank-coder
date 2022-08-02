import React from 'react';
import BannerSlider from './Banner';
import ShopContent from './ShopContent';
import TopHeader from '../../components/Layout/TopHeader';
import MiddleHeader from '../../components/Layout/MiddleHeader';
import HeaderMain from '../../components/Layout/HeaderMain';
import Signup from '../../components/Layout/Footer/Signup';
import FooterMiddle from '../../components/Layout/Footer/FooterMiddle';
import FooterBottom from '../../components/Layout/Footer/FooterBottom';

const HomePage = () => {
	return (
		<div className="page-wrapper">
			<header class="header header-14">
				<TopHeader />
				<MiddleHeader />
				<HeaderMain />
			</header>
			<main className="main">
				<div class="mb-lg-2"></div>
				<div class="container-fluid">
					<BannerSlider />
				</div>
				<div class="container-fluid">
					<ShopContent />
				</div>
			</main>
			<footer className="footer">
				<Signup />
				<FooterMiddle />
				<FooterBottom />
			</footer>
			{/* <MenuBottom /> */}
		</div>
	);
};

export default HomePage;
