import React from 'react';
import './styles.css';

const Categories = () => {
	return (
		<div className="product-categories flexwrap">
			<div className="row">
				<div className="item">
					<div className="image">
						<img src="images/men.jpg" alt="" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="item">
					<div className="image">
						<img src="images/women.jpg" alt="" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="item">
					<div className="image">
						<img src="images/beauty.jpg" alt="" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="item">
					<div className="image">
						<img src="images/accessory.jpg" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
