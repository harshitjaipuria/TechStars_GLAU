'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	spaceBetween: 30,
	autoplay: {
		delay: 25000,
		disableOnInteraction: false,
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
	breakpoints:{
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

export default function Section6() {
	return (
		<>

			<div className="memory1-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="memory-header text-center heading2 space-margin60">
								<div className="space16" />
								<h2 className="text-anime-style-3">Our Committee Members</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 memory-slider-area">
							<Swiper {...swiperOptions} className=" owl-carousel">
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/1.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Krishna Mittal</p>
										<div className="space12" />
										<Link href="/memories">Organizer</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/2.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Sajal Gupta</p>
										<div className="space12" />
										<Link href="/memories">Co Organizer</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/3.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Rishi Prakash</p>
										<div className="space12" />
										<Link href="/memories">Ambassador</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/6.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Somya Agrawal</p>
										<div className="space12" />
										<Link href="/memories">Curator</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/12.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Abhay Dwivedi</p>
										<div className="space12" />
										<Link href="/memories">Treasurer</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/27.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Tanishq Vashishtha</p>
										<div className="space12" />
										<Link href="/memories">Delligence Incharge</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/13.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Radha Goel</p>
										<div className="space12" />
										<Link href="/memories">Hospitality Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/24.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Ansh Tomar</p>
										<div className="space12" />
										<Link href="/organizing-committee">Operations Co-Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/9.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Aman Chandra</p>
										<div className="space12" />
										<Link href="/organizing-committee">Media & Publicity Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/11.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Harshit Jaipuria</p>
										<div className="space12" />
										<Link href="/organizing-committee">Sponsership Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/15.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Abhinav Saxena</p>
										<div className="space12" />
										<Link href="/organizing-committee">Judges & Mentor Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/14.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Tarun Sharma</p>
										<div className="space12" />
										<Link href="/organizing-committee">Data Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/22.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Nancy Paul</p>
										<div className="space12" />
										<Link href="/organizing-committee">Data Co-Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/16.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Samarth Singh</p>
										<div className="space12" />
										<Link href="/organizing-committee">Operation Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/8.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Sarthak Singh</p>
										<div className="space12" />
										<Link href="/organizing-committee">Design Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/4.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Aryan Singh</p>
										<div className="space12" />
										<Link href="/organizing-committee">Logistics Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/5.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Harsh Raj</p>
										<div className="space12" />
										<Link href="/organizing-committee">Tech Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/7.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Anuj Sengar</p>
										<div className="space12" />
										<Link href="/organizing-committee">Media & Publicity Co-Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/10.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Asmit Jain</p>
										<div className="space12" />
										<Link href="/organizing-committee">Marketing Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/17.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Krishna Sinsinwar</p>
										<div className="space12" />
										<Link href="/organizing-committee">Hospitality Co-Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/18.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Radhika Agrawal</p>
										<div className="space12" />
										<Link href="/organizing-committee">Team Hospitality</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/19.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Bhoomika Agrawal</p>
										<div className="space12" />
										<Link href="/organizing-committee">Team Hospitality</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/20.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Bhoomi Bansal</p>
										<div className="space12" />
										<Link href="/organizing-committee">Team Media & Publicity</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/21.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Shivendra Kumar</p>
										<div className="space12" />
										<Link href="/organizing-committee">Design Co-Head</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/23.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Kislay Kumar</p>
										<div className="space12" />
										<Link href="/organizing-committee">Team Data</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/25.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Krish Choudhary</p>
										<div className="space12" />
										<Link href="/organizing-committee">Team Operations</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/26.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Aditya Yadav</p>
										<div className="space12" />
										<Link href="/organizing-committee">Delligence Incharge</Link>
									</div>
								</SwiperSlide>
								<SwiperSlide className="memory-boxarea">
									<div className="img1 image-anime">
										<img src="/assets/council homepage/28.png" alt="" />
									</div>
									<div className="content-area">
										<img src="/assets/img/icons/logo1.svg" alt="" className="logo1 keyframe5" />
										<div className="arrow">
											<Link href="/memories"><i className="fa-solid fa-arrow-right" /></Link>
										</div>
										<div className="space18" />
										<p>Arohi Mishra</p>
										<div className="space12" />
										<Link href="/organizing-committee">Team Marketing</Link>
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

		</>
	)
}
