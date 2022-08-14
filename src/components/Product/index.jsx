import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { generatePublicUrl } from '../../helpers/imageUrl';

const ProductCard = ({ product }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
//   const dispatch = useDispatch();

  const Msg = () => (
    <div>
      Product Added To Cart Successfully
      <Link to="/cart" className="pl-2">
        <button class="btn btn-sm btn-primary">Go To Cart</button>
      </Link>
    </div>
  );

  const Wish = () => (
    <div>
      Product Added To WishList Successfully
      <Link to="/wishList" className="pl-2">
        <button class="btn btn-sm btn-primary">Go To My WishList</button>
      </Link>
    </div>
  );

//   const checkWishList = (e) => {
//     e.preventDefault();
//     if (token) {
//       wishListHandler();
//     } else {
//       openModal();
//     }
//   };

//   const handleAddToCart = () => {
//     const cat = {
//       id: product._id,
//       title: product.title,
//       images: product.images[0].filename,
//       price: product.price,
//       discount: product.discount,
//       discountprice: product.discountprice,
//       quantity: 1,
//     };

//     dispatch(addToCart(cat));
//     toast.success(Msg);
//   };

//   const wishListHandler = () => {
//     setIsLoading(true);
//     const data = {
//       id: product._id,
//       title: product.title,
//       image: product.images[0].filename,
//       price: product.price,
//       phonenumber: phonenumber,
//       description: product.description,
//     };

//     dispatch(createWishList(data))
//       .then((res) => {
//         toast.success(Wish);
//         setIsLoading(false);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

	return (
		<div class="col-6 col-md-4 col-lg-3">
			<Link to="/product">
				<div class="product text-center">
					<figure class="product-media">
						<span class="product-label label-sale">Sale</span>
						<Link to="/product">
							<img
								src={
									product.images && product.images.length
										? generatePublicUrl(product.images[0].filename)
										: ''
								}
								alt="product image"
							/>
						</Link>
						<div class="product-action-vertical">
							<a
								href="#"
								class="btn-product-icon btn-wishlist"
								title="Add to wishlist"
							>
								<span>add to wishlist</span>
							</a>
							<a
								href="#"
								class="btn-product-icon btn-quickview"
								title="Quick view"
							>
								<span>Quick view</span>
							</a>
							<a href="#" class="btn-product-icon btn-compare" title="Compare">
								<span>Compare</span>
							</a>
						</div>

						<div class="product-action">
							<a href="#" class="btn-product btn-cart" title="Add to cart">
								<span>add to cart</span>
							</a>
						</div>
					</figure>

					<div class="product-body">
						<div class="product-cat">
							<a href="#">{product.category ? product.category.category : ''}</a>
						</div>

						<h3 class="product-title">
							<a href="#">{product.title}</a>
						</h3>

						<div class="product-price">
							{product.price ? <CurrencyFormat
								value={product.price}
								displayType="text"
								thousandSeparator
							/> : ''}
							
							{/* <span class="old-price">Was 290,000</span> */}
						</div>

						<div class="ratings-container">
							<div class="ratings">
								<div class="ratings-val" style={{ width: '100%' }}></div>
							</div>

							<span class="ratings-text">( 2 Reviews )</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
