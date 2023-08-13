import { React, useState, useEffect } from "react";
import {
	IconBrandTelegram,
	IconClipboardText,
	IconHome2,
	IconUser,
} from "@tabler/icons-react";

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [isActive]);
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
			<header className="fixed bottom-0 left-0 w-full z-10 backdrop-blur-md p-5 sm:hidden">
				<nav className="container flex justify-around items-center">
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
