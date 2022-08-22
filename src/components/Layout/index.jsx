import React from 'react';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import HeaderMain from './HeaderMain';
import Signup from './Footer/Signup';
import FooterMiddle from './Footer/FooterMiddle';
import FooterBottom from './Footer/FooterBottom';

import './'

const Layout = ({ children }) => {
	return (
		<div className="layout-container">

			<TopHeader />
			<MiddleHeader />

				
				<HeaderMain />
			<main className="layout-main">
				<div class=""></div>
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
