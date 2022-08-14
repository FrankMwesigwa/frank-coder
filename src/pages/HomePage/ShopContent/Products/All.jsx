import React from 'react';
import ProductCard from '../../../../components/Product';
import LoadSpinner from '../../../../components/Spinner';

const All = ({ products }) => {
	return (
		<div class="products">
			<div class="row justify-content-center">
				{products && products.length > 0 ? (
					<>
						{products.map((product) => (
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

export default All;
