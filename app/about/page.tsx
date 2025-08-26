'use client'
import CountUp from 'react-countup'
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import BrandSlider from '@/components/slider/BrandSlider'
import Link from "next/link"
export default function About() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<div>
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/bg/header-bg6.png)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading1 text-center">
										<h1>About Event</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>About Us</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}
					{/*===== ABOUT AREA STARTS =======*/}
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
										<div className="about-btnarea">
											<svg xmlns="http://www.w3.org/2000/svg" width={200} height={200} viewBox="0 0 200 200" fill="none" className="keyframe5">
												<path d="M93.8771 2.53621C96.8982 1.28483 98.4087 0.659138 100 0.659138C101.591 0.659138 103.102 1.28483 106.123 2.5362L164.588 26.7531C167.609 28.0045 169.119 28.6302 170.245 29.7554C171.37 30.8806 171.995 32.3912 173.247 35.4123L197.464 93.8771C198.715 96.8982 199.341 98.4087 199.341 100C199.341 101.591 198.715 103.102 197.464 106.123L173.247 164.588C171.995 167.609 171.37 169.119 170.245 170.245C169.119 171.37 167.609 171.995 164.588 173.247L106.123 197.464C103.102 198.715 101.591 199.341 100 199.341C98.4087 199.341 96.8982 198.715 93.8771 197.464L35.4123 173.247C32.3912 171.995 30.8806 171.37 29.7554 170.245C28.6302 169.119 28.0045 167.609 26.7531 164.588L2.53621 106.123C1.28483 103.102 0.659138 101.591 0.659138 100C0.659138 98.4087 1.28483 96.8982 2.5362 93.8771L26.7531 35.4123C28.0045 32.3912 28.6302 30.8806 29.7554 29.7554C30.8806 28.6302 32.3912 28.0045 35.4123 26.7531L93.8771 2.53621Z" fill="#FFBA00" />
											</svg>
											<Link href="/pricing-plan">
												<span><i className="fa-solid fa-arrow-right" /></span>
												<br />
												<div className="space12" />
												Buy Ticket
											</Link>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="about-header-area heading2">
										<h5 data-aos="fade-left" data-aos-duration={800}>About TechStars Startup Weekend GLAU</h5>
										<div className="space16" />
										<h2 className="text-anime-style-3">Techstars is a global startup accelerator.</h2>
										<div className="space16" />
										<p data-aos="fade-left" data-aos-duration={900}>Techstars is a global startup accelerator that supports early-stage entrepreneurs with mentorship, funding, and a powerful network. It helps founders scale their ideas into successful businesses worldwide.</p>
										<div className="space32" />
										<div className="about-counter-area">
											<div className="counter-box">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={700} />K+</h2>
												<div className="space18" />
												<p>Participants</p>
											</div>
											<div className="counter-box box2">
												<h2><CountUp className="odometer" enableScrollSpy={true} end={9} />K+</h2>
												<div className="space18" />
												<p>Programs</p>
											</div>
											<div className="counter-box box3" style={{ border: 'none' }}>
												<h2><CountUp className="odometer" enableScrollSpy={true} end={175} />+</h2>
												<div className="space18" />
												<p>Countries</p>
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
					{/*===== ABOUT AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="brands3-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 m-auto">
									<div className="brand-header heading4 space-margin60 text-center">
										<h3>Organizers & Sponsers</h3>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-12" data-aos="zoom-in" data-aos-duration={800}>
									<BrandSlider />
								</div>
							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
					{/*===== OTHERS AREA STARTS =======*/}
					<div className="choose-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>why choose us</h5>
										<div className="space18" />
										<h2>Why Attend Event?</h2>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/globalexposure.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9">Global Exposure</Link>
											<div className="space16" />
											<p>Connect with a worldwide network of mentors, investors, and entrepreneurs.</p>
											<div className="space24" />
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/funds (1).svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9">Funding Opportunity</Link>
											<div className="space16" />
											<p>Chance to secure seed investment and attract future investors.</p>
											<div className="space24" />
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/Mentorship.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9">Expert Mentorship</Link>
											<div className="space16" />
											<p>Learn directly from experienced founders, industry leaders, and professionals.</p>
											<div className="space24" />
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/StartupGrowth.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9">Startup Growth</Link>
											<div className="space16" />
											<p>Gain tools, strategies, and guidance to scale your idea into a successful business.</p>
											<div className="space24" />
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/Networking.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9">Networking</Link>
											<div className="space16" />
											<p>Build long-term connections with peers, alumni, and corporate partners.</p>
											<div className="space24" />
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="choose-widget-boxarea">
										<div className="icons">
											<img src="/assets/img/icons/CareerEdge.svg" alt="" />
										</div>
										<div className="space24" />
										<div className="content-area">
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9">Career Edge</Link>
											<div className="space16" />
											<p>Enhance entrepreneurial skills and open doors to global opportunities.</p>
											<div className="space24" />
											<Link href="https://forms.gle/yEALg7Uybmt5KjXB9" className="readmore">Read More <i className="fa-solid fa-arrow-right" /></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== OTHERS AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-block d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
											<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="https://forms.gle/yEALg7Uybmt5KjXB9"><img src="/assets/img/icons/calender1.svg" alt="" />12 September 2025 - 14 September 2025</Link>
											</li>
											<li className="m-0">
												<Link href="https://forms.gle/yEALg7Uybmt5KjXB9"><img src="/assets/img/icons/location1.svg" alt="" />GLA University</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== CTA AREA ENDS =======*/}
					{/*===== CTA AREA STARTS =======*/}
					<div className="cta1-section-area d-lg-none d-block">
						<div className="container">
							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea">
										<div className="timer-btn-area">
											<Countdown />
											<div className="btn-area1">
												<Link href="/pricing-plan" className="vl-btn1">Buy Ticket</Link>
											</div>
										</div>
										<ul>
											<li>
												<Link href="/#"><img src="/assets/img/icons/calender1.svg" alt="" />30 January 2025 - 6pm to 11:30pm</Link>
											</li>
											<li className="m-0">
												<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />Secret Location In The UK</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</Layout>
		</>
	)
}