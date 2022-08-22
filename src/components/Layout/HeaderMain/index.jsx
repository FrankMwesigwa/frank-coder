import React from 'react';
import MegaMen from './MegaMen';

import './header-main.css'

const HeaderMain = () => {
	return (
			<div class="header-bottom">
				<div class="container-header">
					<div class="row">
						<div class="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">
							<div
								class="dropdown category-dropdown is-on show"
								data-visible="true"
							>
								<a
									href="#"
									class="dropdown-toggle"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="true"
									data-display="static"
									title="Browse Categories"
								>
									Browse Categories
								</a>
								<div class="dropdown-menu show">
									<nav class="side-nav">
										<ul class="menu-vertical sf-arrows sf-js-enabled">
											<li class="megamenu-container">
												<a class="sf-with-ul" href="#">
													<i class="icon-laptop"></i>Men's Fashion
												</a>
												<div class="megamenu">
													<MegaMen />
												</div>
											</li>
											<li class="megamenu-container">
												<a class="sf-with-ul" href="html/molla/index-14.html#">
													<i class="icon-couch"></i>Women's Fashion
												</a>
												<div class="megamenu">
													<MegaMen />
												</div>
											</li>
											<li class="megamenu-container">
												<a class="sf-with-ul" href="html/molla/index-14.html#">
													<i class="icon-tshirt"></i>African Print
												</a>
												<div class="megamenu">
													<MegaMen />
												</div>
											</li>
											<li>
												<a href="html/molla/index-14.html#">
													<i class="icon-blender"></i>Sports Wear
												</a>
											</li>
											<li>
												<a href="html/molla/index-14.html#">
													<i class="icon-heartbeat"></i>Healthy &amp; Beauty
												</a>
											</li>
											<li>
												<a href="html/molla/index-14.html#">
													<i class="icon-shoe-prints"></i>Shoes &amp; Boots
												</a>
											</li>
											<li>
												<a href="html/molla/index-14.html#">
													<i class="icon-map-signs"></i>Travel &amp; Outdoor
												</a>
											</li>
											<li>
												<a href="html/molla/index-14.html#">
													<i class="icon-shopping-bag"></i>Backpack &amp; Bag
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>

						<div class="col col-lg-6 col-xl-6 col-xxl-8 header-center">
							<nav class="main-nav">
								<ul class="menu sf-arrows sf-js-enabled">
									<li class="megamenu-container active">
										<a href="html/molla/index.html" class="sf-with-ul">
											Home
										</a>
									</li>
									<li>
										<a href="html/molla/category.html" class="sf-with-ul">
											Shop
										</a>
									</li>
									<li>
										<a href="html/molla/product.html" class="sf-with-ul">
											Men
										</a>
										<div class="megamenu megamenu-sm">
											<div class="row no-gutters">
												<div class="col-md-6">
													<div class="menu-col">
														<div class="menu-title">Men Categories</div>

														<ul>
															<li>
																<a href="html/molla/product-centered.html">
																	Centered
																</a>
															</li>
															<li>
																<a href="html/molla/product-extended.html">
																	<span>
																		Extended Info
																		<span class="tip tip-new">New</span>
																	</span>
																</a>
															</li>
															<li>
																<a href="html/molla/product-gallery.html">
																	Gallery
																</a>
															</li>
															<li>
																<a href="html/molla/product-sticky.html">
																	Sticky Info
																</a>
															</li>
															<li>
																<a href="html/molla/product-sidebar.html">
																	Boxed With Sidebar
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<a href="html/molla/index-14.html#" class="sf-with-ul">
											Women
										</a>
										<ul>
											<li>
												<a href="html/molla/about.html" class="sf-with-ul">
													About
												</a>
												<ul>
													<li>
														<a href="html/molla/about.html">About 01</a>
													</li>
													<li>
														<a href="html/molla/about-2.html">About 02</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="html/molla/contact.html" class="sf-with-ul">
													Contact
												</a>
												<ul>
													<li>
														<a href="html/molla/contact.html">Contact 01</a>
													</li>
													<li>
														<a href="html/molla/contact-2.html">Contact 02</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="html/molla/login.html">Login</a>
											</li>
											<li>
												<a href="html/molla/faq.html">FAQs</a>
											</li>
											<li>
												<a href="html/molla/404.html">Error 404</a>
											</li>
											<li>
												<a href="html/molla/coming-soon.html">Coming Soon</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="html/molla/blog.html" class="sf-with-ul">
											Accessories
										</a>
										<ul>
											<li>
												<a href="html/molla/blog.html">Classic</a>
											</li>
											<li>
												<a href="html/molla/blog-listing.html">Listing</a>
											</li>
											<li>
												<a href="html/molla/index-14.html#" class="sf-with-ul">
													Grid
												</a>
												<ul>
													<li>
														<a href="html/molla/blog-grid-2cols.html">
															Grid 2 columns
														</a>
													</li>
													<li>
														<a href="html/molla/blog-grid-3cols.html">
															Grid 3 columns
														</a>
													</li>
													<li>
														<a href="html/molla/blog-grid-4cols.html">
															Grid 4 columns
														</a>
													</li>
													<li>
														<a href="html/molla/blog-grid-sidebar.html">
															Grid sidebar
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="html/molla/index-14.html#" class="sf-with-ul">
													Masonry
												</a>
												<ul>
													<li>
														<a href="html/molla/blog-masonry-2cols.html">
															Masonry 2 columns
														</a>
													</li>
													<li>
														<a href="html/molla/blog-masonry-3cols.html">
															Masonry 3 columns
														</a>
													</li>
													<li>
														<a href="html/molla/blog-masonry-4cols.html">
															Masonry 4 columns
														</a>
													</li>
													<li>
														<a href="html/molla/blog-masonry-sidebar.html">
															Masonry sidebar
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="html/molla/index-14.html#" class="sf-with-ul">
													Mask
												</a>
												<ul>
													<li>
														<a href="html/molla/blog-mask-grid.html">
															Blog mask grid
														</a>
													</li>
													<li>
														<a href="html/molla/blog-mask-masonry.html">
															Blog mask masonry
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="html/molla/index-14.html#" class="sf-with-ul">
													Single Post
												</a>
												<ul>
													<li>
														<a href="html/molla/single.html">
															Default with sidebar
														</a>
													</li>
													<li>
														<a href="html/molla/single-fullwidth.html">
															Fullwidth no sidebar
														</a>
													</li>
													<li>
														<a href="html/molla/single-fullwidth-sidebar.html">
															Fullwidth with sidebar
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										<a href="html/molla/elements-list.html" class="sf-with-ul">
											Beauty
										</a>
										<ul>
											<li>
												<a href="html/molla/elements-products.html">Products</a>
											</li>
											<li>
												<a href="html/molla/elements-typography.html">
													Typography
												</a>
											</li>
											<li>
												<a href="html/molla/elements-titles.html">Titles</a>
											</li>
											<li>
												<a href="html/molla/elements-banners.html">Banners</a>
											</li>
											<li>
												<a href="html/molla/elements-product-category.html">
													Product Category
												</a>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>

						<div class="col col-lg-3 col-xl-3 col-xxl-2 header-right">
							<i class="la la-lightbulb-o"></i>
							<p>Clearance Up to 30% Off</p>
						</div>
					</div>
				</div>
			</div>
	);
};

export default HeaderMain;
