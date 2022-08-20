import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API from '../../helpers/api';
import LoadSpinner from '../../components/Spinner';

const LoginPage = ({ close }) => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		setLoading(true);
		e.preventDefault();
		const data = { email, password };

		API.post('/customer/login', data)
			.then((res) => {
				console.log('Login Response Data ====>', res);
				if (res.data.accessToken) {
					toast.success('Customer Login Successful !!');
					localStorage.setItem('customer', JSON.stringify(res.data));
					setLoading(false);
					setEmail('');
					setPassword('');
					close();
				}
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				toast.error(err);
			});
	};
	return (
		<>
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
									<label for="singin-email">Email address *</label>
									<input
										type="text"
										class="form-control"
										id="singin-email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>

								<div class="form-group">
									<label for="singin-password">Password *</label>
									<input
										type="password"
										class="form-control"
										id="singin-password"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>

								<div class="form-footer">
									<button type="submit" class="btn btn-outline-primary-2">
										<span>LOG IN</span>
										<i class="icon-long-arrow-right"></i>
									</button>

									<a href="#" class="forgot-link">
										Forgot Your Password?
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
