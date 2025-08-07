import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export default function OrganizingCommittee() {
	const committeeMembers = [
		{
			id: 1,
			name: "Dr. Sarah Johnson",
			position: "Chairperson",
			department: "Computer Science",
			image: "/assets/img/team/team-img1.png",
			email: "sarah.johnson@techstars.com",
			linkedin: "https://linkedin.com/in/sarah-johnson"
		},
		{
			id: 2,
			name: "Prof. Michael Chen",
			position: "Vice Chairperson",
			department: "Engineering",
			image: "/assets/img/team/team-img2.png",
			email: "michael.chen@techstars.com",
			linkedin: "https://linkedin.com/in/michael-chen"
		},
		{
			id: 3,
			name: "Dr. Emily Rodriguez",
			position: "Secretary",
			department: "Business Administration",
			image: "/assets/img/team/team-img3.png",
			email: "emily.rodriguez@techstars.com",
			linkedin: "https://linkedin.com/in/emily-rodriguez"
		},
		{
			id: 4,
			name: "Prof. David Kim",
			position: "Treasurer",
			department: "Finance",
			image: "/assets/img/team/team-img4.png",
			email: "david.kim@techstars.com",
			linkedin: "https://linkedin.com/in/david-kim"
		},
		{
			id: 5,
			name: "Dr. Lisa Wang",
			position: "Technical Coordinator",
			department: "Information Technology",
			image: "/assets/img/team/team-img5.png",
			email: "lisa.wang@techstars.com",
			linkedin: "https://linkedin.com/in/lisa-wang"
		},
		{
			id: 6,
			name: "Prof. James Wilson",
			position: "Marketing Director",
			department: "Marketing",
			image: "/assets/img/team/team-img6.png",
			email: "james.wilson@techstars.com",
			linkedin: "https://linkedin.com/in/james-wilson"
		}
	]

	return (
		<>
			<Breadcrumb breadcrumbTitle="Organizing Committee" />
			
			<section className="organizing-committee-section section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title text-center mb-5">
								<h2>Our Organizing Committee</h2>
								<p>Meet the dedicated team behind TechStars 2024. Our committee members work tirelessly to ensure the success of this prestigious event.</p>
							</div>
						</div>
					</div>
					
					<div className="row">
						{committeeMembers.map((member) => (
							<div key={member.id} className="col-lg-4 col-md-6 mb-4">
								<div className="committee-member-card">
									<div className="member-image">
										<img src={member.image} alt={member.name} className="img-fluid" />
										<div className="member-overlay">
											<div className="social-links">
												<Link href={`mailto:${member.email}`} className="social-link">
													<i className="fa-solid fa-envelope"></i>
												</Link>
												<Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
													<i className="fa-brands fa-linkedin-in"></i>
												</Link>
											</div>
										</div>
									</div>
									<div className="member-info">
										<h4>{member.name}</h4>
										<p className="position">{member.position}</p>
										<p className="department">{member.department}</p>
									</div>
								</div>
							</div>
						))}
					</div>
					
					<div className="row mt-5">
						<div className="col-lg-12">
							<div className="committee-info text-center">
								<h3>Join Our Committee</h3>
								<p>Interested in becoming part of our organizing committee? We're always looking for passionate individuals to help make TechStars even better.</p>
								<Link href="/contact" className="btn btn-primary">Contact Us</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
