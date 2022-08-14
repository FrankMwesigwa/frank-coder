import React, { useState, useEffect } from 'react';
import API from "../../helpers/api";
import BannerSlider from './Banner';
import ShopContent from './ShopContent';
import LoadSpinner from '../../components/Spinner';
import TopHeader from '../../components/Layout/TopHeader';
import MiddleHeader from '../../components/Layout/MiddleHeader';
import HeaderMain from '../../components/Layout/HeaderMain';
import Signup from '../../components/Layout/Footer/Signup';
import FooterMiddle from '../../components/Layout/Footer/FooterMiddle';
import FooterBottom from '../../components/Layout/Footer/FooterBottom';

const HomePage = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const loadProducts = async () => {
		setLoading(true);
		try {
			const res = await API.get('/product');
			setProducts(res.data);
			setLoading(false);
			console.log('Products Fetch Backend ===>', products)
		} catch (error) {
			setLoading(false);
		}
	};

	useEffect(() => {
		loadProducts();
		// window.scrollTo(0, 0);
	}, []);

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
					<ShopContent products={products} />
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
