import React from 'react';
import BreadCrumb from '../../components/Breadcrumb';
import TopHeader from '../../components/Layout/TopHeader';
import MiddleHeader from '../../components/Layout/MiddleHeader';
import FooterMiddle from '../../components/Layout/Footer/FooterMiddle';
import FooterBottom from '../../components/Layout/Footer/FooterBottom';
import CartInfo from './CartInfo';

const CartPage = () => {
	return (
		<div className="page-wrapper">
			<header class="header header-14">
				<TopHeader />
				<MiddleHeader />
			</header>
			<main className="main">
				<div class="mb-lg-2"></div>
				<BreadCrumb />
				<div class="cart">
					<div class="container">
						<CartInfo />
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

export default CartPage;
