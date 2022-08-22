import React, { useState } from 'react';
import Modal from '../../../components/ModalBox';
import LoginPage from '../../../pages/Login';
import Register from '../../../pages/Login/Register';
import SellerPage from '../../../pages/Login/Seller.jsx';

import './topheader.css';

const TopHeader = () => {
	const [signIn, setSignIn] = useState(false);
	const [seller, setSeller] = useState(false);
	const [register, setRegister] = useState(false);

	const signInModal = () => setSignIn(!signIn);
	const registerModal = () => setRegister(!register);
	const sellerModal = () => setSeller(!seller);

	const user = JSON.parse(localStorage.getItem('customer'));

	const logOut = () => {
		localStorage.clear();
		window.location.reload();
	};

	return (
		<div className="th-header">
			<div className="th-container">
				<div className="th-logo">
					<button className="th-btn-seller" onClick={sellerModal}>
						Sell on inthing
					</button>
				</div>
				<div className="th-items">
					{user ? (
						<button className="th-btn" onClick={logOut}>
							LogOut
						</button>
					) : (
						<>
							<button className="th-btn" onClick={registerModal}>
								Register
							</button>
							<button className="th-btn" onClick={signInModal}>
								Login
							</button>
						</>
					)}
				</div>
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
			<Modal open={sellerModal} modal={seller} title="Vendor Sign Up Form">
				<SellerPage close={sellerModal} />
			</Modal>
		</div>
	);
};

export default TopHeader;
