import React from 'react';

const CategoryMenu = () => {
	return (
		<div className="dpt-menu">
			<ul className="second-links">
				<li className="has-child beauty">
					<a href="#">
						<div className="icon-large">
							<i className="ri-bear-smile-line"></i>
						</div>
						Beauty
						<div className="icon-small">
							<i className="ri-arrow-right-s-line"></i>
						</div>
					</a>
					<ul>
						<li>
							<a href="#"></a>Makeup
						</li>
						<li>
							<a href="#"></a>Skin Care
						</li>
						<li>
							<a href="#">Hair Care</a>
						</li>
						<li>
							<a href="#">Fragrance</a>
						</li>
						<li>
							<a href="#">Shave and Hair Removal</a>
						</li>
						<li>
							<a href="#">Pesronal Care</a>
						</li>
					</ul>
				</li>
				<li className="has-child men">
					<a href="#">
						<div className="icon-large">
							<i className="ri-t-shirt-air-line"></i>
						</div>
						Men's Fashion
						<div className="icon-small">
							<i className="ri-arrow-right-s-line"></i>
						</div>
					</a>
					<ul>
						<li>
							<a href="#"></a>Makeup
						</li>
						<li>
							<a href="#"></a>Skin Care
						</li>
						<li>
							<a href="#">Hair Care</a>
						</li>
						<li>
							<a href="#">Fragrance</a>
						</li>
						<li>
							<a href="#">Shave and Hair Removal</a>
						</li>
						<li>
							<a href="#">Pesronal Care</a>
						</li>
					</ul>
				</li>
				<li className="has-child fashion">
					<a href="#">
						<div className="icon-large">
							<i className="ri-shirt-line"></i>
						</div>
						Women's Fashion
						<div className="icon-small">
							<i className="ri-arrow-right-s-line"></i>
						</div>
					</a>
					<ul>
						<li>
							<a href="#"></a>Makeup
						</li>
						<li>
							<a href="#"></a>Skin Care
						</li>
						<li>
							<a href="#">Hair Care</a>
						</li>
						<li>
							<a href="#">Fragrance</a>
						</li>
						<li>
							<a href="#">Shave and Hair Removal</a>
						</li>
						<li>
							<a href="#">Pesronal Care</a>
						</li>
					</ul>
				</li>
				<li className="has-child accessories">
					<a href="#">
						<div className="icon-large">
							<i className="ri-user-6-line"></i>
						</div>
						Accessories
						<div className="icon-small">
							<i className="ri-arrow-right-s-line"></i>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
						<div className="icon-large">
							<i className="ri-heart-pulse-line"></i>
						</div>
						Boy's Fashion
					</a>
				</li>
				<li>
					<a href="#">
						<div className="icon-large">
							<i className="ri-bear-smile-line"></i>
						</div>
						Baby's Fashion
					</a>
				</li>
			</ul>
		</div>
	);
};

export default CategoryMenu;
