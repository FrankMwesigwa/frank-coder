import React, { useEffect, useState } from 'react';
import API from "../../helpers/api";
import BreadCrumb from '../../components/Breadcrumb';
import TopHeader from '../../components/Layout/TopHeader';
import MiddleHeader from '../../components/Layout/MiddleHeader';
import FooterMiddle from '../../components/Layout/Footer/FooterMiddle';
import FooterBottom from '../../components/Layout/Footer/FooterBottom';
import DetailsTop from './DetailsTop';
import DetailsTab from './DetailsTab';
import RelatedProducts from './RelatedProducts';

const ProductDetails = ({ match }) => {
	let productId = match.params.id;

	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);

	const loadProduct = async () => {
		setLoading(true);
		try {
			const res = await API.get(`/product/prod/${productId}`);
			setProduct(res.data);
			setLoading(false);
			console.log('Product Fetch Backend ===>', product);
		} catch (error) {
			setLoading(false);
		}
	};

	useEffect(() => {
		loadProduct();
		window.scrollTo(0, 0);
	}, [productId]);

	return (
		<div className="page-wrapper">
			<header class="header header-14">
				<TopHeader />
				<MiddleHeader />
			</header>
			<main className="main">
				<div class="mb-lg-2"></div>
				<BreadCrumb />
				<div class="page-content">
					<div class="container">
						<DetailsTop product={product} />
						<DetailsTab />
						{/* <h2 class="title text-center mb-4">You May Also Like</h2>
						<RelatedProducts /> */}
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
