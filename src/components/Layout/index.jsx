import React from 'react';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import HeaderMain from './HeaderMain';
import Signup from './Footer/Signup';
import FooterMiddle from './Footer/FooterMiddle';
import FooterBottom from './Footer/FooterBottom';

const Layout = ({ children }) => {
	return (
		<div className="page-wrapper">
			<header class="header header-14">
				<TopHeader />
				<MiddleHeader />
				<HeaderMain />
			</header>
			<main className="main">
				<div class="mb-lg-2"></div>
				{children}
			</main>
			<footer className="footer">
				
				<FooterMiddle />
				<FooterBottom />
			</footer>
			{/* <MenuBottom /> */}
		</div>
	);
};

export default Layout;
