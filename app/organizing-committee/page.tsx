import Link from 'next/link'
import Breadcrumb from '@/components/layout/Breadcrumb'

export default function OrganizingCommittee() {
	const committeeMembers = [
		{
			id: 1,
			name: "Krishna Mittal",
			position: "Organizer",
			image: "/assets/council/1.png",
			linkedin: "https://www.linkedin.com/in/krishna-mittal-8709b322a/",
			instagram: "https://www.instagram.com/_krishna_mittal__/"
		},
		{
			id: 2,
			name: "Sajal Gupta",
			position: "Co Organizer",
			image: "/assets/council/2.png",
			linkedin: "https://www.linkedin.com/in/sajal-gupta31/",
			instagram: "https://www.instagram.com/sajal.gta/"
		},
		{
			id: 3,
			name: "Rishi Prakash",
			position: "Ambassador",
			image: "/assets/council/3.png",
			linkedin: "https://www.linkedin.com/in/rishi-prakash-22a861290/",
			instagram: "https://www.instagram.com/_rishi_3562/"
		},
		{
			id: 4,
			name: "Abhay Kumar Treviedi",
			position: "Treasurer",
			image: "/assets/council/12.png",
			linkedin: "https://www.linkedin.com/in/abhay-kumar-dwivedi-9a6ba7295/",
			instagram: "https://www.instagram.com/akd22_fc/"
		},
		{
			id: 5,
			name: "Somya Agrawal",
			position: "Curator",
			image: "/assets/council/6.png",
			linkedin: "https://www.linkedin.com/in/somya-agrawal-14b49a272/",
			instagram: "https://www.instagram.com/sommyaaa_/"
		},
		{
			id: 6,
			name: "Radha Goel",
			position: "Hospitality Head",
			image: "/assets/council/13.png",
			linkedin: "https://www.linkedin.com/in/radha-g-9489b8264/",
			instagram: "https://www.instagram.com/radhagoel16/"
		},
		{
			id: 7,
			name: "Krishna Sinsinwar",
			position: "Hospitality Co-Head",
			image: "/assets/council/17.png",
			linkedin: "http://linkedin.com/in/krishna-sinsinwar-37658a1b3/",
			instagram: "https://www.instagram.com/krish_is_high/"
		},
		{
			id: 8,
			name: "Aman Chandra",
			position: "Media & Publicity Head",
			image: "/assets/council/9.png",
			linkedin: "https://www.linkedin.com/in/aman-chandra-6999a4280/",
			instagram: "https://www.instagram.com/aman_chandraaaaa/"
		},
		{
			id: 9,
			name: "Tanishq Vashistha",
			position: "Delligence Incharge",
			image: "/assets/council/27.png",
			linkedin: "https://www.linkedin.com/in/tanishq-vashishtha-aa25b7302/",
			instagram: "https://www.instagram.com/_tanishq_.27/"
		},
		{
			id: 10,
			name: "Shivendra Kumar",
			position: "Design Co-Head",
			image: "/assets/council/21.png",
			linkedin: "https://www.linkedin.com/in/shivendra-kumar-467b9a2a5/",
			instagram: "https://www.instagram.com/_shiv_endra_?igsh=MXRtcjYwN2o2OWJ4Mw=="
		},
		{
			id: 11,
			name: "Aditya Yadav",
			position: "Delligence Incharge",
			image: "/assets/council/26.png",
			linkedin: "https://www.linkedin.com/in/aditya-yadav-570846289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			instagram: "https://www.instagram.com/aditya._.5?igsh=MXYwNzM5NHU0aWEzMA=="
		},
		{
			id: 12,
			name: "Soham Rajawat",
			position: "Chief Photographer",
			image: "/assets/council/34.png",
			linkedin: "https://www.linkedin.com/in/soham-rajawat-201995382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			instagram: "https://www.instagram.com/_s.air.r_?igsh=MWRrdGE4OTVpODN3Yw=="
		},
		{
			id: 13,
			name: "",
			position: "Delligence Incharge",
			image: "/assets/council/26.png",
			linkedin: "https://www.linkedin.com/in/aditya-yadav-570846289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			instagram: "https://www.instagram.com/aditya._.5?igsh=MXYwNzM5NHU0aWEzMA=="
		},
		{
			id: 14,
			name: "Harshit Jaipuria",
			position: "Sponsorship Head",
			image: "/assets/council/11.png",
			linkedin: "https://www.linkedin.com/in/harshit-jaipuria/",
			instagram: "https://www.instagram.com/harshit_jaipuria/"
		},
		{
			id: 15,
			name: "Anuj Sengar",
			position: "Media & Publicity Co-Head",
			image: "/assets/council/7.png",
			linkedin: "https://www.linkedin.com/in/anujsengarr/",
			instagram: "https://www.instagram.com/anujsengarr/"
		},
		{
			id: 16,
			name: "Sarthak Singh",
			position: "Design Head",
			image: "/assets/council/8.png",
			linkedin: "https://www.linkedin.com/in/sarthak-singh-93b367326/",
			instagram: "https://www.instagram.com/_sarthak._.singh_/"
		},
		{
			id: 17,
			name: "Tarun Sharma",
			position: "Data Head",
			image: "/assets/council/14.png",
			linkedin: "https://www.linkedin.com/in/tarun-sharma-835253335/",
			instagram: "https://www.instagram.com/tar_unsharma77/"
		},
		{
			id: 18,
			name: "Nancy Paul",
			position: "Data Co-Head",
			image: "/assets/council/22.png",
			linkedin: "https://www.linkedin.com/in/nancy-paul-704b59271/",
			instagram: "https://www.instagram.com/nancypaul_08/"
		},
		{
			id: 19,
			name: "Samarth Gurjar",
			position: "Operations Head",
			image: "/assets/council/16.png",
			linkedin: "https://www.linkedin.com/in/samarth-singh-1b58b7331/",
			instagram: "https://www.instagram.com/singh.samarth___/"
		},
		{
			id: 20,
			name: "Ansh Tomar",
			position: "Operations Co-Head",
			image: "/assets/council/24.png",
			linkedin: "https://www.linkedin.com/in/ansh-tomar-70b323232/",
			instagram: "https://www.instagram.com/tomar_ansh23/"
		},
		{
			id: 21,
			name: "Abhinav Saxena",
			position: "Judges & Mentors Head",
			image: "/assets/council/15.png",
			linkedin: "https://www.linkedin.com/in/abhinav-saxena-040b53309/",
			instagram: "/#"
		},
		{
			id: 22,
			name: "Aryan Singh",
			position: "Logistics Head",
			image: "/assets/council/4.png",
			linkedin: "https://www.linkedin.com/in/simple-aryan/",
			instagram: "https://www.instagram.com/_aironer_/"
		},
		{
			id: 23,
			name: "Harsh Raj",
			position: "Tech Head",
			image: "/assets/council/5.png",
			linkedin: "https://www.linkedin.com/in/harsh-raj-085064266/",
			instagram: "https://www.instagram.com/_.harsh._raj/"
		},
		{
			id: 24,
			name: "Asmit Jain",
			position: "Marketing Head",
			image: "/assets/council/10.png",
			linkedin: "/#",
			instagram: "https://www.instagram.com/asmitjain_/"
		},
		{
			id: 25,
			name: "Bhoomika Agrawal",
			position: "Hospitality Team",
			image: "/assets/council/19.png",
			linkedin: "https://www.linkedin.com/in/bhoomika-agarwal-981196326/",
			instagram: "https://www.instagram.com/pvt_bhoomika23/"
		},


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
								<p>Meet the dedicated team behind TechStars 2025. Our committee members work tirelessly to ensure the success of this prestigious event.</p>
							</div>
						</div>
					</div>
					
					<div className="row">
						{committeeMembers.map((member) => (
							<div key={member.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
								<div className="committee-member-card">
									<div className="member-image">
										<img src={member.image} alt={member.name} className="img-fluid" />
										<div className="member-overlay">
											<div className="social-links">
												<Link href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
													<i className="fa-brands fa-instagram"></i>
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
				</div>
			</section>
		</>
	)
}
