import React from 'react';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import './styles.css';
import HeaderMain from './HeaderMain';
import Slidder from './Slidder';
import Brands from './Brands';
import Trending from './Trending';
import Features from './Features';
import Banners from './Banners';
import Categories from './Categories';
import NewsLetter from './NewsLetter';

const Layout = () => {
	return (
		<div id="page" className="site">
			<header>
				<TopHeader />
				<MiddleHeader />
				<HeaderMain />
			</header>
			<main>
				<Slidder />
				<Brands />
				<Trending />
				<Features />
				<Banners />
				<Categories />
			</main>
			<footer>
                <NewsLetter />
				{/* <Footer /> */}
			</footer>
		</div>
	);
};

export default Layout;
