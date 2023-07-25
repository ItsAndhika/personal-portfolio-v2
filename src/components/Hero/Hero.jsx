import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
	return (
		<section id="hero" className="pt-36">
			<div
				className="container flex items-center flex-col px-10 sm:px-5 md:flex-row xl:px-16"
				data-aos="fade-up"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				data-aos-duration="1000"
			>
				<article className="w-full md:w-2/3">
					<h1 className="font-bold text-3xl text-secondary mb-3 lg:text-4xl 2xl:text-5xl">
						Hi, Call Me{" "}
						<span className="text-primary drop-shadow-text-glow">
							Primananda Andhika
						</span>
					</h1>
					<Typewriter
						options={{
							strings: [
								"Web Developer",
								"Language Learner",
								"Student",
								"Coding Enjoyer",
							],
							autoStart: true,
							delay: 20,
							wrapperClassName:
								"mt-5 text-lg text-primary lg:text-xl 2xl:text-2xl",
							deleteSpeed: 0,
							loop: true,
						}}
					/>
					<p className="mt-3 mb-5 max-w-lg text-base lg:text-xl lg:mb-10 2xl:text-2xl">
						A 15 year old Junior Web Developer who wants to be a better person
						everyday by learn anything that I like.
					</p>
					<a
						href="#contact"
						className="w-max px-5 py-2 bg-primary text-slate-900 rounded-full shadow-gold-glow animate-shadow-pulse transition duration-300 ease-in-out hover:bg-secondary lg:px-6 lg:py-3"
					>
						Contact Me
					</a>
				</article>
				<img
					src="/assets/images/suit.webp"
					alt="Office Suit"
					className="w-full mt-10 sm:w-2/3 md:w-1/3"
				/>
			</div>
		</section>
	);
};

export default Hero;
