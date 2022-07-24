import React from 'react';
import './styles.css';

const Banners = () => {
	return (
		<div className="banners">
			<div className="container">
				<div className="wrapper">
					<div className="column">
						<div className="banner flexwrap">
							<div className="row get-gray">
								<div className="item">
									<div className="image">
										<img src="images/slidder-2.jpg" alt="" />
									</div>
									<div className="text-content flexcol">
										<h3>Brutal Sale</h3>
										<h4>
											<span className='deal'>Get the deal here</span>
                                            <br />
											Office Outfit
										</h4>
										<a href="" className="primary-button">
											Shop Now
										</a>
									</div>
									<a href="" className="over-link"></a>
								</div>
							</div>
							<div className="row get-gray">
								<div className="item ">
									<div className="image">
										<img src="images/slidder-1.jpg" alt="" />
									</div>
									<div className="text-content flexcol">
										<h3>Brutal Sale</h3>
										<h4>
											<span className='deal'>Discount every day</span>
											<br />
											Office Outfit
										</h4>
										<a href="" className="primary-button">
											Shop Now
										</a>
									</div>
									<a href="" className="over-link"></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banners;
