import React from "react";

const About = () => {
	return (
		<section id="about" className="pt-36 2xl:pt-72">
			<h1
				className="text-3xl text-center font-bold text-primary 2xl:text-4xl"
				data-aos="fade-up"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				data-aos-duration="1000"
			>
				About Me
			</h1>
			<div className="container flex flex-col items-center px-10 sm:px-5 xl:px-16">
				<article className="flex flex-col justify-center items-center mx-auto pt-10 md:flex-row">
					<img
						src="/assets/images/profile.webp"
						alt="Profile"
						className="rounded-2xl w-full shadow-gold-glow animate-shadow-pulse sm:w-96 md:w-1/3"
						loading="lazy"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-duration="1000"
					/>
					<div className="w-full flex flex-col md:w-2/3 md:pl-20 lg:justify-between">
						<p
							className="text-lg mt-10 font-open-sans max-w-sm md:mt-0 lg:max-w-md lg:text-xl lg:mb-10 xl:max-w-full xl:text-xl 2xl:text-2xl"
							data-aos="fade-up"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-duration="1000"
						>
							Hi there! My name is Primananda Andhika, i am from Central Java,
							Indonesia. Currently i live in Purworejo with my family. I've been
							programming since I was at class 8 Junior High School, and now i'm
							15 years old.
						</p>
						<p
							className="text-lg mt-10 font-open-sans max-w-sm md:mt-5 lg:max-w-md lg:text-xl lg:mt-10 xl:max-w-full xl:text-xl 2xl:text-2xl"
							data-aos="fade-up"
							data-aos-easing="ease-in-out"
							data-aos-once="true"
							data-aos-duration="1000"
						>
							The first programming language that I learned was JavaScript and i
							love that language so much. I'm also learning foreign languages
							like English, Spanish, French, Chinese but i'm still not fluent
							with those languages yet.
						</p>
					</div>
				</article>
			</div>
		</section>
	);
};

export default About;
