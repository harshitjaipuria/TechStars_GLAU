import Link from 'next/link'


export default function Footer1() {
	return (
		<>
			<div className="footer1-sertion-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-logo-area">
								<img src="/assets/img/logo/logo2.png" alt="" />
								<div className="space16" />
								<p>Techstars is a global startup accelerator that helps entrepreneurs grow their businesses through mentorship, funding, and networking opportunities.</p>
								<div className="space24" />
								<ul>
									<li>
										<Link href="https://www.facebook.com/ecellglau/"><i className="fa-brands fa-facebook-f" /></Link>
									</li>
									<li>
										<Link href="https://www.instagram.com/techstarsglau"><i className="fa-brands fa-instagram" /></Link>
									</li>
									<li>
										<Link href="https://www.linkedin.com/company/ecellglau/"><i className="fa-brands fa-linkedin-in" /></Link>
									</li>									
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-6">
							<div className="link-content">
								<h3>Quick Links</h3>
								<ul>
									<li><Link href="/about">About Us</Link></li>
									<li><Link href="/event">Event Listing</Link></li>
									<li><Link href="/pricing-plan">Pricing Plan</Link></li>
									<li><Link href="/contact">Contact Us</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="link-content2">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<Link href="/tel:+11234567890"><img src="/assets/img/icons/phn1.svg" alt="" />+91 8076527770</Link>
									</li>
									<li>
										<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />GLA University, Mathura</Link>
									</li>
									<li>
										<Link href="/mailto:eventifyevent@gmail.com"><img src="/assets/img/icons/mail1.svg" alt="" />techstarsglau@gla.ac.in</Link>
									</li>
									<li>
										<Link href="/#"> <img src="/assets/img/icons/world1.svg" alt="" />https://www.gla.ac.in/ecell/</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="footer-social-box">
								<h3>Our Recent Event Gallery</h3>
								<div className="space12" />
								<div className="row">
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img1.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img2.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img3.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img4.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img5.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-4">
										<div className="img1">
											<img src="/assets/img/all-images/footer/footer-img6.png" alt="" />
											<div className="icons">
												<Link href="/#"><i className="fa-brands fa-instagram" /></Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space60" />
					<div className="row">
						<div className="col-lg-12">
							<div className="copyright">
								<p>© Copyright {new Date().getFullYear()} - E Cell GLAU. All Right Reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
