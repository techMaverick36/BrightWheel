import { useState, useEffect } from "react";
import {
	FiArrowRight,
	FiMail,
	FiPhone,
	FiMapPin,
	FiCheck,
	FiTrendingUp,
	FiGlobe,
	FiShield,
	FiUsers,
	FiAward,
	FiZap,
} from "react-icons/fi";
import {
	HiOutlineOfficeBuilding,
	HiOutlineShoppingCart,
	HiOutlineFilm,
	HiOutlineHome,
	HiOutlineCube,
	HiOutlineBriefcase,
} from "react-icons/hi";
import { RiPlantLine, RiLightbulbLine, RiLeafLine } from "react-icons/ri";

const BrightwheelLanding = () => {
	const [scrolled, setScrolled] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Hero background images from Unsplash
	const heroImages = [
		"https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80", // Modern office
		"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80", // City skyline
		"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80", // Business meeting
		"https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80", // Team collaboration
		"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80", // Analytics dashboard
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Image slider effect
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) =>
				prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
			);
		}, 5000); // Change image every 5 seconds

		return () => clearInterval(interval);
	}, [heroImages.length]);

	const coreValues = [
		{
			icon: <RiLightbulbLine className="w-8 h-8" />,
			title: "Innovation & Excellence",
			description:
				"Pioneering solutions that set industry standards and drive meaningful progress across all sectors we serve.",
		},
		{
			icon: <RiLeafLine className="w-8 h-8" />,
			title: "Sustainability",
			description:
				"Committed to environmental stewardship and creating solutions that protect our planet for future generations.",
		},
		{
			icon: <FiTrendingUp className="w-8 h-8" />,
			title: "Organized & Efficient",
			description:
				"Streamlined processes and strategic frameworks that maximize productivity and deliver exceptional results.",
		},
		{
			icon: <FiZap className="w-8 h-8" />,
			title: "Smart Solutions",
			description:
				"Technology-driven approaches that leverage cutting-edge innovations to solve complex business challenges.",
		},
	];

	const services = [
		{
			icon: <HiOutlineOfficeBuilding className="w-10 h-10" />,
			title: "IT & Office Technology",
			description:
				"Transform your workspace with intelligent technology solutions",
			features: [
				"Smart office devices",
				"Cloud solutions",
				"Innovative workstations",
				"Ergonomic office setups",
			],
			image:
				"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
			imageAlt: "modern office workspace",
		},
		{
			icon: <HiOutlineShoppingCart className="w-10 h-10" />,
			title: "Online Commerce & Digital Marketing",
			description: "Elevate your digital presence and maximize online revenue",
			features: [
				"E-commerce solutions",
				"Online marketing",
				"Customer engagement",
				"Digital transformation",
			],
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
			imageAlt: "digital marketing analytics",
		},
		{
			icon: <HiOutlineFilm className="w-10 h-10" />,
			title: "Media & Entertainment",
			description: "Create compelling experiences that captivate your audience",
			features: [
				"Music production",
				"Event coverage",
				"Brand storytelling",
				"Visual experiences",
			],
			image:
				"https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
			imageAlt: "media production studio",
		},
		{
			icon: <HiOutlineHome className="w-10 h-10" />,
			title: "Real Estate & Construction",
			description: "Building sustainable communities and smart living spaces",
			features: [
				"Affordable housing",
				"Sustainable development",
				"Smart living solutions",
			],
			image:
				"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
			imageAlt: "modern construction development",
		},
		{
			icon: <HiOutlineCube className="w-10 h-10" />,
			title: "Manufacturing & Packaging",
			description: "Quality-driven production with environmental consciousness",
			features: [
				"Smart packaging",
				"Eco-friendly materials",
				"Quality manufacturing",
			],
			image:
				"https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
			imageAlt: "manufacturing facility",
		},
		{
			icon: <RiPlantLine className="w-10 h-10" />,
			title: "Agriculture, Mining & Oil",
			description: "Sustainable resource management for a better tomorrow",
			features: [
				"Sustainable farming",
				"Resource management",
				"Agri-tech solutions",
				"Energy exploration",
			],
			image:
				"https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
			imageAlt: "agricultural technology",
		},
		{
			icon: <HiOutlineBriefcase className="w-10 h-10" />,
			title: "Consultancy & Insurance",
			description: "Strategic guidance and comprehensive risk management",
			features: [
				"Strategic partnerships",
				"Business consultancy",
				"Risk management",
				"Compliance services",
			],
			image:
				"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
			imageAlt: "business consultation",
		},
	];

	const whyChooseUs = [
		{
			icon: <FiGlobe className="w-6 h-6" />,
			title: "Multi-Industry Expertise",
			description:
				"Comprehensive solutions across seven major sectors with proven track records.",
		},
		{
			icon: <FiShield className="w-6 h-6" />,
			title: "Trusted Partnership",
			description:
				"Built on integrity, transparency, and a commitment to your success.",
		},
		{
			icon: <FiUsers className="w-6 h-6" />,
			title: "Client-Centric Approach",
			description:
				"Tailored solutions that align perfectly with your unique business objectives.",
		},
		{
			icon: <FiAward className="w-6 h-6" />,
			title: "Proven Excellence",
			description:
				"Delivering exceptional quality and measurable results across all engagements.",
		},
	];

	const stats = [
		{ number: "7", label: "Industry Sectors", suffix: "+" },
		{ number: "100", label: "Client Satisfaction", suffix: "%" },
		{ number: "15", label: "Years Experience", suffix: "+" },
		{ number: "500", label: "Projects Delivered", suffix: "+" },
	];

	return (
		<div className="min-h-screen bg-slate-50 font-['Crimson_Pro']">
			{/* Custom Fonts */}
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
        
        body {
          font-family: 'Manrope', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Crimson Pro', serif;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-animate {
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
        }

        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .feature-dot::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          border-radius: 50%;
        }
      `}</style>

			{/* Navigation */}
			<nav
				className={`fixed w-full z-50 transition-all duration-300 ${
					scrolled
						? "bg-slate-900/95 backdrop-blur-lg shadow-xl"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						<div className="flex items-center space-x-2">
							<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-xl">B</span>
							</div>
							<span className="text-2xl font-bold text-white tracking-tight">
								Brightwheel <span className="text-blue-400">Ltd</span>
							</span>
						</div>

						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#about"
								className="text-slate-200 hover:text-blue-400 transition-colors font-medium"
							>
								About
							</a>
							<a
								href="#services"
								className="text-slate-200 hover:text-blue-400 transition-colors font-medium"
							>
								Services
							</a>
							<a
								href="#why-us"
								className="text-slate-200 hover:text-blue-400 transition-colors font-medium"
							>
								Why Us
							</a>
							<a
								href="#contact"
								className="text-slate-200 hover:text-blue-400 transition-colors font-medium"
							>
								Contact
							</a>
							<a
								href="#contact"
								className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
				{/* Background Image Slider */}
				<div className="absolute inset-0 overflow-hidden">
					{heroImages.map((image, index) => (
						<div
							key={index}
							className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
								index === currentImageIndex ? "opacity-100" : "opacity-0"
							}`}
						>
							<img
								src={image}
								alt={`Hero background ${index + 1}`}
								className="w-full h-full object-cover"
							/>
							{/* Lighter overlay for better image visibility */}
							<div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-blue-900/65"></div>
						</div>
					))}
				</div>

				{/* Animated Background Elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-0 left-0 w-full h-full opacity-10">
						<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
						<div
							className="absolute top-40 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-float"
							style={{ animationDelay: "2s" }}
						></div>
						<div
							className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-float"
							style={{ animationDelay: "4s" }}
						></div>
					</div>

					{/* Grid Pattern */}
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
							backgroundSize: "40px 40px",
						}}
					></div>
				</div>

				<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 z-10">
					<div className="max-w-4xl">
						{/* Badge */}
						<div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm animate-slide-in-up">
							<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
							<span className="text-blue-300 text-sm font-semibold tracking-wide">
								INNOVATION • EXCELLENCE • SUSTAINABILITY
							</span>
						</div>

						{/* Main Heading */}
						<h1
							className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-in-up"
							style={{ animationDelay: "0.1s" }}
						>
							Empowering Your Vision Across
							<span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 gradient-animate">
								Seven Industries
							</span>
						</h1>

						{/* Subtitle */}
						<p
							className="text-xl text-white font-medium mb-10 leading-relaxed max-w-2xl animate-slide-in-up font-['Manrope']"
							style={{ animationDelay: "0.2s" }}
						>
							Brightwheel Ltd delivers integrated solutions that foster
							innovation, promote sustainability, and drive excellence. From
							technology to real estate, we're your trusted partner for
							transformative growth.
						</p>

						{/* CTA Buttons */}
						<div
							className="flex flex-wrap gap-4 animate-slide-in-up"
							style={{ animationDelay: "0.3s" }}
						>
							<a
								href="#contact"
								className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 flex items-center space-x-2"
							>
								<span>Request Consultation</span>
								<FiArrowRight className="group-hover:translate-x-1 transition-transform" />
							</a>
							<a
								href="#services"
								className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 hover:-translate-y-1"
							>
								Explore Services
							</a>
						</div>

						{/* Trust Indicators */}
						<div
							className="mt-16 flex flex-wrap gap-12 animate-slide-in-up"
							style={{ animationDelay: "0.4s" }}
						>
							{stats.map((stat, index) => (
								<div key={index} className="text-center">
									<div className="text-4xl font-bold text-white mb-1">
										{stat.number}
										<span className="text-blue-400">{stat.suffix}</span>
									</div>
									<div className="text-sm text-slate-400 font-medium">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Image Side */}
						<div className="relative">
							<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
								<img
									src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
									alt="Brightwheel team collaboration"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl -z-10 opacity-20"></div>
						</div>

						{/* Content Side */}
						<div>
							<div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
								ABOUT BRIGHTWHEEL LTD
							</div>

							<h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
								Building the Future Through
								<span className="text-blue-600"> Innovation & Values</span>
							</h2>

							<div className="space-y-4 text-lg text-slate-600 font-['Manrope'] leading-relaxed">
								<p>
									At Brightwheel Ltd, we believe in the power of integrated
									solutions that transcend industry boundaries. Our mission is
									to foster innovation and excellence while promoting
									sustainability across every sector we serve.
								</p>
								<p>
									With expertise spanning IT, digital commerce, media, real
									estate, manufacturing, agriculture, and consultancy, we
									deliver comprehensive solutions that drive measurable impact
									and lasting value.
								</p>
								<p>
									Our vision is clear: to create a future driven by strong
									values, exceptional service, and transformative solutions that
									benefit businesses, communities, and the environment.
								</p>
							</div>

							<div className="mt-8 flex flex-wrap gap-4">
								<div className="flex items-center space-x-2 text-slate-700">
									<FiCheck className="w-5 h-5 text-blue-600" />
									<span className="font-semibold">
										ISO Certified Excellence
									</span>
								</div>
								<div className="flex items-center space-x-2 text-slate-700">
									<FiCheck className="w-5 h-5 text-blue-600" />
									<span className="font-semibold">Sustainability Focused</span>
								</div>
								<div className="flex items-center space-x-2 text-slate-700">
									<FiCheck className="w-5 h-5 text-blue-600" />
									<span className="font-semibold">Innovation Driven</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Core Values Section */}
			<section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-16">
						<div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
							OUR GUIDING PRINCIPLES
						</div>
						<h2 className="text-5xl font-bold text-slate-900 mb-6">
							Core Values That Define Us
						</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto font-['Manrope']">
							Every decision we make and every solution we deliver is anchored
							in these fundamental principles.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{coreValues.map((value, index) => (
							<div
								key={index}
								className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
									{value.icon}
								</div>
								<h3 className="text-xl font-bold text-slate-900 mb-3">
									{value.title}
								</h3>
								<p className="text-slate-600 leading-relaxed font-['Manrope']">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="text-center mb-16">
						<div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
							COMPREHENSIVE SOLUTIONS
						</div>
						<h2 className="text-5xl font-bold text-slate-900 mb-6">
							Seven Industries, Infinite Possibilities
						</h2>
						<p className="text-xl text-slate-600 max-w-3xl mx-auto font-['Manrope']">
							From technology to agriculture, we deliver specialized expertise
							that transforms challenges into opportunities.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="service-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100"
							>
								{/* Image */}
								<div className="relative h-48 overflow-hidden">
									<img
										src={service.image}
										alt={service.imageAlt}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
									<div className="absolute bottom-4 left-4 text-white">
										<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
											{service.icon}
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="p-6">
									<h3 className="text-2xl font-bold text-slate-900 mb-2">
										{service.title}
									</h3>
									<p className="text-slate-600 mb-4 font-['Manrope']">
										{service.description}
									</p>

									{/* Features */}
									<ul className="space-y-2">
										{service.features.map((feature, fIndex) => (
											<li
												key={fIndex}
												className="flex items-start space-x-2 text-sm text-slate-600"
											>
												<FiCheck className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
												<span className="font-['Manrope']">{feature}</span>
											</li>
										))}
									</ul>

									{/* Learn More Link */}
									<a
										href="#contact"
										className="inline-flex items-center space-x-2 mt-6 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors"
									>
										<span>Learn More</span>
										<FiArrowRight className="group-hover:translate-x-1 transition-transform" />
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section
				id="why-us"
				className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
			>
				{/* Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
							backgroundSize: "40px 40px",
						}}
					></div>
				</div>

				<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
							THE BRIGHTWHEEL ADVANTAGE
						</div>
						<h2 className="text-5xl font-bold mb-6">Why Partners Choose Us</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto font-['Manrope']">
							Our commitment to excellence, innovation, and sustainable growth
							sets us apart as the preferred multi-industry solutions partner.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
						{whyChooseUs.map((reason, index) => (
							<div
								key={index}
								className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
							>
								<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4">
									{reason.icon}
								</div>
								<h3 className="text-xl font-bold mb-2">{reason.title}</h3>
								<p className="text-slate-300 font-['Manrope']">
									{reason.description}
								</p>
							</div>
						))}
					</div>

					{/* CTA Box */}
					<div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 text-center">
						<h3 className="text-3xl font-bold mb-4">
							Ready to Transform Your Business?
						</h3>
						<p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto font-['Manrope']">
							Let's discuss how Brightwheel Ltd can help you achieve your
							strategic objectives across any industry.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a
								href="#contact"
								className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
							>
								Schedule a Consultation
							</a>
							<a
								href="tel:+256773305509"
								className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
							>
								Call Us Now
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16">
						{/* Left Side - Contact Info */}
						<div>
							<div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
								GET IN TOUCH
							</div>

							<h2 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
								Let's Build Something
								<span className="text-blue-600"> Extraordinary Together</span>
							</h2>

							<p className="text-lg text-slate-600 mb-8 font-['Manrope'] leading-relaxed">
								Whether you're looking to transform your operations, explore new
								markets, or drive sustainable growth, our team is ready to help
								you succeed.
							</p>

							{/* Contact Details */}
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
										<FiMapPin className="w-6 h-6" />
									</div>
									<div>
										<div className="font-bold text-slate-900 mb-1">
											Our Office
										</div>
										<div className="text-slate-600 font-['Manrope']">
											Post Office Building, First Floor
											<br />
											Annex Extension
											<br />
											P.O. Box 104438, Kampala
										</div>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
										<FiMail className="w-6 h-6" />
									</div>
									<div>
										<div className="font-bold text-slate-900 mb-1">
											Email Us
										</div>
										<a
											href="mailto:asingire@gmail.com"
											className="text-blue-600 hover:text-blue-700 font-['Manrope']"
										>
											asingire@gmail.com
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
										<FiPhone className="w-6 h-6" />
									</div>
									<div>
										<div className="font-bold text-slate-900 mb-1">Call Us</div>
										<a
											href="tel:+256773305509"
											className="text-blue-600 hover:text-blue-700 font-['Manrope']"
										>
											+256 773 305 509
										</a>
									</div>
								</div>
							</div>

							{/* Business Hours */}
							<div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
								<div className="font-bold text-slate-900 mb-2">
									Business Hours
								</div>
								<div className="text-slate-600 font-['Manrope'] space-y-1">
									<div>Monday - Friday: 8:00 AM - 6:00 PM</div>
									<div>Saturday: 9:00 AM - 2:00 PM</div>
									<div>Sunday: Closed</div>
								</div>
							</div>
						</div>

						{/* Right Side - Contact Form */}
						<div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 border border-slate-200">
							<h3 className="text-2xl font-bold text-slate-900 mb-6">
								Send Us a Message
							</h3>

							<form className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-semibold text-slate-700 mb-2">
											First Name
										</label>
										<input
											type="text"
											className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
											placeholder="John"
										/>
									</div>
									<div>
										<label className="block text-sm font-semibold text-slate-700 mb-2">
											Last Name
										</label>
										<input
											type="text"
											className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
											placeholder="Doe"
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2">
										Email Address
									</label>
									<input
										type="email"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
										placeholder="john.doe@example.com"
									/>
								</div>

								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2">
										Phone Number
									</label>
									<input
										type="tel"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
										placeholder="+256 xxx xxx xxx"
									/>
								</div>

								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2">
										Service of Interest
									</label>
									<select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all">
										<option>Select a service...</option>
										<option>IT & Office Technology</option>
										<option>Online Commerce & Digital Marketing</option>
										<option>Media & Entertainment</option>
										<option>Real Estate & Construction</option>
										<option>Manufacturing & Packaging</option>
										<option>Agriculture, Mining & Oil</option>
										<option>Consultancy & Insurance</option>
										<option>Multiple Services</option>
									</select>
								</div>

								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2">
										Message
									</label>
									<textarea
										rows={4}
										className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
										placeholder="Tell us about your project or inquiry..."
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/50 hover:-translate-y-1 flex items-center justify-center space-x-2"
								>
									<span>Send Message</span>
									<FiArrowRight />
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="grid md:grid-cols-3 gap-12 mb-8">
						{/* Company Info */}
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold text-xl">B</span>
								</div>
								<span className="text-2xl font-bold">
									Brightwheel <span className="text-blue-400">Ltd</span>
								</span>
							</div>
							<p className="text-slate-400 font-['Manrope']">
								Empowering innovation and excellence across seven industry
								sectors with sustainable, future-focused solutions.
							</p>
						</div>

						{/* Quick Links */}
						<div>
							<h4 className="font-bold text-lg mb-4">Quick Links</h4>
							<ul className="space-y-2 font-['Manrope']">
								<li>
									<a
										href="#about"
										className="text-slate-400 hover:text-blue-400 transition-colors"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="#services"
										className="text-slate-400 hover:text-blue-400 transition-colors"
									>
										Services
									</a>
								</li>
								<li>
									<a
										href="#why-us"
										className="text-slate-400 hover:text-blue-400 transition-colors"
									>
										Why Choose Us
									</a>
								</li>
								<li>
									<a
										href="#contact"
										className="text-slate-400 hover:text-blue-400 transition-colors"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h4 className="font-bold text-lg mb-4">Get In Touch</h4>
							<ul className="space-y-2 text-slate-400 font-['Manrope']">
								<li>P.O. Box 104438, Kampala</li>
								<li>
									<a
										href="mailto:asingire@gmail.com"
										className="hover:text-blue-400 transition-colors"
									>
										asingire@gmail.com
									</a>
								</li>
								<li>
									<a
										href="tel:+256773305509"
										className="hover:text-blue-400 transition-colors"
									>
										+256 773 305 509
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm font-['Manrope']">
						<p>
							&copy; {new Date().getFullYear()} Brightwheel Ltd. All rights
							reserved. Innovation • Excellence • Sustainability
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default BrightwheelLanding;
