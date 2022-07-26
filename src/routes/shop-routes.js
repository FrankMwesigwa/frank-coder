import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Layout from '../components/Layout';

const Login = lazy(() => import('../pages/Login'));
const HomePage = lazy(() => import('../pages/HomePage'));
const CartPage = lazy(() => import('../pages/Cart'));
const Checkout = lazy(() => import('../pages/Checkout'));
const WishList = lazy(() => import('../pages/WishList'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));

const ShopRoutes = () => (
	<Suspense
		fallback={
			<div>
				<Spinner />
			</div>
		}
	>
		<Switch>
			{/* <Route exact path="/login" component={Login} /> */}
			<Route exact path="/" component={HomePage} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/cart" component={CartPage} />
			<Route exact path="/checkout" component={Checkout} />
			<Route exact path="/wishlist" component={WishList} />
			<Route exact path="/product/:id" component={ProductDetails} />
		</Switch>
	</Suspense>
);

export default ShopRoutes;
