import React from 'react';

const NewsLetter = () => {
	return (
		<div className="newsletter">
			<div className="container">
				<div className="wrapper">
					<div className="box">
						<div className="content">
							<h3>Join our NewsLetter</h3>
							<p>
								Get email updates about our lastest clothing offering and{' '}
								<strong>special offers</strong>
							</p>
						</div>
						<form action="" className="search">
							<span className="icon-large">
								<i className="ri-mail-line"></i>
							</span>
							<input type="mail" placeholder="your email address" required/>
                            <button type='submit'>Sign up</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
