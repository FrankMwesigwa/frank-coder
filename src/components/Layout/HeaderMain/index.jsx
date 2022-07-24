import React from 'react';
import CategoryMenu from './CategoryMenu';
import './styles.css';

const HeaderMain = () => {
	return (
		<div className="header-main mobile-hide">
			<div className="container">
				<div className="wrapper flexitem">
					<div className="left">
						<div className="dpt-cat">
							<div className="dpt-head">
								<div className="main-text">All Categories</div>
								<div className="mini-text mobile-hide">Total 1050 products</div>
								<a href="#" className="dpt-trigger mobile-hide">
									<i className="ri-menu-3-line ri-xl"></i>
								</a>
							</div>
							<CategoryMenu />
						</div>
					</div>
					<div className="right">
						<div className="search-box">
							<form action="" className="search">
								<span className="icon-large">
									<i className="ri-search-line"></i>
								</span>
								<input type="search" placeholder="search for products" />
								<button type="submit">Search</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderMain;
