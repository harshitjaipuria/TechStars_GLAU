"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const swiperOptions = {
  modules: [Autoplay, Pagination],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
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
  },
};

export default function Section4() {
  return (
    <>
      <div className="team1-section-area sp1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="team-header space-margin60 heading2">
                <div className="space16" />
                <h2 className="text-anime-style-3">Our Visionaries</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 position-relative">
              <Swiper {...swiperOptions} className="team-slider-area ">
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/team/VA.png" alt="" />
                  </div>
                  <div className="space20" />
                  <div className="text-area">
                    <Link href="/speakers">Dr. Vivek Agrawal</Link>
                    <div className="space16" />
                    <p>Hon’ble CFO GLA University</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/team/AKG.png" alt="" />
                    <ul>
                      <li>
                        <Link href="https://www.linkedin.com/in/anoop-gupta-61236717/">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/in/anoop-gupta-61236717/">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space20" />
                  <div className="text-area">
                    <Link href="/speakers">Dr. Anoop Kumar Gupta </Link>
                    <div className="space16" />
                    <p>Hon’ble Vice Chancellor | Chief Patron</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/team/AG.png" alt="" />
                    <ul>
                      <li>
                        <Link href="https://www.linkedin.com/in/abhishek-gautam-83428a198/">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/abhishek_prat1/">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space20" />
                  <div className="text-area">
                    <Link href="/speakers">Abhishek Gautam</Link>
                    <div className="space16" />
                    <p>Mentor</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/team/DS.png" alt="" />
                    <ul>
                      <li>
                        <Link href="https://www.linkedin.com/in/deepak-sharma-51b5ab211/">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/in/deepak-sharma-51b5ab211/">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space20" />
                  <div className="text-area">
                    <Link href="/speakers">Deepak Sharma</Link>
                    <div className="space16" />
                    <p>Mentor</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/team/JS.png" alt="" />
                    <ul>
                      <li>
                        <Link href="https://www.linkedin.com/in/jitendra-sharma-592747170/">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space20" />
                  <div className="text-area">
                    <Link href="/speakers">Jitendra Sharma</Link>
                    <div className="space16" />
                    <p>Mentor</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="team-widget-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/team/PJ.png" alt="" />
                    <ul>
                      <li>
                        <Link href="https://www.linkedin.com/in/dr-pramod-joshi-3774253/">
                          <i className="fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.facebook.com/pramod.k.joshi.12">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space20" />
                  <div className="text-area">
                    <Link href="/speakers">Dr. Pramod Joshi</Link>
                    <div className="space16" />
                    <p>External Mentor</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
