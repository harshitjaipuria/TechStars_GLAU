
import Countdown from '@/components/elements/Countdown'
import Link from 'next/link'

export default function Section1() {
	return (
		<>

			<div className="hero1-section-area">
				<div className="bg1">
					<img src="/assets/img/bg/header-bg2.png" alt="" className="header-bg1" />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="hero1-header heading1">
								<h5 data-aos="fade-left" data-aos-duration={800}><img src="/assets/img/icons/sub-logo1.svg" alt="" />GLA University Presents</h5>
								<div className="space16" />
								<h1 className="text-anime-style-3">
									TechStars Startup Weekend <br className="d-lg-block d-none" />
									GLAU
								</h1>
								<div className="space16" />
								<p data-aos="fade-left" data-aos-duration={900}>
									Welcome Innovate 2025 Shaping the Future of Business, <br className="d-lg-block d-none" />
									where industry leaders, innovators, and visionaries come.
								</p>
								<div className="space32" />
								<div className="btn-area1" data-aos="fade-left" data-aos-duration={1100}>
									<Link href="/event-schedule" className="vl-btn1">Reserve My Seat</Link>
									<Link href="/about" className="vl-btn2">Learn More</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="header-images">
								<div className="img1" data-aos="zoom-in" data-aos-duration={1000}>
									<img src="/assets/img/all-images/hero/hero-img1.png" alt="" />
								</div>
								<div className="images-content-area" data-aos="fade-up" data-aos-duration={900}>
									<h3>TechStars Startup Weekend</h3>
									<div className="space12" />
									<Link href="/#">September 12-14, 2025</Link>
									<div className="space12" />
									<Link href="/#">GLA University, Mathura</Link>
									<div className="space16" />
									<p>Join us for an extraordinary three-day journey into the realm of innovation at The
										TechStars Startup Weekend GLAU.</p>
								</div>
							</div>
						</div>
						<div className="col-lg-1">
						<Countdown />
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
