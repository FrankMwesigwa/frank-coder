import React, { useState } from 'react';
import Modal from '../../../components/ModalBox';
import LoginPage from '../../../pages/Login';
import Register from '../../../pages/Login/Register';
import SellerPage from '../../../pages/Login/Seller.jsx';

const TopHeader = () => {
	const [user, setUser] = useState(true);
	const [signIn, setSignIn] = useState(false);
	const [seller, setSeller] = useState(false);
	const [register, setRegister] = useState(false);

	const signInModal = () => setSignIn(!signIn);
	const registerModal = () => setRegister(!register);
	const sellerModal = () => setSeller(!seller);

	// const user = JSON.parse(localStorage.getItem('customer'));

	return (
		<div class="header-top">
			<div class="container">
				<div class="header-left">
					<button onClick={sellerModal}>Register As a Seller</button>
				</div>

				<div class="header-right">
					{user ? (
						<button class="login" onClick={signInModal}>
							Customer Login
						</button>
					) : (
						<button class="login" onClick={registerModal}>
							Customer Register
						</button>
					)}
					{/* {user && user.accessToken && <button class="login">LogOut</button>}
					{user && !user.accessToken && (
						<>
							<button class="login" onClick={signInModal}>
								Login
							</button>
							<button class="login" onClick={registerModal}>
								Register
							</button>
						</>
					)} */}
				</div>
				<Modal open={signInModal} modal={signIn} title="Customer Login">
					<LoginPage close={signInModal} />
				</Modal>
				<Modal
					open={registerModal}
					modal={register}
					title="Customer Registration"
				>
					<Register close={registerModal} />
				</Modal>
				<Modal open={sellerModal} modal={seller} title="Seller Registration">
					<SellerPage close={sellerModal} />
				</Modal>
			</div>
		</div>
	);
};

export default TopHeader;
