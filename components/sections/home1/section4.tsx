'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
	modules: [Autoplay, Pagination],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 1800,
		disableOnInteraction: false,
	},
	loop: true,

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	}
}


export default function Section4() {
	return (
		<>

			<div className="team1-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<div className="team-header space-margin60 heading2">
								<div className="space16" />
								<h2 className="text-anime-style-3">Our Judges and Mentors</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 position-relative">
							<Swiper {...swiperOptions} className="team-slider-area ">
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img1.png" alt="" />
										<ul>
											<li>
												<Link href="https://www.linkedin.com/in/rajib-banerjee-6922b99/"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Rajib Banarejee</Link>
										<div className="space16" />
										<p>Speaker</p>
									</div>
								</SwiperSlide>
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img2.png" alt="" />
										<ul>											
											<li>
												<Link href="https://www.linkedin.com/in/rahullakhmani/"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Rahul Lakhmani</Link>
										<div className="space16" />
										<p>Speaker</p>
									</div>
								</SwiperSlide>
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img3.png" alt="" />
										<ul>
											<li>
												<Link href="https://www.linkedin.com/in/himanshusinglaa/"><i className="fa-brands fa-instagram" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Himanshu Singla</Link>
										<div className="space16" />
										<p>Speaker</p>
									</div>
								</SwiperSlide>
								<SwiperSlide className="team-widget-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/img/all-images/team/team-img45.png" alt="" />
										<ul>
											<li>
												<Link href="https://www.linkedin.com/in/devansh-s-bhatt-a999481a1/"><i className="fa-brands fa-linkedin-in" /></Link>
											</li>
										</ul>
									</div>
									<div className="space20" />
									<div className="text-area">
										<Link href="/speakers">Devansh S Bhatt</Link>
										<div className="space16" />
										<p>Speaker</p>
									</div>
								</SwiperSlide>

							</Swiper>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
