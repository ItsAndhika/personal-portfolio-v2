import { React, useState, useEffect } from "react";
import {
	IconBrandTelegram,
	IconClipboardText,
	IconHome2,
	IconUser,
} from "@tabler/icons-react";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	let lastScrollY = window.scrollY;
	window.addEventListener("scroll", function () {
		if (lastScrollY < window.scrollY) {
			setIsScrolled(true);
		}
		if (window.scrollY <= 0) {
			setIsScrolled(false);
		}

		lastScrollY = window.scrollY;
	});

	return (
		<>
			<header className="hidden fixed w-screen max-w-screen py-5 z-10 bg-transparent backdrop-blur-md sm:flex md:py-10">
				<div className="container flex justify-between items-center px-10 sm:px-5 xl:px-16">
					<a
						href="#"
						className="text-xl font-bold font-montserrat text-primary self-start"
					>
						PA
					</a>
					<nav>
						<ul className="hidden text-3xl md:flex">
							<li className="nav-link">
								<a href="#">Home</a>
							</li>
							<li className="nav-link">
								<a href="#about">About</a>
							</li>
							<li className="nav-link">
								<a href="#skills">Skills</a>
							</li>
							<li className="nav-link">
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<header
				className={`${
					isScrolled && "translate-y-12"
				} fixed bottom-0 left-0 w-full z-10 bg-zinc-900 px-5 rounded-tl-2xl rounded-tr-rounded-tl-2xl transition-all duration-300 ease-in-out sm:hidden`}
			>
				<div className="w-1/3 h-1 mx-auto bg-zinc-700 mb-5 mt-0.5 rounded-full relative top-0"></div>
				<nav className="container flex justify-around items-center mb-5">
					<a href="#">
						<IconHome2 className="transition duration-300 ease-in-out hover:text-primary focus:text-primary" />
					</a>
					<a href="#about">
						<IconUser className="transition duration-300 ease-in-out hover:text-primary focus:text-primary" />
					</a>
					<a href="#skills">
						<IconClipboardText className="transition duration-300 ease-in-out hover:text-primary focus:text-primary" />
					</a>
					<a href="#contact">
						<IconBrandTelegram className="transition duration-300 ease-in-out hover:text-primary focus:text-primary" />
					</a>
				</nav>
			</header>
		</>
	);
};

export default Header;
