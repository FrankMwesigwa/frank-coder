import React from 'react';

const BreadCrumb = () => {
	return (
		<nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
			<div class="container d-flex align-items-center">
				<ol class="breadcrumb">
					<li class="breadcrumb-item">
						<a href="#">Home</a>
					</li>
					<li class="breadcrumb-item">
						<a href="#">
							Products
						</a>
					</li>
					<li class="breadcrumb-item active" aria-current="page">
						Default
					</li>
				</ol>

				<nav class="product-pager ml-auto" aria-label="Product">
					<a
						class="product-pager-link product-pager-prev"
						href="#"
						aria-label="Previous"
						tabindex="-1"
					>
						<i class="icon-angle-left"></i>
						<span>Prev</span>
					</a>

					<a
						class="product-pager-link product-pager-next"
						href="#"
						aria-label="Next"
						tabindex="-1"
					>
						<span>Next</span>
						<i class="icon-angle-right"></i>
					</a>
				</nav>
			</div>
		</nav>
	);
};

export default BreadCrumb;
