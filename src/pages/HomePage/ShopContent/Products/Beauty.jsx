import React from 'react';
import ProductCard from '../../../../components/Product';
import LoadSpinner from '../../../../components/Spinner';

const Beauty = ({ products }) => {
	const menproducts = products.filter((product) =>
		product.category ? product.category.category === 'Beauty' : ''
	);
	return (
		<div class="products">
			<div class="row justify-content-center">
				{products && products.length > 0 ? (
					<>
						{menproducts.map((product) => (
							<ProductCard product={product} />
						))}
					</>
				) : (
					<LoadSpinner />
				)}
			</div>
		</div>
	);
};

export default Beauty;
