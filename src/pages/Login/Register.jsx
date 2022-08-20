import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API from '../../helpers/api';
import LoadSpinner from '../../components/Spinner';

const Register = ({close}) => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [fullnames, setFullNames] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [loading, setLoading] = useState(false);

	const number = parseInt(phone, 10);
	const phonenumber = `+256${number}`;

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		const data = { email, password, fullnames, address, phonenumber };

		API.post('/customer/register', data)
			.then((res) => {
				console.log('Register Response Data ====>', res);
				if (res.data) {
					setLoading(false);
					setEmail('');
					setFullNames('');
					setPassword('');
					setPhone('');
					setAddress('');
					toast.success('Customer Registration Successful !!');
					close()
				}
			})
			.catch((err) => {
				console.log(err.message);
				setLoading(false);
				toast.error('Customer Registration Failed !!');
			});
	};

	return (
		<div class="form-box">
			<div class="form-tab">
				<div class="tab-content">
					<div
						class="tab-pane fade active show"
						id="signin"
						role="tabpanel"
						aria-labelledby="signin-tab"
					>
						<form onSubmit={handleSubmit}>
							<div class="form-group">
								<label for="register-email">Your email address *</label>
								<input
									type="email"
									class="form-control"
									name="register-email"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div class="form-group">
								<label for="register-password">Password *</label>
								<input
									type="password"
									class="form-control"
									id="register-password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>

							<div class="form-group">
								<label for="register-password">Full Names *</label>
								<input
									type="text"
									class="form-control"
									id="register-password"
									required
									value={fullnames}
									onChange={(e) => setFullNames(e.target.value)}
								/>
							</div>

							<div class="form-group">
								<label for="register-password">Phonenumber *</label>
								<input
									type="text"
									class="form-control"
									id="register-password"
									required
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>

							<div class="form-group">
								<label for="register-password">Address *</label>
								<input
									type="text"
									class="form-control"
									id="register-password"
									required
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>

							<div class="form-footer">
								<button type="submit" class="btn btn-outline-primary-2">
									<span>SIGN UP</span>
									<i class="icon-long-arrow-right"></i>
								</button>

								<div class="custom-control custom-checkbox">
									<input
										type="checkbox"
										class="custom-control-input"
										id="register-policy"
										required=""
									/>
									<label class="custom-control-label" for="register-policy">
										I agree to the <a href="#">privacy policy</a> *
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
