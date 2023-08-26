import React from "react";

const Contact = () => {
	return (
		<section id="contact" className="pt-36 2xl:pt-72">
			<h1
				className="text-3xl text-center font-bold text-primary 2xl:text-4xl"
				data-aos="fade-up"
				data-aos-easing="ease-in-out"
				data-aos-once="true"
				data-aos-duration="1000"
			>
				Contact
			</h1>
			<div
				id="alert"
				className="hidden w-1/2 mx-auto mt-10 text-slate-900 text-lg text-center bg-primary rounded-lg px-4 py-2 border border-secondary shadow-gold-glow animate-shadow-pulse md:w-1/3 md:text-xl 2xl:text-2xl 2xl:px-6 2xl:py-4"
			>
				Your message has sent!
			</div>
			<div className="container mt-10 px-10 sm:px-5 xl:px-16">
				<form
					action=""
					name="contact-form"
					method="post"
					className="flex flex-col mx-auto w-9/12 lg:w-1/2"
				>
					<div
						className="input-box w-full mx-auto my-5 flex justify-center relative"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-duration="1000"
					>
						<input
							type="text"
							className="input-form w-full border-2 border-primary bg-transparent p-2 rounded-md"
							name="name"
							autoComplete="off"
							required
						/>
						<span className="absolute left-1 p-2 pointer-events-none transition duration-300 ease-out">
							Name
						</span>
					</div>
					<div
						className="input-box w-full mx-auto my-5 flex justify-center relative"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-duration="1000"
					>
						<input
							type="email"
							className="input-form w-full border-2 border-primary bg-transparent p-2 rounded-md"
							name="email"
							autoComplete="off"
							required
						/>
						<span className="absolute left-1 p-2 pointer-events-none transition duration-300 ease-out">
							Email
						</span>
					</div>
					<div
						className="input-box w-full mx-auto my-5 flex justify-center relative"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-duration="1000"
					>
						<textarea
							type="text"
							className="input-form w-full border-2 border-primary bg-transparent p-2 rounded-md"
							name="message"
							autoComplete="off"
							required
						/>
						<span className="absolute left-1 p-2 pointer-events-none transition duration-300 ease-out">
							Message
						</span>
					</div>
					<button
						type="submit"
						id="send"
						className="w-max mx-auto mt-5 px-5 py-2 bg-primary text-slate-900 rounded-full shadow-gold-glow animate-shadow-pulse transition duration-300 ease-in-out hover:bg-secondary"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-once="true"
						data-aos-duration="1000"
						onClick={() => {
							const scriptURL =
								"https://script.google.com/macros/s/AKfycbxk5wFU7JdMUY-BoHAQeMZQ9gp3dl0U2-gMl0cdm1AYlC-Pf642oRXti-hwKmThRDs/exec";
							const form = document.forms["contact-form"];
							const alert = document.getElementById("alert");

							form.addEventListener("submit", (e) => {
								e.preventDefault();
								fetch(scriptURL, { method: "POST", body: new FormData(form) })
									.then((response) => {
										alert.classList.toggle("hidden");
										form.reset();
									})
									.catch((error) => console.error("Error!", error.message));
							});
						}}
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
