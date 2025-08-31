'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 1800,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.owl-next',
		prevEl: '.owl-prev',
	},

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
							<div className="team-slider-area">
								<Swiper {...swiperOptions} className="owl-carousel">
									<SwiperSlide className="team-widget-boxarea">
										<div className="img1 image-anime">
											<img src="/assets/img/all-images/team/team-img1.png" alt="" />
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
										</div>
										<div className="space20" />
										<div className="text-area">
											<Link href="/speakers">Devansh S Bhatt</Link>
											<div className="space16" />
											<p>Speaker</p>
										</div>
									</SwiperSlide>

								</Swiper>
								
								<div className="owl-nav">
									<button type="button" role="presentation" className="owl-prev h1p">
										<i className="fa-solid fa-angle-left" />
									</button>
									<button type="button" role="presentation" className="owl-next h1n">
										<i className="fa-solid fa-angle-right" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
