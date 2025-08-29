'use client'
import Link from 'next/link'
import { useState } from "react"

export default function Section3() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i: number) => {
		setIsTab(i)
	}
	return (
		<>

			<div className="event1-section-area sp1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 m-auto">
							<div className="event-header heading2 space-margin60 text-center">
								<h5 data-aos="fade-left" data-aos-duration={800}>Event Schedule</h5>
								<div className="space16" />
								<h2 className="text-anime-style-3">Our Events Schedule Plan</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div data-aos="fade-up" data-aos-duration={900}>
								<ul className="nav nav-pills space-margin60" id="pills-tab" role="tablist">
									<li className="nav-item" onClick={() => handleTab(1)}>
										<button className={isTab == 1 ? "nav-link active" : "nav-link"} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
											<span className="day">Day 01</span>
											<span className="vl-flex">
												<span className="cal">12</span>
												<span className="date">Sep <br />
													2025</span>
											</span>
										</button>
									</li>
									<li className="nav-item" onClick={() => handleTab(2)}>
										<button className={isTab == 2 ? "nav-link active" : "nav-link"} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
											<span className="day">Day 02</span>
											<span className="vl-flex">
												<span className="cal">13</span>
												<span className="date">Sep <br />
													2025</span>
											</span>
										</button>
									</li>
									<li className="nav-item" onClick={() => handleTab(3)}>
										<button className={isTab == 3 ? "nav-link active" : "nav-link"} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
											<span className="day">Day 03</span>
											<span className="vl-flex">
												<span className="cal">14</span>
												<span className="date">Sep <br />
													2025</span>
											</span>
										</button>
									</li>
								</ul>
							</div>
							<div className="tab-content" id="pills-tabContent">
								<div className={isTab == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={800}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 04:00
																PM - 05:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">1. Arrival And Check-In</Link>
													<div className="space16" />
													<p>Participants arrive at the venue, complete their registration, and collect their welcome kits and event badges. The atmosphere begins to buzz with energy as attendees connect with peers and organizers. This moment sets the tone for an engaging and collaborative Startup Weekend ahead.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={1000}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img2.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 05:00
																PM -5:30 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">2. Felicitation</Link>
													<div className="space16" />
													<p>The event begins with a warm felicitation of chief guests, mentors, and organizers who have contributed to making the Startup Weekend possible. Their presence is acknowledged with tokens of appreciation and applause. This sets a respectful and enthusiastic tone for the sessions to follow.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={1200}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img3.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 05:30
																PM -06:30 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">3. Networking and Felicitation Session</Link>
													<div className="space16" />
													<p>Participants engage in informal conversations with fellow innovators, mentors, and guests, fostering connections and collaboration. At the same time, distinguished attendees are felicitated for their support and involvement. This dual session builds a strong sense of community and appreciation among all present.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={1400}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/Ice Breaking Session.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 06:30
																PM -07:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="https://forms.gle/yEALg7Uybmt5KjXB9" className="head">4. Ice Breaking Session</Link>
													<div className="space16" />
													<p>Fun and interactive activities are conducted to help participants get comfortable and acquainted with one another. These light-hearted exercises encourage communication, teamwork, and idea sharing. The session sets a friendly and open tone for the rest of the event.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={1600}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/2123.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 07:00
																PM -07:30 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/#" className="head">5. Idea Bank Discussion</Link>
													<div className="space16" />
													<p>Participants share and discuss their startup ideas in an open forum, fostering creativity and collaboration. Each idea is briefly pitched, explored, and refined with feedback from peers and mentors. This session helps shape the foundation for team formation and project development.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={1800}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/voting.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 07:30
																PM -07:45 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/#" className="head">6. Voting</Link>
													<div className="space16" />
													<p>After all ideas are presented, participants vote for the ones they find most promising and impactful. The voting process helps identify the top ideas that will move forward into team formation. It ensures that the most compelling concepts gain the momentum they deserve.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea" data-aos="fade-up" data-aos-duration={2000}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/Team.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 07:45
																PM -08:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/#" className="head">7. Team Formation</Link>
													<div className="space16" />
													<p>Based on the selected ideas, participants form teams by aligning their interests and skills with chosen projects. This collaborative step brings together diverse talents to work on a shared vision. Teams officially begin their Startup Weekend journey, ready to turn ideas into action.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 02:00
																PM -03:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">1. Arrival And Check-In</Link>
													<div className="space16" />
													<p>Participants return to the venue energized and ready to dive into the next phase of their startup journey. The day begins with check-in, settling in with teams, and reviewing progress. Excitement builds as teams gear up for intensive brainstorming and development.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/Review.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 03:00
																PM -04:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">2. Review And Agenda</Link>
													<div className="space16" />
													<p>The day kicks off with a quick review of Day 1 activities and milestones achieved by each team. Organizers then present the agenda for Day 2, outlining key sessions, mentoring slots, and deliverables. This helps teams align their goals and manage time effectively for the day ahead.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/Spaceallotment.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 04:00
																PM -04:30 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/#" className="head">3. Team Space Allotment</Link>
													<div className="space16" />
													<p>Each team is assigned a dedicated workspace to collaborate, brainstorm, and develop their startup ideas. These spaces provide a focused environment equipped with necessary resources. It marks the beginning of hands-on execution and deep team collaboration.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/workbegin.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 04:30
																PM -06:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">4. Begin Work</Link>
													<div className="space16" />
													<p>Teams dive into the development phase, refining their ideas, conducting research, and building prototypes or business models. Members collaborate actively, applying their skills to bring the concept to life. Mentors begin to circulate, offering guidance and insights along the way.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/Speakersession.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 06:00
																PM -08:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">5. Speaker Session</Link>
													<div className="space16" />
													<p>An industry expert takes the stage to share valuable insights, experiences, and lessons from their entrepreneurial journey. The session inspires participants, offering practical advice and motivation. It serves as a knowledge boost amidst the intense building process.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/Dinner.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 08:00
																PM -09:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">6. Dinner</Link>
													<div className="space16" />
													<p>Participants take a well-deserved break to enjoy a hearty dinner and recharge for the evening. It’s also a chance to unwind, socialize, and exchange ideas with fellow attendees. The relaxed atmosphere fosters deeper connections and casual collaboration.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/mentor.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 09:00
																PM -11:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">7. Mentor Session</Link>
													<div className="space16" />
													<p>Experienced mentors interact with each team to provide personalized feedback, guidance, and strategic advice. They help refine ideas, troubleshoot challenges, and improve execution plans. This session plays a crucial role in strengthening the viability of each startup project.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-3">
												<div className="img1">
													<img src="/assets/img/all-images/event/jamming.png" alt="" />
												</div>
											</div>
											<div className="col-lg-9">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 11:00
																PM -12:00 AM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">8. Jamming Session</Link>
													<div className="space16" />
													<p>Participants come together in a relaxed setting to unwind through music, fun activities, and informal interactions. It’s a creative break that fosters bonding, refreshes minds, and builds team spirit. The session adds a lively and energetic vibe to the Startup Weekend experience.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/workcontinues.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 12:00
																AM -2:30 AM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura</Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">1. Work Continues</Link>
													<div className="space16" />
													<p>Teams return to their workspaces with renewed energy, focusing on refining their solutions and preparing final presentations. Development, design, and validation efforts intensify as the deadline approaches. Collaboration and productivity peak during this crucial phase.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/teabreak.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 02:30
																AM - 03:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" />GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">2. Tea Break</Link>
													<div className="space16" />
													<p>A short refreshment break is provided to help participants relax and recharge. Over tea and snacks, attendees engage in light conversations and informal networking. It’s a quick pause that boosts energy for the work ahead.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/work2.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 03:00
																AM - 07:00 AM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">3. Work Continues</Link>
													<div className="space16" />
													<p>Teams resume their tasks with sharpened focus, pushing toward completing their prototypes and finalizing pitches. Last-minute improvements and rehearsals take place as the clock ticks down. The atmosphere is intense yet collaborative, driving innovation and execution.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/Breakfast.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 07:00
																AM - 08:00 AM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">4. Breakfast</Link>
													<div className="space16" />
													<p>The day begins with a nourishing breakfast to energize participants for the final stretch of the event. It’s also a time for light conversation and team catch-ups before diving back into work. A fresh start sets the tone for a productive and exciting day ahead.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div classname="space30" />
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/pitching.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM - 12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">5. Pitching</Link>
													<div className="space16" />
													<p>Teams take the stage to present their startup ideas, showcasing their journey from concept to execution. Each pitch highlights the problem, solution, market potential, and team effort behind the idea. Judges and mentors evaluate the presentations, marking the climax of the Startup Weekend.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/award ceremony.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 12:00
																PM - 01:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> GLA University, Mathura </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">6. Award Ceremony & Event Conclusion</Link>
													<div className="space16" />
													<p>The event concludes with a grand closing ceremony celebrating the hard work, creativity, and collaboration of all participants. Winners are announced, certificates are distributed, and heartfelt thanks are extended to mentors, judges, and organizers. The ceremony wraps up the Startup Weekend on an inspiring and memorable note.</p>
													<div className="space32" />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact1-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 Your Pathway to
														Business Transformation</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img2.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 A Full-Day Journey
														the Future of Business</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img3.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 Charting the Course
														for Business Success</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={isTab == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact2-tab" tabIndex={0}>
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img1.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 Your Pathway to
														Business Transformation</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img2.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 A Full-Day Journey
														the Future of Business</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="space30" />
									<div className="tabs-widget-boxarea">
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="img1">
													<img src="/assets/img/all-images/event/event-img3.png" alt="" />
												</div>
											</div>
											<div className="col-lg-8">
												<div className="content-area">
													<ul>
														<li>
															<Link href="/#"><img src="/assets/img/icons/clock1.svg" alt="" /> 10:00
																AM -12:00 PM <span> | </span></Link>
														</li>
														<li>
															<Link href="/#"><img src="/assets/img/icons/location1.svg" alt="" /> 26/C
																Asana, New York </Link>
														</li>
													</ul>
													<div className="space20" />
													<Link href="/event-single" className="head">Innovate 2025 Charting the Course
														for Business Success</Link>
													<div className="space16" />
													<p>The Innovate 2025 conference is meticulously designed to provide you with
														a rich, immersive experience that drives actionable insights &amp; fosters
														collaboration from keynote presentations.</p>
													<div className="space32" />
													<div className="btn-area1">
														<Link href="/pricing-plan" className="vl-btn1">purchase ticket now</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
