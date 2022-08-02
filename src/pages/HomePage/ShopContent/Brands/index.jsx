import React from 'react';

const Brands = () => {
	return (
		<div
			class="owl-carousel owl-simple brands-carousel owl-loaded owl-drag">
			<div class="owl-stage-outer">
				<div
					class="owl-stage"
					style={{
						transform: 'translate3d(0px, 0px, 0px)',
						transition: 'all 0s ease 0s',
						width: '1159px',
					}}
				>
					<div
						class="owl-item active"
						style={{ width: '145.45px', marginRight: '20px' }}
					>
						<a href="html/molla/index-14.html#" class="brand">
							<img src="images/boss.png" alt="Brand Name" />
						</a>
					</div>
					<div
						class="owl-item active"
						style={{ width: '145.45px', marginRight: '20px' }}
					>
						<a href="html/molla/index-14.html#" class="brand">
							<img src="images/zara.png" alt="Brand Name" />
						</a>
					</div>
					<div
						class="owl-item active"
						style={{ width: '145.45px', marginRight: '20px' }}
					>
						<a href="html/molla/index-14.html#" class="brand">
							<img src="images/vogue.png" alt="Brand Name" />
						</a>
					</div>
					<div
						class="owl-item active"
						style={{ width: '145.45px', marginRight: '20px' }}
					>
						<a href="html/molla/index-14.html#" class="brand">
							<img src="images/gucci.png" alt="Brand Name" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brands;
