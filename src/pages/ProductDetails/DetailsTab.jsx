import React from 'react';

const DetailsTab = () => {
	return (
		<div class="product-details-tab">
			<ul class="nav nav-pills justify-content-center" role="tablist">
				<li class="nav-item">
					<a
						class="nav-link active"
						id="product-desc-link"
						data-toggle="tab"
						href="#"
						role="tab"
						aria-controls="product-desc-tab"
						aria-selected="true"
					>
						Shipping and Delivery
					</a>
				</li>
			</ul>
			<div class="tab-content">
				<div
					class="tab-pane fade show active"
					id="product-desc-tab"
					role="tabpanel"
					aria-labelledby="product-desc-link"
				>
					<div class="product-desc-content">
						<div class="d-flex justify-content-between border-bottom pb-2">
							<div>
								<div class="fw-semibold text-dark">Door Delivery</div>
								<div class="fs-sm text-muted">
									Kampala and Surbubs delivery fee is UGX 5000.Normally takes
									about 15-30mins within kampala from time of order. Up-country
									deliveries normally take between 12-24hrs via Bus Couriers
								</div>
								<div class="d-flex justify-content-between border-bottom py-2">
									<div>
										<div class="fw-semibold text-dark">Pickup Station</div>
										<div class="fs-sm text-muted">
											Kampala rd, opposite Bank of Uganda , at Church House, 1st
											Floor room 001
										</div>
									</div>
								</div>
								<div class="d-flex justify-content-between border-bottom py-2">
									<div>
										<div class="fw-semibold text-dark">Return Policy</div>
										<div class="fs-sm text-muted">
											Returns should be made to mainstore , within 48hrs and are
											covered with money Back guarantee
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsTab;
