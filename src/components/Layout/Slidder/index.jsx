import React from 'react';
import './styles.css';

const Slidder = () => {
	return (
		<div className="slider">
			<div className="container">
				<div className="wrapper">
					<div className="myslider">
						<div className="wrapper">
							<div className="slide">
								<div className="item">
									<div className="image object-cover">
										<img src="images/banner1.jpg" alt="" />
									</div>
									{/* <div className="text-content flexcol">
										<h4>Shoes Fashion</h4>
										<h2>
											<span>Come and get it !</span>
											<br />
											<span>Brand New Shoes</span>
										</h2>
										<a href="" className="primary-button">
											Shop Now
										</a>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slidder;
