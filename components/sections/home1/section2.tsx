
import Link from 'next/link'

export default function Section2() {
	return (
		<>

			<div className="about1-section-area sp1">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-imges">
								<div className="img1 reveal image-anime">
									<img src="/assets/img/all-images/about/about-img1.png" alt="" />
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-6">
										<div className="space30" />
										<div className="img1 reveal image-anime">
											<img src="/assets/img/all-images/about/about-img2.png" alt="" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="space30" />
										<div className="img1 reveal image-anime">
											<img src="/assets/img/all-images/about/about-img3.png" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="about-header-area heading2">
								<h5 data-aos="fade-left" data-aos-duration={800}>About TechStars</h5>
								<div className="space16" />
								<h2 className="text-anime-style-3">A Global Phenomenon</h2>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={900}>Techstars Startup Weekend is the world’s largest grassroots entrepreneurship program, running since 2009. It has empowered over 700,000 participants through more than 9,000 programs. Spanning 1,850 cities across 175 countries, it fosters innovation and startup culture globally.</p>
								<div className="space32" />
								<div className="about-auhtor-box" data-aos="fade-left" data-aos-duration={1000}>
									<div className="icons">
										<img src="/assets/img/icons/about-icon1.svg" alt="" />
									</div>
									<div className="text">
										<Link href="/#">Connect with speakers</Link>
										<div className="space12" />
										<p>Engage with inspiring speakers who are industry leaders and innovators. Gain valuable insights, expand your network, and explore new opportunities. This is the perfect place to connect with mentors, experts, and visionaries who can guide you on your journey.</p>
									</div>
								</div>
								<div className="space20" />
								<div className="about-auhtor-box" data-aos="fade-left" data-aos-duration={1100}>
									<div className="icons">
										<img src="/assets/img/icons/about-icon2.svg" alt="" />
									</div>
									<div className="text">
										<Link href="/#">Start something great</Link>
										<div className="space12" />
										<p>Techstars Startup Weekend is designed to get you going.Fast. Your local organizers will set up the ideal environment for you to be successful and learn as much as possible in just 54 hours.</p>
									</div>
								</div>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1200}>
									<Link href="https://forms.gle/yEALg7Uybmt5KjXB9" className="vl-btn1">Become an Attendee</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
